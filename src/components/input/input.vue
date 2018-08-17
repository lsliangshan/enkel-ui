<template>
  <div class="input_container" ref="inputContainerRef" :class="inputContainerClasses" :style="computedInputContainerStyles">
    <div class="input_wrapper" ref="inputWrapperRef" :style="computedInputWrapStyles">
      <label class="input_label" :style="computedLabelStyles">
        {{label}}
        <span style="margin-left: 4px; font-size: 18px;" v-if="required">*</span>
      </label>
      <input :type="(type === 'password') ? (showPassword ? 'text' : type) : type" ref="inputRef"
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
  /*.input_container {*/
    /*position: relative;*/
    /*cursor: text;*/
  /*}*/

  /*.input_wrapper {*/
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: flex-start;*/
  /*}*/

  /*.input_container .input_label {*/
    /*font-size: 13px;*/
    /*color: rgba(0, 0, 0, 0.54);*/
    /*font-family: "Roboto", "Helvetica", "Arial", sans-serif;*/
    /*line-height: 1;*/
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 0;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*display: flex;*/
    /*flex-direction: row;*/
    /*align-items: center;*/
    /*justify-content: flex-start;*/
    /*pointer-events: none;*/
    /*-webkit-transform: translate(0, 0) scale(1);*/
    /*-moz-transform: translate(0, 0) scale(1);*/
    /*-ms-transform: translate(0, 0) scale(1);*/
    /*-o-transform: translate(0, 0) scale(1);*/
    /*transform: translate(0, 0) scale(1);*/
    /*-webkit-transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;*/
    /*-moz-transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;*/
    /*-ms-transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;*/
    /*-o-transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;*/
    /*transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;*/
    /*transform-origin: top left;*/
  /*}*/

  /*.input_container.shrink .input_label {*/
    /*-webkit-transform: translate(0, -125%) scale(0.75);*/
    /*-moz-transform: translate(0, -125%) scale(0.75);*/
    /*-ms-transform: translate(0, -125%) scale(0.75);*/
    /*-o-transform: translate(0, -125%) scale(0.75);*/
    /*transform: translate(0, -125%) scale(0.75);*/
  /*}*/

  /*.input_container.focus.shrink .input_label {*/
    /*color: #2b85e4;*/
  /*}*/

  /*.input_container input {*/
    /*width: 100%;*/
    /*outline: none;*/
    /*border: none;*/
    /*font-size: 16px;*/
    /*line-height: 2;*/
    /*border-bottom: 1px solid #DDDDDD;*/
  /*}*/

  /*.input_container input::placeholder {*/
    /*opacity: 0;*/
    /*font-size: 16px;*/
    /*-webkit-transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;*/
    /*-moz-transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;*/
    /*-ms-transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;*/
    /*-o-transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;*/
    /*transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;*/
  /*}*/

  /*.input_container.shrink input::placeholder {*/
    /*opacity: 0.42;*/
  /*}*/

  /*.input_container:before {*/
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*content: '';*/
    /*width: 100%;*/
    /*border-bottom: 2px solid transparent;*/
    /*pointer-events: none;*/
    /*-webkit-transition: border-bottom 200ms cubic-bezier(0.4, 0, 0.2, 1);*/
    /*-moz-transition: border-bottom 200ms cubic-bezier(0.4, 0, 0.2, 1);*/
    /*-ms-transition: border-bottom 200ms cubic-bezier(0.4, 0, 0.2, 1);*/
    /*-o-transition: border-bottom 200ms cubic-bezier(0.4, 0, 0.2, 1);*/
    /*transition: border-bottom 200ms cubic-bezier(0.4, 0, 0.2, 1);*/
  /*}*/

  /*.input_container:after {*/
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*content: '';*/
    /*width: 100%;*/
    /*-webkit-transform: scaleX(0);*/
    /*-moz-transform: scaleX(0);*/
    /*-ms-transform: scaleX(0);*/
    /*-o-transform: scaleX(0);*/
    /*transform: scaleX(0);*/
    /*border-bottom: 2px solid #1976d2;*/
    /*pointer-events: none;*/
    /*-webkit-transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1);*/
    /*-moz-transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1);*/
    /*-ms-transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1);*/
    /*-o-transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1);*/
    /*transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1);*/
  /*}*/

  /*.input_container.hover:before {*/
    /*border-bottom: 2px solid #000000;*/
  /*}*/

  /*.input_container.focus:after {*/
    /*-webkit-transform: scaleX(1);*/
    /*-moz-transform: scaleX(1);*/
    /*-ms-transform: scaleX(1);*/
    /*-o-transform: scaleX(1);*/
    /*transform: scaleX(1);*/
    /*border-bottom: 2px solid #1976d2;*/
  /*}*/

