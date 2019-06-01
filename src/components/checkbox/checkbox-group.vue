<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<style scoped>
.enkel-checkbox-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.enkel-checkbox-group .enkel-checkbox {
  width: 100%;
  height: 34px;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>

<script>
import { findComponentsDownward, oneOf } from '../../utils/assist';
import Emitter from '../../mixins/emitter';

const prefixCls = 'enkel-checkbox-group';

export default {
  name: 'CheckboxGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default () {
        return [];
      }
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
      currentValue: this.value,
      childrens: []
    };
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`enkel-checkbox-${this.size}`]: !!this.size
        }
      ];
    }
  },
  mounted () {
    // this.updateModel(true);
  },
  methods: {
    updateModel (update) {
      this.childrens = findComponentsDownward(this, 'Checkbox');
      if (this.childrens) {
        const { value } = this;
        this.childrens.forEach(child => {
          child.model = value;

          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0;
            child.group = true;
          }
        });
      }
    },
    change (data) {
      let key = Object.keys(data)[0]
      let index = this.currentValue.indexOf(key)
      if (index > -1) {
        if (!data[key]) {
          this.currentValue.splice(index, 1)
        }
      } else {
        if (data[key]) {
          this.currentValue.push(key)
        }
      }
      this.$emit('input', this.currentValue);
      this.$emit('change', this.currentValue);
      //   this.dispatch('FormItem', 'on-form-change', data);
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  }
};
</script>
