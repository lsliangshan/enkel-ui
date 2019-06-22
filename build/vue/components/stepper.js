import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __vueComponentDispatchEvent from '../runtime-helpers/vue-component-dispatch-event.js';
import __vueComponentProps from '../runtime-helpers/vue-component-props.js';
export default {
  name: 'f7-stepper',
  props: Object.assign({
    id: [String, Number],
    init: {
      type: Boolean,
      default: true
    },
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    formatValue: Function,
    input: {
      type: Boolean,
      default: true
    },
    inputType: {
      type: String,
      default: 'text'
    },
    inputReadonly: {
      type: Boolean,
      default: false
    },
    autorepeat: {
      type: Boolean,
      default: false
    },
    autorepeatDynamic: {
      type: Boolean,
      default: false
    },
    wraps: {
      type: Boolean,
      default: false
    },
    manualInputMode: {
      type: Boolean,
      default: false
    },
    decimalPoint: {
      type: Number,
      default: 4
    },
    buttonsEndInputMode: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    buttonsOnly: Boolean,
    round: Boolean,
    roundMd: Boolean,
    roundIos: Boolean,
    roundAurora: Boolean,
    fill: Boolean,
    fillMd: Boolean,
    fillIos: Boolean,
    fillAurora: Boolean,
    large: Boolean,
    largeMd: Boolean,
    largeIos: Boolean,
    largeAurora: Boolean,
    small: Boolean,
    smallMd: Boolean,
    smallIos: Boolean,
    smallAurora: Boolean,
    raised: Boolean,
    raisedMd: Boolean,
    raisedIos: Boolean,
    raisedAurora: Boolean
  }, Mixins.colorProps),

  render() {
    const _h = this.$createElement;
    const self = this;
    const props = self.props;
    const {
      input,
      buttonsOnly,
      inputType,
      value,
      inputReadonly,
      min,
      max,
      step,
      id,
      style
    } = props;
    let inputWrapEl;
    let valueEl;

    if (input && !buttonsOnly) {
      let inputEl;
      {
        inputEl = _h('input', {
          ref: 'inputEl',
          domProps: {
            readOnly: inputReadonly,
            value
          },
          on: {
            input: self.onInput
          },
          attrs: {
            type: inputType,
            min: inputType === 'number' ? min : undefined,
            max: inputType === 'number' ? max : undefined,
            step: inputType === 'number' ? step : undefined
          }
        });
      }
      inputWrapEl = _h('div', {
        class: 'stepper-input-wrap'
      }, [inputEl]);
    }

    if (!input && !buttonsOnly) {
      valueEl = _h('div', {
        class: 'stepper-value'
      }, [value]);
    }

    return _h('div', {
      ref: 'el',
      style: style,
      class: self.classes,
      attrs: {
        id: id
      }
    }, [_h('div', {
      ref: 'minusEl',
      class: 'stepper-button-minus'
    }), inputWrapEl, valueEl, _h('div', {
      ref: 'plusEl',
      class: 'stepper-button-plus'
    })]);
  },

  computed: {
    classes() {
      const self = this;
      const props = self.props;
      const {
        round,
        roundIos,
        roundMd,
        roundAurora,
        fill,
        fillIos,
        fillMd,
        fillAurora,
        large,
        largeIos,
        largeMd,
        largeAurora,
        small,
        smallIos,
        smallMd,
        smallAurora,
        raised,
        raisedMd,
        raisedIos,
        raisedAurora,
        disabled
      } = props;
      return Utils.classNames(self.props.className, 'stepper', {
        disabled,
        'stepper-round': round,
        'stepper-round-ios': roundIos,
        'stepper-round-md': roundMd,
        'stepper-round-aurora': roundAurora,
        'stepper-fill': fill,
        'stepper-fill-ios': fillIos,
        'stepper-fill-md': fillMd,
        'stepper-fill-aurora': fillAurora,
        'stepper-large': large,
        'stepper-large-ios': largeIos,
        'stepper-large-md': largeMd,
        'stepper-large-aurora': largeAurora,
        'stepper-small': small,
        'stepper-small-ios': smallIos,
        'stepper-small-md': smallMd,
        'stepper-small-aurora': smallAurora,
        'stepper-raised': raised,
        'stepper-raised-ios': raisedIos,
        'stepper-raised-md': raisedMd,
        'stepper-raised-aurora': raisedAurora
      }, Mixins.colorClasses(props));
    },

    props() {
      return __vueComponentProps(this);
    }

  },

  created() {
    Utils.bindMethods(this, ['onInput', 'onMinusClick', 'onPlusClick']);
  },

  mounted() {
    const self = this;
    const {
      minusEl,
      plusEl
    } = self.$refs;

    if (minusEl) {
      minusEl.addEventListener('click', self.onMinusClick);
    }

    if (plusEl) {
      plusEl.addEventListener('click', self.onPlusClick);
    }

    if (!self.props.init) return;
    self.$f7ready(f7 => {
      const {
        min,
        max,
        value,
        step,
        formatValue,
        autorepeat,
        autorepeatDynamic,
        wraps,
        manualInputMode,
        decimalPoint,
        buttonsEndInputMode
      } = self.props;
      const el = self.$refs.el;
      if (!el) return;
      self.f7Stepper = f7.stepper.create(Utils.noUndefinedProps({
        el,
        min,
        max,
        value,
        step,
        formatValue,
        autorepeat,
        autorepeatDynamic,
        wraps,
        manualInputMode,
        decimalPoint,
        buttonsEndInputMode,
        on: {
          change(stepper, newValue) {
            self.dispatchEvent('stepper:change stepperChange', newValue);
          }

        }
      }));
    });
  },

  beforeDestroy() {
    const self = this;
    const {
      minusEl,
      plusEl
    } = self.$refs;

    if (minusEl) {
      minusEl.removeEventListener('click', self.onMinusClick);
    }

    if (plusEl) {
      plusEl.removeEventListener('click', self.onPlusClick);
    }

    if (!self.props.init) return;

    if (self.f7Stepper && self.f7Stepper.destroy) {
      self.f7Stepper.destroy();
    }
  },

  methods: {
    increment() {
      if (!this.f7Stepper) return;
      this.f7Stepper.increment();
    },

    decrement() {
      if (!this.f7Stepper) return;
      this.f7Stepper.decrement();
    },

    setValue(newValue) {
      const self = this;
      if (self.f7Stepper && self.f7Stepper.setValue) self.f7Stepper.setValue(newValue);
    },

    getValue() {
      const self = this;

      if (self.f7Stepper && self.f7Stepper.getValue) {
        return self.f7Stepper.getValue();
      }

      return undefined;
    },

    onInput(event) {
      const stepper = this.f7Stepper;
      this.dispatchEvent('input', event, stepper);
    },

    onMinusClick(event) {
      const stepper = this.f7Stepper;
      this.dispatchEvent('stepper:minusclick stepperMinusClick', event, stepper);
    },

    onPlusClick(event) {
      const stepper = this.f7Stepper;
      this.dispatchEvent('stepper:plusclick stepperPlusClick', event, stepper);
    },

    dispatchEvent(events, ...args) {
      __vueComponentDispatchEvent(this, events, ...args);
    }

  }
};