import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __vueComponentDispatchEvent from '../runtime-helpers/vue-component-dispatch-event.js';
import __vueComponentProps from '../runtime-helpers/vue-component-props.js';
export default {
  name: 'f7-fab-button',
  props: Object.assign({
    id: [String, Number],
    fabClose: Boolean,
    label: String,
    target: String,
    tooltip: String
  }, Mixins.colorProps),

  render() {
    const _h = this.$createElement;
    const props = this.props;
    const {
      className,
      id,
      style,
      fabClose,
      label,
      target
    } = props;
    const classes = Utils.classNames(className, {
      'fab-close': fabClose,
      'fab-label-button': label
    }, Mixins.colorClasses(props));
    let labelEl;

    if (label) {
      labelEl = _h('span', {
        class: 'fab-label'
      }, [label]);
    }

    return _h('a', {
      ref: 'el',
      style: style,
      class: classes,
      attrs: {
        id: id,
        target: target
      }
    }, [this.$slots['default'], labelEl]);
  },

  created() {
    Utils.bindMethods(this, ['onClick']);
  },

  created() {
    this.onClick = this.onClick.bind(this);
  },

  mounted() {
    const self = this;
    self.$refs.el.addEventListener('click', self.onClick);
    const {
      tooltip
    } = self.props;
    if (!tooltip) return;
    self.$f7ready(f7 => {
      self.f7Tooltip = f7.tooltip.create({
        targetEl: self.$refs.el,
        text: tooltip
      });
    });
  },

  beforeDestroy() {
    const self = this;
    self.$refs.el.removeEventListener('click', self.onClick);

    if (self.f7Tooltip && self.f7Tooltip.destroy) {
      self.f7Tooltip.destroy();
      self.f7Tooltip = null;
      delete self.f7Tooltip;
    }
  },

  methods: {
    onClick(event) {
      this.dispatchEvent('click', event);
    },

    dispatchEvent(events, ...args) {
      __vueComponentDispatchEvent(this, events, ...args);
    }

  },
  watch: {
    'props.tooltip': function watchTooltip(newText) {
      const self = this;
      if (!newText || !self.f7Tooltip) return;
      self.f7Tooltip.setText(newText);
    }
  },
  computed: {
    props() {
      return __vueComponentProps(this);
    }

  }
};