<template>
  <div class="input_container" ref="inputContainerRef" :class="inputContainerClasses"
       :style="computedInputContainerStyles">
    <div class="out_icon" v-if="iconType === 'icon' && iconPosition === 'out'" :style="computedOutIconStyles">
      <Icon :type="icon" :size="computedIconSize" :color="computedIconColor"></Icon>
    </div>
    <div class="out_icon" v-if="iconType === 'svg' && iconPosition === 'out'" :style="computedOutIconStyles">
      <Icon :svg="icon.replace(/^#/, '')" :size="computedIconSize" :color="computedIconColor"></Icon>
    </div>

    <div class="input_wrapper" ref="inputWrapperRef" :style="computedInputWrapStyles">
      <label class="input_label" :style="computedLabelStyles">
        {{label}}
        <span style="margin-left: 4px; font-size: 18px;" v-if="required">*</span>
      </label>
      <div class="in_icon" v-if="iconType === 'icon' && iconPosition === 'in'" :style="computedInIconStyles">
        <Icon :type="icon" :size="computedIconSize" :color="computedIconColor"></Icon>
      </div>
      <div class="in_icon" v-if="iconType === 'svg' && iconPosition === 'in'" :style="computedInIconStyles">
        <Icon :svg="icon.replace(/^#/, '')" :size="computedIconSize" :color="computedIconColor"></Icon>
      </div>
      <input :type="realType" ref="inputRef"
             :placeholder="placeholder"
             :style="computedInputStyles"
             :uuid="uuid"
             v-placeholder="placeholderStyle"
             @input="input"
             @focus="inputFocus"
             @blur="inputBlur"
             @mouseenter="mouseenter"
             @mouseleave="mouseleave"
             :value="realValue"
      />
      <div class="show_password"
           :style="showPasswordStyles"
           v-if="type === 'password'"
           @click="toggleShowPassword">
        <Icon type="ios-eye" key="show-password" size="24" v-if="!showPassword"/>
        <Icon type="ios-eye-off" key="hide-password" size="24" v-else/>
      </div>
      <div class="input_tips" ref="inputTipRef" :style="computedTipStyles">
        <span>{{tipMessage || tip}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
  import { oneOf, findComponentUpward } from '../../utils/assist'
  import calcTextareaHeight from '../../utils/calcTextareaHeight'
  import placeholder from '../../directives/placeholder'
  import Emitter from '../../mixins/emitter'
  import Icon from '../icon/icon.vue'

  const prefixCls = 'ivu-input'

  function S4 () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }

  function getUUID () {
    return (S4() + S4() + '-' + S4() + '-' + S4() + S4())
  }

  export default {
    name: 'Input',
    mixins: [Emitter],
    directives: {placeholder},
    components: {Icon},
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['text', 'number', 'textarea', 'password', 'url', 'email', 'date'])
        },
        default: 'text'
      },
      value: {
        type: [String, Number],
        default: ''
      },
      size: {
        validator (value) {
          return oneOf(value, ['small', 'large', 'default'])
        },
        default () {
          return !this.$enkel || this.$enkel.size === '' ? 'default' : this.$enkel.size
        }
      },
      placeholder: { // c
        type: String,
        default: '请输入'
      },
      label: { // c
        type: String,
        default: 'Label'
      },
      tip: {
        type: String,
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      },
      shrink: { // 是否展开
        type: Boolean,
        default: false
      },
      theme: {
        validator (value) {
          return oneOf(value, ['default', 'primary', 'info', 'warning', 'error'])
        },
        default: 'default'
      },
      limitType: {
        type: [String, RegExp],
        default: ''
      },
      icon: String,
      iconPosition: {
        validator (value) {
          return oneOf(value, ['in', 'out'])
        },
        default: 'out'
      },
      iconStyle: {
        type: Object,
        default () {
          return {}
        }
      },
      labelStyle: {
        type: Object,
        default () {
          return {}
        }
      },
      inputStyle: {
        type: Object,
        default () {
          return {}
        }
      },
      placeholderStyle: {
        type: Object,
        default () {
          return {}
        }
      },
      tipStyle: {
        type: Object,
        default () {
          return {}
        }
      },
      maxlength: {
        type: Number
      },
      disabled: {
        type: Boolean,
        default: false
      },
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      rows: {
        type: Number,
        default: 2
      },
      readonly: {
        type: Boolean,
        default: false
      },
      name: {
        type: String
      },
      number: {
        type: Boolean,
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      spellcheck: {
        type: Boolean,
        default: false
      },
      autocomplete: {
        validator (value) {
          return oneOf(value, ['on', 'off'])
        },
        default: 'off'
      },
      clearable: {
        type: Boolean,
        default: false
      },
      elementId: {
        type: String
      },
      wrap: {
        validator (value) {
          return oneOf(value, ['hard', 'soft'])
        },
        default: 'soft'
      },
      prefix: {
        type: String,
        default: ''
      },
      suffix: {
        type: String,
        default: ''
      },
      search: {
        type: Boolean,
        default: false
      },
      enterButton: {
        type: [Boolean, String],
        default: false
      }
    },
    data () {
      return {
        currentValue: this.value,
        prefixCls: prefixCls,
        prepend: true,
        append: true,
        slotReady: false,
        textareaStyles: {},
        showPrefix: false,
        showSuffix: false,
        inputWrapperHeight: 0,
        inputHeight: 0,
        inputTipHeight: 0,
        uuid: getUUID(),
        realTheme: '',
        realShrink: false,
        realValue: '',
        inputFocused: false,
        inputHovered: false,
        tipMessage: '',
        showPassword: false,
        matcher: {
          number: /[\d\.]/,
          character: /[a-z]/i,
          chinese: /[\u4e00-\u9fa5]/
        }
      }
    },
    computed: {
      iconType () {
        return this.icon ? (this.icon.match(/^#/) ? 'svg' : 'icon') : ''
      },
      inputContainerClasses () {
        return [
          this.uuid,
          this.realTheme,
          {
            'shrink': this.realShrink || (this.iconType !== '' && this.iconPosition === 'in'),
            'focus': this.inputFocused,
            'hover': this.inputHovered
          }
        ]
      },
      computedInputContainerStyles () {
        return {
          paddingLeft: ((this.iconType !== '' && this.iconPosition === 'out') ? `${this.inputHeight}px` : '0')
          // height: (this.inputWrapperHeight + this.inputHeight / 2 + this.inputTipHeight) + 'px'
        }
      },
      computedInputWrapStyles () {
        return {
          paddingTop: this.inputHeight / 2 + 'px',
          paddingBottom: this.inputTipHeight + 'px',
          boxSizing: 'content-box'
          // ,
          // width: (this.iconType !== '' ? `calc(100% - ${this.inputHeight}px)` : '100%'),
          // marginLeft: (this.iconType !== '' ? `${this.inputHeight}px` : '0')
        }
      },
      computedInputStyles () {
        return Object.assign({}, {
          lineHeight: '40px',
          paddingLeft: ((this.iconType !== '' && this.iconPosition === 'in') ? `${this.inputHeight}px` : '0')
        }, this.inputStyle)
      },
      computedLabelStyles () {
        return Object.assign({}, {
          height: this.inputHeight / 2 + 'px',
          marginTop: (this.inputHeight / 4) + 'px',
          top: this.inputHeight / 2 + 'px'
        }, this.labelStyle)
      },
      computedTipStyles () {
        return Object.assign({}, {}, this.tipStyle)
      },
      computedOutIconStyles () {
        return {
          width: this.inputHeight + 'px',
          height: this.inputHeight + 'px',
          marginTop: this.inputHeight / 2 + 'px'
        }
      },
      computedInIconStyles () {
        return {
          width: this.inputHeight + 'px',
          height: this.inputHeight + 'px'
          // ,
          // maxWidth: this.computedIconSize * 3 / 2 + 'px'
        }
      },
      computedIconSize () {
        if (this.iconStyle.hasOwnProperty('fontSize')) {
          return this.iconStyle.fontSize.replace(/px$/, '')
        } else {
          return 26
        }
      },
      computedIconColor () {
        return this.iconStyle.hasOwnProperty('color') ? this.iconStyle.color : 'rgba(0, 0, 0, 0.54)'
      },
      computedIconStyles () {
        return {
          maxWidth: this.inputHeight * 2 / 3 + 'px',
          maxHeight: this.inputHeight * 2 / 3 + 'px'
        }
      },
      showPasswordStyles () {
        return (this.inputStyle.lineHeight ? {
          lineHeight: this.inputStyle.lineHeight
        } : {
          lineHeight: '40px'
        })
      },
      realType () {
        if (this.type === 'number') {
          return 'text'
        }
        return (this.type === 'password') ? (this.showPassword ? 'text' : this.type) : this.type
      },
      realLimitType () {
        if (this.type === 'number') {
          return 'number'
        }
        return this.limitType
      },
      wrapClasses () {
        return [
          `${prefixCls}-wrapper`,
          {
            [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
            [`${prefixCls}-type`]: this.type,
            [`${prefixCls}-group`]: this.prepend || this.append || (this.search && this.enterButton),
            [`${prefixCls}-group-${this.size}`]: (this.prepend || this.append || (this.search && this.enterButton)) && !!this.size,
            [`${prefixCls}-group-with-prepend`]: this.prepend,
            [`${prefixCls}-group-with-append`]: this.append || (this.search && this.enterButton),
            [`${prefixCls}-hide-icon`]: this.append,  // #554
            [`${prefixCls}-with-search`]: (this.search && this.enterButton)
          }
        ]
      },
      inputClasses () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.size}`]: !!this.size,
            [`${prefixCls}-disabled`]: this.disabled,
            [`${prefixCls}-with-prefix`]: this.showPrefix,
            [`${prefixCls}-with-suffix`]: this.showSuffix || (this.search && this.enterButton === false)
          }
        ]
      },
      textareaClasses () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-disabled`]: this.disabled
          }
        ]
      }
    },
    methods: {
      getInputHeight () {
        return this.$refs.inputRef.getBoundingClientRect().height
      },
      getInputTipHeight () {
        return this.$refs.inputTipRef.getBoundingClientRect().height
      },
      getInputWrapperHeight () {
        return this.$refs.inputWrapperRef.getBoundingClientRect().height
      },
      handleEnter (event) {
        this.$emit('on-enter', event)
        if (this.search) this.$emit('on-search', this.currentValue)
      },
      handleKeydown (event) {
        this.$emit('on-keydown', event)
      },
      handleKeypress (event) {
        this.$emit('on-keypress', event)
      },
      handleKeyup (event) {
        this.$emit('on-keyup', event)
      },
      handleIconClick (event) {
        this.$emit('on-click', event)
      },
      handleFocus (event) {
        this.$emit('on-focus', event)
      },
      handleBlur (event) {
        this.$emit('on-blur', event)
        if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
          this.dispatch('FormItem', 'on-form-blur', this.currentValue)
        }
      },
      handleInput (event) {
        let value = event.target.value
        if (this.number && value !== '') value = Number.isNaN(Number(value)) ? value : Number(value)
        this.$emit('input', value)
        this.setCurrentValue(value)
        this.$emit('on-change', event)
      },
      handleChange (event) {
        this.$emit('on-input-change', event)
      },
      setCurrentValue (value) {
        if (value === this.currentValue) return
        this.$nextTick(() => {
          this.resizeTextarea()
        })
        this.currentValue = value
        if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
          this.dispatch('FormItem', 'on-form-change', value)
        }
      },
      resizeTextarea () {
        const autosize = this.autosize
        if (!autosize || this.type !== 'textarea') {
          return false
        }

        const minRows = autosize.minRows
        const maxRows = autosize.maxRows

        this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows)
      },
      focus () {
        if (this.type === 'textarea') {
          this.$refs.textarea.focus()
        } else {
          this.$refs.input.focus()
        }
      },
      blur () {
        if (this.type === 'textarea') {
          this.$refs.textarea.blur()
        } else {
          this.$refs.input.blur()
        }
      },
      handleClear () {
        const e = {target: {value: ''}}
        this.$emit('input', '')
        this.setCurrentValue('')
        this.$emit('on-change', e)
      },
      handleSearch () {
        if (this.disabled) return false
        this.$refs.input.focus()
        this.$emit('on-search', this.currentValue)
      },
      formatInput (value) {
        if (Object.prototype.toString.call(this.realLimitType) === '[object RegExp]') {
          return this.realLimitType.test(value)
        }
        return this.matcher[this.realLimitType].test(value)
      },
      input (e) {
        if (this.realLimitType) {
          if (!this.formatInput(e.data)) {
            e.target.value = e.target.value.substring(0, e.target.value.length - 1)
          }
        }
        this.realValue = e.target.value
        this.$emit('input', this.realValue)
      },
      inputFocus () {
        this.realShrink = true
        this.inputFocused = true
      },
      inputBlur () {
        this.inputFocused = false
        if (!this.realValue) {
          this.realShrink = false
        }
        this.validate()
      },
      mouseenter () {
        this.inputHovered = true
      },
      mouseleave () {
        this.inputHovered = false
      },
      toggleShowPassword () {
        this.showPassword = !this.showPassword
      },
      validate () {
        if (this.required && !this.realValue) {
          this.tipMessage = '不能为空'
          return false
        }
        return true
      }
    },
    watch: {
      value (val) {
        this.setCurrentValue(val)
      }
    },
    created () {
      this.realTheme = this.theme
      this.realShrink = this.shrink
      this.realValue = this.value
    },
    mounted () {
      this.inputHeight = this.getInputHeight()
      this.inputTipHeight = this.getInputTipHeight()
      this.inputWrapperHeight = this.getInputWrapperHeight()
    }
  }
</script>
