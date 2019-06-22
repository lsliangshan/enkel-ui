import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __vueComponentProps from '../runtime-helpers/vue-component-props.js';
export default {
  name: 'f7-segmented',
  props: Object.assign({
    id: [String, Number],
    raised: Boolean,
    raisedIos: Boolean,
    raisedMd: Boolean,
    raisedAurora: Boolean,
    round: Boolean,
    roundIos: Boolean,
    roundMd: Boolean,
    roundAurora: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  }, Mixins.colorProps),

  render() {
    const _h = this.$createElement;
    const self = this;
    const props = self.props;
    const {
      className,
      raised,
      raisedIos,
      raisedAurora,
      raisedMd,
      round,
      roundIos,
      roundAurora,
      roundMd,
      id,
      style,
      tag
    } = props;
    const classNames = Utils.classNames(className, {
      segmented: true,
      'segmented-raised': raised,
      'segmented-raised-ios': raisedIos,
      'segmented-raised-aurora': raisedAurora,
      'segmented-raised-md': raisedMd,
      'segmented-round': round,
      'segmented-round-ios': roundIos,
      'segmented-round-aurora': roundAurora,
      'segmented-round-md': roundMd
    }, Mixins.colorClasses(props));
    const SegmentedTag = tag;
    return _h(SegmentedTag, {
      style: style,
      class: classNames,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },

  computed: {
    props() {
      return __vueComponentProps(this);
    }

  }
};