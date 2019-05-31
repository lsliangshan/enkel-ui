<template>
  <label class="checkbox"
         :class="classes">
    <!-- checkbox input -->
    <input type="checkbox"
           :name="name"
           ref="checkboxRef"
           :checked="currentValue"
           :value="currentValue ? trueValue : falseValue"
           @change="change" />
    <!-- checkbox icon -->
    <i class="icon icon-checkbox"></i>
    <div class="item-inner"
         v-if="label">
      <div class="item-title">
        <slot>
          {{label}}
        </slot>
      </div>
    </div>
  </label>
</template>
<style scoped>
  .oh {
    overflow: hidden;
  }
  .center {
    justify-content: center;
  }
  .enkel-checkbox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .enkel-checkbox i {
    margin-right: 4px;
  }
  .enkel-checkbox.disabled i {
    color: #ccc;
  }
</style>
<script>
  import { findComponentUpward, oneOf } from '../../utils/assist';
  import Emitter from '../../mixins/emitter';

  const prefixCls = 'enkel-checkbox';

  export default {
    name: 'Checkbox',
    mixins: [Emitter],
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      name: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: [String, Number, Boolean],
        default: false
      },
      trueValue: {
        type: [String, Number, Boolean],
        default: true
      },
      falseValue: {
        type: [String, Number, Boolean],
        default: false
      },
      label: {
        type: [String, Number, Boolean]
      },
      indeterminate: {
        type: Boolean,
        default: false
      },
      size: {
        validator (value) {
          return oneOf(value, ['small', 'large', 'default']);
        },
        default () {
          return !this.$enkel || this.$enkel.size === '' ? 'default' : this.$enkel.size;
        }
      }
    },
    data () {
      return {
        model: [],
        currentValue: this.value,
        group: false,
        showSlot: true,
        parent: findComponentUpward(this, 'CheckboxGroup'),
        focusInner: false
      };
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            ['disabled']: this.disabled,
            ['oh']: this.label,
            ['center']: !this.label
          }
        ]
      },
      wrapClasses () {
        return [
          `${prefixCls}-wrapper`,
          {
            [`${prefixCls}-group-item`]: this.group,
            [`${prefixCls}-wrapper-checked`]: this.currentValue,
            [`${prefixCls}-wrapper-disabled`]: this.disabled,
            [`${prefixCls}-${this.size}`]: !!this.size
          }
        ];
      },
      checkboxClasses () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-checked`]: this.currentValue,
            [`${prefixCls}-disabled`]: this.disabled,
            [`${prefixCls}-indeterminate`]: this.indeterminate
          }
        ];
      },
      innerClasses () {
        return [
          `${prefixCls}-inner`,
          {
            [`${prefixCls}-focus`]: this.focusInner
          }
        ];
      },
      inputClasses () {
        return `${prefixCls}-input`;
      }
    },
    mounted () {
      // this.parent = findComponentUpward(this, 'CheckboxGroup');
      // if (this.parent) {
      //   this.group = true;
      // }

      // if (this.group) {
      //   this.parent.updateModel(true);
      // } else {
      //   this.updateModel();
      //   this.showSlot = this.$slots.default !== undefined;
      // }
    },
    methods: {
      // change (event) {
      //     if (this.disabled) {
      //         return false;
      //     }

      //     const checked = event.target.checked;
      //     this.currentValue = checked;

      //     const value = checked ? this.trueValue : this.falseValue;
      //     this.$emit('input', value);

      //     if (this.group) {
      //         this.parent.change(this.model);
      //     } else {
      //         this.$emit('on-change', value);
      //         this.dispatch('FormItem', 'on-form-change', value);
      //     }
      // },
      change (event) {
        if (this.disabled) {
          return false
        }
        this.currentValue = !this.currentValue
        this.$emit('input', (this.currentValue ? this.trueValue : this.falseValue))
      },
      updateModel () {
        this.currentValue = this.value === this.trueValue;
      },
      onBlur () {
        this.focusInner = false;
      },
      onFocus () {
        this.focusInner = true;
      }
    },
    watch: {
      value: {
        immediate: true,
        handler (val) {
          if (val === this.trueValue || val === this.falseValue) {
            this.updateModel();
          } else {
            throw `Value should be ${(typeof this.trueValue === 'string' ? JSON.stringify(this.trueValue) : this.trueValue)} or ${(typeof this.falseValue === 'string' ? JSON.stringify(this.falseValue) : this.falseValue)}.`;
          }
        }
      },
      indeterminate: {
        immediate: true,
        handler (val) {
          this.$nextTick(() => {
            this.$refs.checkboxRef && (this.$refs.checkboxRef.indeterminate = !!val)
          })
        }
      }
    }
  };
</script>
