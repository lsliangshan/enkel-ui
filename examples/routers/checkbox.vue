<template>
  <div>
    <!-- <Checkbox name="checkbox1"
              :indeterminate="true"
              :value="false"
              label="Twitter"
              size="large"
              :disabled="true">

    </Checkbox> -->
    <div style="width: 32px; height: 32px; display: flex; flex-direction: row; align-items: center; justify-content: center;">
      <Checkbox name="checkbox2"
                :indeterminate="true"
                v-model="testValue">test number</Checkbox>
    </div>
    <div>选中的值：{{ JSON.stringify(testValue) }}</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        social: ['facebook', 'github'],
        fruit: ['苹果'],
        tags: [],
        testValue: false
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
    }
  };
</script>