</style>
<script>
  import {oneOf, findComponentUpward} from '../../utils/assist';
  import calcTextareaHeight from '../../utils/calcTextareaHeight';
  import placeholder from '../../directives/placeholder';
  import Emitter from '../../mixins/emitter';

  const prefixCls = 'ivu-input';
  function S4 () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  function getUUID () {
    return (S4() + S4() + '-' + S4() + '-' + S4() + S4())
  }
  export default {
    name: 'Input',
    mixins: [Emitter],
    directives: { placeholder },
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['text', 'textarea', 'password', 'url', 'email', 'date']);
        },
        default: 'text'
      },
      value: {
        type: [String, Number],
        default: ''
      },
      size: {
        validator (value) {
          return oneOf(value, ['small', 'large', 'default']);
        },
        default () {
          return !this.$enkel || this.$enkel.size === '' ? 'default' : this.$enkel.size;
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
      icon: String,
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
          return oneOf(value, ['on', 'off']);
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
          return oneOf(value, ['hard', 'soft']);
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
        showPassword: false
      };
    },
    computed: {
      inputContainerClasses () {
        return [
          this.uuid,
          this.realTheme,
          {
            'shrink': this.realShrink,
            'focus': this.inputFocused,
            'hover': this.inputHovered
          }
        ]
      },
      computedInputContainerStyles () {
        return {
          // height: (this.inputWrapperHeight + this.inputHeight / 2 + this.inputTipHeight) + 'px'
        }
      },
      computedInputWrapStyles () {
        return {
          paddingTop: this.inputHeight / 2 + 'px',
          paddingBottom: this.inputTipHeight + 'px',
          boxSizing: 'content-box'
        };
      },
      computedInputStyles () {
        return Object.assign({}, {
          lineHeight: '40px'
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
        return Object.assign({}, {
        }, this.tipStyle)
      },
      showPasswordStyles () {
        return (this.inputStyle.lineHeight ? {
          lineHeight: this.inputStyle.lineHeight
        } : {
          lineHeight: '40px'
        })
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
        ];
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
        ];
      },
      textareaClasses () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-disabled`]: this.disabled
          }
        ];
      }
    },
    methods: {
      getInputHeight () {
        return this.$refs.inputRef.getBoundingClientRect().height;
      },
      getInputTipHeight () {
        return this.$refs.inputTipRef.getBoundingClientRect().height;
      },
      getInputWrapperHeight () {
        return this.$refs.inputWrapperRef.getBoundingClientRect().height;
      },
      handleEnter (event) {
        this.$emit('on-enter', event);
        if (this.search) this.$emit('on-search', this.currentValue);
      },
      handleKeydown (event) {
        this.$emit('on-keydown', event);
      },
      handleKeypress (event) {
        this.$emit('on-keypress', event);
      },
      handleKeyup (event) {
        this.$emit('on-keyup', event);
      },
      handleIconClick (event) {
        this.$emit('on-click', event);
      },
      handleFocus (event) {
        this.$emit('on-focus', event);
      },
      handleBlur (event) {
        this.$emit('on-blur', event);
        if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
          this.dispatch('FormItem', 'on-form-blur', this.currentValue);
        }
      },
      handleInput (event) {
        let value = event.target.value;
        if (this.number && value !== '') value = Number.isNaN(Number(value)) ? value : Number(value);
        this.$emit('input', value);
        this.setCurrentValue(value);
        this.$emit('on-change', event);
      },
      handleChange (event) {
        this.$emit('on-input-change', event);
      },
      setCurrentValue (value) {
        if (value === this.currentValue) return;
        this.$nextTick(() => {
          this.resizeTextarea();
        });
        this.currentValue = value;
        if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
          this.dispatch('FormItem', 'on-form-change', value);
        }
      },
      resizeTextarea () {
        const autosize = this.autosize;
        if (!autosize || this.type !== 'textarea') {
          return false;
        }

        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;

        this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
      },
      focus () {
        if (this.type === 'textarea') {
          this.$refs.textarea.focus();
        } else {
          this.$refs.input.focus();
        }
      },
      blur () {
        if (this.type === 'textarea') {
          this.$refs.textarea.blur();
        } else {
          this.$refs.input.blur();
        }
      },
      handleClear () {
        const e = {target: {value: ''}};
        this.$emit('input', '');
        this.setCurrentValue('');
        this.$emit('on-change', e);
      },
      handleSearch () {
        if (this.disabled) return false;
        this.$refs.input.focus();
        this.$emit('on-search', this.currentValue);
      },
      input (e) {
        // this.shrink = true
        // this.realTheme = 'warning'
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
        this.setCurrentValue(val);
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
  };
</script>
