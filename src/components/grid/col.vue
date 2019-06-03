<template>
  <div :class="classes"
       :style="styles">
    <slot></slot>
  </div>
</template>
<style scoped>
</style>

<script>
  import { findComponentUpward, hasRightBrother, findBrothersComponents } from '../../utils/assist';
  const prefixCls = 'enkel-col';

  export default {
    name: 'Col',
    props: {
      span: [Number, String],
      order: [Number, String],
      offset: [Number, String],
      push: [Number, String],
      pull: [Number, String],
      className: String,
      md: [Number, String],
      lg: [Number, String]
    },
    data () {
      return {
        gutter: 0
      };
    },
    computed: {
      classes () {
        let classList = [
          `${prefixCls}`,
          {
            ['col']: !this.span,
            [`col-${this.span}`]: this.span,
            [`tablet-${this.md}`]: this.md,
            [`desktop-${this.lg}`]: this.lg,
            // [`${prefixCls}-span-${this.span}`]: this.span,
            // [`${prefixCls}-order-${this.order}`]: this.order,
            // [`${prefixCls}-offset-${this.offset}`]: this.offset,
            // [`${prefixCls}-push-${this.push}`]: this.push,
            // [`${prefixCls}-pull-${this.pull}`]: this.pull,
            // [`${this.className}`]: !!this.className
          }
        ];

        ['xs', 'sm', 'md', 'lg'].forEach(size => {
          if (typeof this[size] === 'number') {
            classList.push(`${prefixCls}-span-${size}-${this[size]}`);
          } else if (typeof this[size] === 'object') {
            let props = this[size];
            Object.keys(props).forEach(prop => {
              classList.push(
                prop !== 'span'
                  ? `${prefixCls}-${size}-${prop}-${props[prop]}`
                  : `${prefixCls}-span-${size}-${props[prop]}`
              );
            });
          }
        });

        return classList;
      },
      styles () {
        let style = {};
        const hasBrother = hasRightBrother(this, 'Col');
        const brothers = findBrothersComponents(this, 'Col', false)
        const brotherLen = brothers.length
        let _sum = 0
        let i = 0
        for (i; i < brotherLen; i++) {
          _sum += Number(brothers[i].span || 0)
        }
        if (this.gutter !== 0) {
          // style = {
          //   paddingLeft: this.gutter / 2 + 'px',
          //   paddingRight: this.gutter / 2 + 'px'
          // };
          // style['margin-left'] = this.gutter / 2 + 'px'
          if (!hasBrother || (Number(this.span) === 100) || (_sum > 100)) {
            style['margin-right'] = '0px !important'
          } else {
            style['margin-right'] = this.gutter + 'px!important'
          }
        }
        if (this.hasOwnProperty('gutter') && (Number(this.span) !== 100)) {
          if (_sum <= 100) {
            style.width = `calc((100% - ${this.gutter}px * (${brotherLen} - 1))/ var(--f7-cols-per-row))!important`
          } else {
            // style.width = `calc((100% - ${this.gutter}px * (var(--f7-cols-per-row) - 1))/ var(--f7-cols-per-row))!important`
          }
        }

        if (this.offset) {
          style['margin-left'] = `calc((100% - ${this.gutter}px * (${brotherLen} - 1)) * ${this.offset / 100} + ${this.gutter}px)!important`
        }

        return style;
      }
    },
    methods: {
      updateGutter () {
        const Row = findComponentUpward(this, 'Row');
        if (Row) {
          Row.updateGutter(Row.gutter);
        }
      }
    },
    mounted () {
      this.updateGutter();
    },
    beforeDestroy () {
      this.updateGutter();
    }
  };
</script>
