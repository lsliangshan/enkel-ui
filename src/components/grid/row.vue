<template>
  <div :class="classes"
       :style="styles">
    <slot></slot>
  </div>
</template>
<style scoped>
</style>

<script>
import { oneOf, findComponentDownward, findBrothersComponents } from '../../utils/assist';

const prefixCls = 'enkel-row';

export default {
  name: 'Row',
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['flex']);
      }
    },
    align: {
      validator (value) {
        return oneOf(value, ['flex-start', 'center', 'flex-end']);
      },
      default: 'center'
    },
    justify: {
      validator (value) {
        return oneOf(value, ['flex-start', 'flex-end', 'center', 'space-around', 'space-between']);
      }
    },
    gutter: {
      type: Number,
      default: 0
    },
    className: String
  },
  computed: {
    classes () {
      return [
        'row',
        {
          // [`${prefixCls}`]: !this.type,
          // [`${prefixCls}-${this.type}`]: !!this.type,
          // [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
          // [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
          // [`${this.className}`]: !!this.className
        }
      ];
    },
    styles () {
      let style = {
        // flexWrap: 'nowrap'
      };
      // if (this.gutter !== 0) {
      //   style['margin-left'] = this.gutter / -2 + 'px'
      //   style['margin-right'] = this.gutter / -2 + 'px'
      // }

      if (this.align) {
        style['align-items'] = this.align + '!important'
      }
      if (this.justify) {
        style['justify-content'] = this.justify + '!important'
      }

      return style;
    }
  },
  methods: {
    updateGutter (val) {
      // 这里会嵌套寻找，把 Col 里的 Row 里的 Col 也找到，所以用 兄弟找
      //                const Cols = findComponentsDownward(this, 'iCol');
      const Col = findComponentDownward(this, 'Col');
      const Cols = findBrothersComponents(Col, 'Col', false);
      if (Cols.length) {
        Cols.forEach((child) => {
          if (val !== 0) {
            child.gutter = val;
          }
        });
      }
    }
  },
  watch: {
    gutter (val) {
      this.updateGutter(val);
    }
  }
};
</script>
