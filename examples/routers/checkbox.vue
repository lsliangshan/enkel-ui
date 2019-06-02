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
                  @click="toggleDisable"
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
                  @click="clearFruits"
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
    },
    toggleDisable () {
      this.checkbox1Disabled = !this.checkbox1Disabled
      // this.$modal.show({
      //   title: '标题',
      //   text: 'text',
      //   content: 'content'
      // })

      // this.$modal.show({
      //   title: 'Vertical Buttons',
      //   text: 'Dialog with vertical buttons',
      //   buttons: [
      //     {
      //       text: 'Button 1',
      //     },
      //     {
      //       text: 'Button 2',
      //     },
      //     {
      //       text: 'Button 3',
      //     },
      //   ],
      //   verticalButtons: true
      // })

      // this.$modal.alert({
      //   title: 'title',
      //   content: 'content'
      // })

      // this.$modal.confirm({
      //   title: 'title',
      //   content: 'content',
      //   cancelColor: 'red',
      //   onOk: () => {
      //     console.log('ok')
      //   },
      //   onCancel: () => {
      //     console.log('cancel')
      //   }
      // })

      // let preloader = this.$modal.preloader({
      //   title: '加载中'
      // })
      // setTimeout(() => {
      //   preloader.close()
      // }, 3000)

      let p = 0
      let progress = this.$modal.progress({
        title: '正在处理',
        progress: p
      })
      progress.setText('1 of 10')
      let interval = setInterval(() => {
        p += 10
        progress.setProgress(p)
        progress.setText((p / 10) + ' of 10')
        if (p === 100) {
          clearInterval(interval)
          progress.close()
        }
      }, 500)

      // let progress = this.$modal.progress()
      // setTimeout(() => {
      //   progress.close()
      // }, 3000)
    },
    clearFruits () {
      this.fruits = []
      let toast = this.$toast.show({
        closeButton: true,
        text: '清除成功',
        closeButtonColor: 'red',
        closeButtonText: '确定',
        closeTimeout: 400000,
        on: {
          open () {
            console.log('toast open')
          },
          opened () {
            console.log('toast opened')
          },
          close () {
            console.log('toast close')
          },
          closed () {
            console.log('toast closed')
          }
        }
      })
    }
  }
};
</script>
