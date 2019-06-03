<template>
  <div class="slider_container">
    <div class="line">
      <div class="line-label">Normal Slider</div>
      <Row :gutter="15">
        <Col :span="10">
        <Icon type="volume_mute_fill"></Icon>
        </Col>
        <Col :span="80">
        <Slider v-model="volumn"></Slider>
        </Col>
        <Col :span="10">
        <Icon type="volume_fill"
              size="24"></Icon>
        </Col>
      </Row>
      <div>{{volumn}}</div>
    </div>
    <div class="line">
      <div class="line-label">Color Slider</div>
      <Row :gutter="15">
        <Col :span="10">
        <Icon type="circle"
              size="24"></Icon>
        </Col>
        <Col :span="80">
        <Slider v-model="volumn2"
                color="88"></Slider>
        </Col>
        <Col :span="10">
        <Icon type="circle_half"
              size="24"></Icon>
        </Col>
      </Row>
      <div>{{volumn2}}</div>
    </div>
    <div class="line">
      <div class="line-label">Color Slider</div>
      <Row :gutter="15">
        <Col :span="10">
        <Icon type="money_yen_round"
              size="24"></Icon>
        </Col>
        <Col :span="80">
        <Slider v-model="price"
                :range="true"
                :min="0"
                :max="1000"
                color="yellow"></Slider>
        </Col>
        <Col :span="10">
        <Icon type="money_yen_round_fill"
              size="24"></Icon>
        </Col>
      </Row>
      <div>{{'¥' + price.join('- ¥')}}</div>
    </div>
    <div class="line">
      <div class="line-label">Scale Slider</div>
      <Row>
        <Col>
        <Slider v-model="withScale"
                :min="0"
                :max="100"
                :step="5"
                :scale="true"
                :scale-steps="10"
                :scale-sub-steps="2"
                color="orange"></Slider>
        </Col>
      </Row>
      <div>{{withScale}}</div>
    </div>
    <div class="line">
      <div class="line-label">Vertical Slider</div>
      <Row :gutter="15"
           justify="center">
        <Col :span="20"
             :offset="10">
        <Slider value="25"
                :min="0"
                :max="100"
                :vertical="true"
                color="red"
                style="height: 160px;"></Slider>
        </Col>
        <Col :span="20">
        <Slider value="50"
                :min="0"
                :max="100"
                :vertical="true"
                color="red"
                style="height: 160px;"></Slider>
        </Col>
        <Col :span="20">
        <Slider value="75"
                :min="0"
                :max="100"
                :vertical="true"
                color="red"
                style="height: 160px;"></Slider>
        </Col>
        <Col :span="20">
        <Slider :value="[25, 75]"
                :min="0"
                :max="100"
                :vertical="true"
                :range="true"
                color="red"
                style="height: 160px;"></Slider>
        </Col>
      </Row>
    </div>
    <div class="line">
      <div class="line-label">Vertical Reversed Slider</div>
      <Row :gutter="15"
           justify="center">
        <Col :span="20"
             :offset="10">
        <Slider value="25"
                :min="0"
                :max="100"
                :vertical="true"
                :vertical-reversed="true"
                color="purple"
                style="height: 160px;"></Slider>
        </Col>
        <Col :span="20">
        <Slider value="50"
                :min="0"
                :max="100"
                :vertical="true"
                :vertical-reversed="true"
                color="purple"
                style="height: 160px;"></Slider>
        </Col>
        <Col :span="20">
        <Slider value="75"
                :min="0"
                :max="100"
                :vertical="true"
                :vertical-reversed="true"
                color="purple"
                style="height: 160px;"></Slider>
        </Col>
        <Col :span="20">
        <Slider :value="[25, 75]"
                :min="0"
                :max="100"
                :vertical="true"
                :range="true"
                :vertical-reversed="true"
                color="purple"
                style="height: 160px;"></Slider>
        </Col>
      </Row>
    </div>
  </div>
</template>
<style scoped>
.slider_container {
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;
}
.line {
  position: relative;
  margin-top: 10px;
  padding: 0 10px;
  box-sizing: border-box;
}
.line-label {
  width: 100%;
  margin-top: 35px;
  margin-bottom: 25px;
  box-sizing: border-box;
  color: #6d6d72;
  font-size: 14px;
  font-weight: 400;
}
.line_item {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.line_item_before,
.line_item_after {
  width: 30px;
}
.line_item_center {
  width: calc(100% - 60px);
}
div[class*="col"] {
  margin-bottom: 15px;
}
</style>

<script>
export default {
  data () {
    return {
      volumn: 10,
      volumn2: 0,
      price: [100, 200],
      withScale: 25,
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      }
    }
  }
}
</script>
