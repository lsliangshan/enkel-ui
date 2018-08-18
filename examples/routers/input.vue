<template>
  <!--<div>-->
  <!--<Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>-->
  <!--<Input v-model="value11">-->
  <!--<span slot="prepend">http://</span>-->
  <!--<span slot="append">.com</span>-->
  <!--</Input>-->
  <!--<br>-->
  <!--<Input v-model="value12">-->
  <!--<Select v-model="select1" slot="prepend" style="width: 80px">-->
  <!--<Option value="http">http://</Option>-->
  <!--<Option value="https">https://</Option>-->
  <!--</Select>-->
  <!--<Select v-model="select2" slot="append" style="width: 70px">-->
  <!--<Option value="com">.com</Option>-->
  <!--<Option value="org">.org</Option>-->
  <!--<Option value="io">.io</Option>-->
  <!--</Select>-->
  <!--</Input>-->
  <!--<br>-->
  <!--<Input v-model="value13">-->
  <!--<Select v-model="select3" slot="prepend" style="width: 80px">-->
  <!--<Option value="day">Day</Option>-->
  <!--<Option value="month">Month</Option>-->
  <!--</Select>-->
  <!--<Button slot="append" icon="ios-search"></Button>-->
  <!--</Input>-->
  <!--<br>-->

  <!--<Input v-model="value11" size="small">-->
  <!--<span slot="prepend">http://</span>-->
  <!--<span slot="append">.com</span>-->
  <!--</Input>-->
  <!--<br>-->
  <!--<Input v-model="value12" size="small">-->
  <!--<Select v-model="select1" slot="prepend" style="width: 80px">-->
  <!--<Option value="http">http://</Option>-->
  <!--<Option value="https">https://</Option>-->
  <!--</Select>-->
  <!--<Select v-model="select2" slot="append" style="width: 70px">-->
  <!--<Option value="com">.com</Option>-->
  <!--<Option value="org">.org</Option>-->
  <!--<Option value="io">.io</Option>-->
  <!--</Select>-->
  <!--</Input>-->
  <!--<br>-->
  <!--<Input v-model="value13" size="small">-->
  <!--<Select v-model="select3" slot="prepend" style="width: 80px">-->
  <!--<Option value="day">Day</Option>-->
  <!--<Option value="month">Month</Option>-->
  <!--</Select>-->
  <!--<Button slot="append" icon="ios-search"></Button>-->
  <!--</Input>-->
  <!--<br>-->

  <!--<Input v-model="value11" size="large">-->
  <!--<span slot="prepend">http://</span>-->
  <!--<span slot="append">.com</span>-->
  <!--</Input>-->
  <!--<br>-->
  <!--<Input v-model="value12" size="large">-->
  <!--<Select v-model="select1" slot="prepend" style="width: 80px">-->
  <!--<Option value="http">http://</Option>-->
  <!--<Option value="https">https://</Option>-->
  <!--</Select>-->
  <!--<Select v-model="select2" slot="append" style="width: 70px">-->
  <!--<Option value="com">.com</Option>-->
  <!--<Option value="org">.org</Option>-->
  <!--<Option value="io">.io</Option>-->
  <!--</Select>-->
  <!--</Input>-->
  <!--<br>-->
  <!--<Input v-model="value13" size="large">-->
  <!--<Select v-model="select3" slot="prepend" style="width: 80px">-->
  <!--<Option value="day">Day</Option>-->
  <!--<Option value="month">Month</Option>-->
  <!--</Select>-->
  <!--<Button slot="append" icon="ios-search"></Button>-->
  <!--</Input>-->
  <!--<br>-->
  <!--</div>-->

  <!--<div>-->
  <!--<Input-->
  <!--v-model="value"-->
  <!--size="small"-->
  <!--prefix="ios-contact"-->
  <!--suffix="ios-search"-->
  <!--placeholder="Enter something..."-->
  <!--style="width: 300px"></Input>-->
  <!--<br>-->
  <!--<Input-->
  <!--v-model="value"-->
  <!--prefix="ios-contact"-->
  <!--suffix="ios-search"-->
  <!--placeholder="Enter something..."-->
  <!--style="width: 300px"></Input>-->
  <!--<br>-->
  <!--<Input-->
  <!--v-model="value"-->
  <!--size="large"-->
  <!--prefix="ios-contact"-->
  <!--suffix="ios-search"-->
  <!--placeholder="Enter something..."-->
  <!--style="width: 300px"></Input>-->
  <!--<br><br>-->
  <!--<Input-->
  <!--v-model="value"-->
  <!--size="small"-->
  <!--icon="ios-search"-->
  <!--placeholder="Enter something..."-->
  <!--style="width: 300px"></Input>-->
  <!--<br>-->
  <!--<Input-->
  <!--v-model="value"-->
  <!--icon="ios-search"-->
  <!--placeholder="Enter something..."-->
  <!--style="width: 300px"></Input>-->
  <!--<br>-->
  <!--<Input-->
  <!--v-model="value"-->
  <!--size="large"-->
  <!--icon="ios-search"-->
  <!--placeholder="Enter something..."-->
  <!--style="width: 300px"></Input>-->
  <!--<br><br><br>-->
  <!--<Input v-model="value" placeholder="Enter something..." style="width: 300px">-->
  <!--<Icon type="ios-alarm-outline" slot="suffix" />-->
  <!--<Icon type="ios-aperture" slot="prefix" />-->
  <!--</Input>-->
  <!--<br><br><br><br>-->
  <!--<Input v-model="value" search enter-button style="width: 300px" @on-search="hs" size="small" />-->
  <!--<br>-->
  <!--<Input v-model="value" search enter-button style="width: 300px" @on-search="hs" />-->
  <!--<br>-->
  <!--<Input v-model="value" search enter-button style="width: 300px" @on-search="hs" size="large" />-->
  <!--<br><br>-->
  <!--<Input v-model="value" search style="width: 300px" @on-search="hs" />-->
  <!--<br><br>-->
  <!--<Input v-model="value" search enter-button="Search" style="width: 300px" @on-search="hs" />-->
  <!--</div>-->
  <div>
    <!--<div style="margin-top: 15px; width: 400px;">-->
      <!--<Input v-model="value7" type="text" :shrink="false" placeholder="请输入您的用户名" label="用户名"/>-->
    <!--</div>-->
    <!--<div style="margin-top: 15px; width: 400px;">-->
      <!--<Input type="password" theme="primary" placeholder="请输入密码" :shrink="true" label="密码" :value="pwd" v-model="password"/>-->
             <!--&lt;!&ndash;:label-style="labelStyles" :input-style="inputStyles" :placeholder-style="placeholderStyles"/>&ndash;&gt;-->
    <!--</div>-->
    <!--<div style="margin-top: 15px; width: 400px;">-->
      <!--<Input type="text" theme="warning" placeholder="请输入" label="警告"/>-->
    <!--</div>-->
    <!--<div style="margin-top: 15px; width: 400px;">-->
      <!--<Input type="text" theme="info" placeholder="请输入" required label="提示"/>-->
    <!--</div>-->
    <!--<div style="margin-top: 15px; width: 400px;">-->
      <!--<Input type="text" theme="error" placeholder="请输入" label="错误" :label-style="labelStyles" :tip="tip" :tip-style="tipStyles"/>-->
    <!--</div>-->
    <!--<div style="margin-top: 15px; width: 400px;">-->
      <!--<Input type="text" theme="success" placeholder="请输入" label="成功"/>-->
    <!--</div>-->
    <div style="margin-top: 15px; width: 400px;">
      <Input type="text" theme="default" icon="#github" placeholder="请输入" label="用户名" icon-position="in" :icon-style="iconStyles"/>
    </div>
    <div style="margin-top: 15px; width: 400px;">
      <Input type="text" theme="default"  icon="#github" placeholder="请输入" label="用户名" icon-position="out" :icon-style="iconStyles"/>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: '',
        value11: '',
        value12: '',
        value13: '',
        select1: 'http',
        select2: 'com',
        select3: 'day',
        value7: '',
        password: 'abc123',
        pwd: 'aaa',
        labelStyles: {
          color: 'red',
          fontSize: '15px'
        },
        inputStyles: {
          fontSize: '16px',
          color: 'darkcyan',
          lineHeight: '40px'
        },
        placeholderStyles: {
          fontSize: '16px',
          color: '#888888AA'
        },
        tipStyles: {
        },
        tip: '测试tip',
        iconStyles: {
          // fontSize: '18px'
          // ,
          // color: 'red'
        }
      };
    },
    methods: {
      hs (val) {
        console.log(val);
      }
    },
    created () {
      this.$nextTick(() => {
        setTimeout(() => {
          this.tip = '测试：' + Math.floor(Math.random() * 10000)
        }, 3000)
      })
    }
  };
</script>
