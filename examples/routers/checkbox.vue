<template>
  <div class="checkbox-example-container">
    <!-- <Checkbox name="checkbox1"
              :indeterminate="true"
              :value="false"
              label="Twitter"
              size="large"
              :disabled="true">

    </Checkbox> -->
    <div class="line">
      <div class="line-label">单独使用</div>
      <div class="line-item">
        <Checkbox v-model="checkbox1"
                  ripple-color="green"
                  type="green"
                  :no-ripple="noRipple"
                  :disabled="checkbox1Disabled"></Checkbox>
        <div>
          {{checkbox1}}
          <br>
          <Button size="small"
                  outline
                  @click="checkbox1Disabled = !checkbox1Disabled"
                  style="width: 80px; display: inline-block;">{{checkbox1Disabled ? '取消禁用' : '禁用'}}</Button>
          <Button fill
                  size="small"
                  @click="noRipple = !noRipple"
                  style="width: 80px; display: inline-block;">{{noRipple ? '启用Ripple' : '禁用Ripple'}}</Button>
        </div>
      </div>
    </div>
    <div class="line">
      <div class="line-label">组合使用</div>
      <div class="line-item">
        <CheckboxGroup v-model="social">
          <Checkbox value="facebook"
                    true-value="aa"
                    false-value="bb"
                    label="facebook"></Checkbox>
          <Checkbox value="github"
                    label="github"></Checkbox>
          <Checkbox value="apple"
                    label="apple"></Checkbox>
        </CheckboxGroup>
        <div>选中的值：{{ JSON.stringify(social) }}</div>
      </div>
    </div>
    <div class="line">
      <div class="line-label">全选</div>
      <div class="line-item">
        <Checkbox label="全选"
                  style="height: 34px;"
                  v-model="fruits"
                  :check-all="allFruits"></Checkbox>
      </div>
      <div class="line-item">
        <CheckboxGroup v-model="fruits">
          <Checkbox v-for="(fruit, index) in allFruits"
                    :key="index"
                    :label="fruit"
                    :checked="fruits.indexOf(fruit) > -1"
                    :value="fruit"></Checkbox>
        </CheckboxGroup>
        <div>
          选中的值：{{ JSON.stringify(fruits) }}
          <br>
          <Button fill
                  size="small"
                  type="error"
                  @click="fruits = []"
                  style="width: 80px; display: inline-block;">清除</Button>
          <Button fill
                  size="small"
                  @click="fruits = JSON.parse(JSON.stringify(allFruits))"
                  style="width: 80px; display: inline-block;">设置</Button>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped>
.checkbox-example-container {
  /* padding: 20px; */
  box-sizing: border-box;
  overflow: auto;
}
.example-item {
  width: 100%;
  height: 40px;
}
.line {
  position: relative;
  margin-top: 10px;
}
.line-label {
  width: 100%;
  padding: 0 10px;
  margin-top: 35px;
  margin-bottom: 10px;
  box-sizing: border-box;
  color: #6d6d72;
  font-size: 14px;
  font-weight: 400;
}
.line-items {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  flex-wrap: wrap;
}
.line-item {
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
}
.w150 {
  width: 150px;
}
</style>

<script>
export default {
  data () {
    return {
      checkbox1: true,
      checkbox1Disabled: false,
      noRipple: false,
      social: ['facebook', 'github'],
      fruits: ['苹果', '香蕉', '西瓜'],
      allFruits: ['苹果', '香蕉', '西瓜'],
      tags: [],
      testValue: 'aaa'
    };
  },
  mounted () {
    setTimeout(() => {
      this.tags = [
        {
          label: '香蕉'
        },
        {
          label: '苹果'
        },
        {
          label: '西瓜'
        }
      ];
    }, 1000);
  },
  methods: {
    changeAll (e) {
      this.fruits = e ? this.allFruits : []
    }
  }
};
</script>
