<template>
  <label class="checkbox"
         :class="classes"
         :style="styles">
    <!-- checkbox input -->
    <input type="checkbox"
           :name="name"
           ref="checkboxRef"
           :checked="currentValue"
           :value="currentValue ? trueValue : falseValue"
           @change="change" />
    <!-- checkbox icon -->
    <i class="icon icon-checkbox"></i>
    <slot name="label">
      <div class="item-inner"
           v-if="label">
        <div class="item-title">
          {{label}}
        </div>
      </div>
    </slot>
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
    checked: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean, Array],
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
    checkAll: {
      type: [Array, Boolean],
      default: false
    },
    type: {
      type: String,
      validator (value) {
        return oneOf(value, ['default', 'primary', 'error', 'info', 'warning', 'red', 'green', 'blue', 'pink', 'yellow', 'orange', 'purple', 'deeppurple', 'lightblue', 'teal', 'lime', 'deeporange', 'gray', 'white', 'black']);
      },
      default: 'default'
    },
    rippleColor: {
      type: String,
      validator (value) {
        return oneOf(value, ['primary', 'error', 'info', 'warning', 'red', 'green', 'blue', 'pink', 'yellow', 'orange', 'purple', 'deeppurple', 'lightblue', 'teal', 'lime', 'deeporange', 'gray', 'white', 'black']);
      }
    },
    noRipple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      model: [],
      cachedModel: null,
      readIndeterminate: this.indeterminate,
      currentValue: this.value,
      group: false,
      showSlot: true,
      parent: findComponentUpward(this, 'CheckboxGroup'),
      focusInner: false
    };
  },
  computed: {
    cType () {
      let type = this.type
      switch (type) {
        case 'primary':
          type = 'blue'
          break
        case 'error':
          type = 'red'
          break
        case 'info':
          type = 'lightblue'
          break
        case 'warning':
          type = 'orange'
          break
        default:
          break
      }
      return type
    },
    styles () {
      let styles = {}
      if (!this.label) {
        // styles['--f7-touch-ripple-color'] = 'transparent'
        styles['width'] = '18px'
        styles['height'] = '18px'
      }
      if (this.rippleColor) {
        styles['--f7-touch-ripple-color'] = this.rippleColor
      }
      return styles
    },
    classes () {
      return [
        `${prefixCls}`,
        {
          ['disabled']: this.disabled,
          ['oh']: this.label,
          ['center']: !this.label,
          [`color-theme-${(this.cType !== 'default') ? this.cType : this.$enkel.colorTheme}`]: ((this.cType !== 'default') || this.$enkel.colorTheme),
          ['no-ripple']: this.noRipple
        }
      ]
    }
  },
  mounted () {
    // this.initCheckAll()
    if (this.checkAll) {
      return
    }

    this.parent = findComponentUpward(this, 'CheckboxGroup');

    if (this.parent) {
      this.group = true;
    }

    if (this.group) {
      this.parent.updateModel(true);
    } else {
      this.updateModel();
      // this.showSlot = this.$slots.default !== undefined;
    }
  },
  methods: {
    // change (event) {
    //     if (this.disabled) {
    //         return false;
    //     }

    // const checked = event.target.checked;
    // this.currentValue = checked;

    //     const value = checked ? this.trueValue : this.falseValue;
    //     this.$emit('input', value);

    // if (this.group) {
    //     this.parent.change(this.model);
    // } else {
    //     this.$emit('on-change', value);
    //     this.dispatch('FormItem', 'on-form-change', value);
    // }
    // },
    initCheckAll () {
      let obStr = Object.prototype.toString
      if (this.checkAll) {
        if (!this.value) {
          this.currentValue = false
        } else {
          if ((obStr.call(this.value) === '[object Array]') && this.value.length > 0) {
            if (this.value.length < this.checkAll.length) {
              this.readIndeterminate = true
            } else {
              this.readIndeterminate = false
              this.currentValue = true
            }
          } else {
            this.readIndeterminate = false
            this.currentValue = false
          }
        }
        return
      }
    },
    change (event) {
      if (this.disabled) {
        return false
      }
      const checked = event.target.checked;
      this.currentValue = checked;
      if (this.checkAll) {
        this.$emit('input', (this.currentValue ? JSON.parse(JSON.stringify(this.checkAll)) : []))
        return
      }
      if (this.group) {
        let changedValue = {}
        changedValue[this.value] = this.currentValue
        this.parent.change(changedValue);
      } else {
        this.$emit('change', this.currentValue);
        // this.dispatch('FormItem', 'on-form-change', value);
      }
      if (!this.parent) {
        this.$emit('input', (this.currentValue ? this.trueValue : this.falseValue))
      }
    },
    updateModel () {
      this.currentValue = this.checked || (this.value === this.trueValue);
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
        if (this.checkAll) {
          this.initCheckAll()
        } else {
          if (val === this.trueValue || val === this.falseValue) {
            this.updateModel();
          } else {
            if (!this.parent && !this.checkAll) {
              throw `Value should be ${(typeof this.trueValue === 'string' ? JSON.stringify(this.trueValue) : this.trueValue)} or ${(typeof this.falseValue === 'string' ? JSON.stringify(this.falseValue) : this.falseValue)}.`;
            }
          }
        }
      }
    },
    readIndeterminate: {
      immediate: true,
      handler (val) {
        this.$nextTick(() => {
          this.$refs.checkboxRef && (this.$refs.checkboxRef.indeterminate = !!val)
        })
      }
    },
    checked: {
      immediate: true,
      handler (val) {
        if (!this.checkAll) {
          this.currentValue = val
        }
      }
    }
  }
};
</script>
