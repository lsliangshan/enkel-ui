<style scoped>
  .view {
    height: 100px;
    width: 100px;
    background: yellow;
  }
  div[class*="col"] {
    background: #fff;
    text-align: center;
    color: #000;
    border: 1px solid #ddd;
    padding: 5px;
    margin-bottom: 15px;
    font-size: 12px;
    word-break: break-all;
  }
  .grid_container {
    padding: 10px;
    box-sizing: border-box;
    overflow-y: auto;
  }
  .line-title {
    width: 100%;
    margin-top: 35px;
    margin-bottom: 10px;
    box-sizing: border-box;
    color: #6d6d72;
    font-size: 14px;
    font-weight: 400;
  }
</style>
<template>
  <div class="grid_container">
    <div class="line-title">间距(gutter):{{gutter}}px</div>
    <Row :gutter="gutter">
      <Col>50%</Col>
      <Col>50%</Col>
    </Row>
    <Row :gutter="gutter">
      <Col>25%</Col>
      <Col>25%</Col>
      <Col>25%</Col>
      <Col>25%</Col>
    </Row>
    <Row :gutter="gutter">
      <Col>33%</Col>
      <Col>33%</Col>
      <Col>33%</Col>
    </Row>
    <Row :gutter="gutter">
      <Col>20%</Col>
      <Col>20%</Col>
      <Col>20%</Col>
      <Col>20%</Col>
      <Col>20%</Col>
    </Row>
    <Row :gutter="gutter">
      <Col :span="33">33% (span=33)</Col>
      <Col :span="66">66% (span=66)</Col>
    </Row>
    <Row :gutter="gutter">
      <Col :span="25">25% (span=25)</Col>
      <Col :span="25">25% (span=25)</Col>
      <Col :span="50">50% (span=50)</Col>
    </Row>
    <Row :gutter="gutter">
      <Col :span="75">75% (span=75)</Col>
      <Col :span="25">25% (span=25)</Col>
    </Row>
    <Row :gutter="gutter">
      <Col :span="80">80% (span=80)</Col>
      <Col :span="20">20% (span=20)</Col>
    </Row>

    <div class="line-title">间距(gutter):0</div>
    <Row>
      <Col>50%</Col>
      <Col>50%</Col>
    </Row>
    <Row>
      <Col>25%</Col>
      <Col>25%</Col>
      <Col>25%</Col>
      <Col>25%</Col>
    </Row>
    <Row>
      <Col>33%</Col>
      <Col>33%</Col>
      <Col>33%</Col>
    </Row>
    <Row>
      <Col>20%</Col>
      <Col>20%</Col>
      <Col>20%</Col>
      <Col>20%</Col>
      <Col>20%</Col>
    </Row>
    <Row>
      <Col :span="33">33% (span=33)</Col>
      <Col :span="66">66% (span=66)</Col>
    </Row>
    <Row>
      <Col :span="25">25% (span=25)</Col>
      <Col :span="25">25% (span=25)</Col>
      <Col :span="50">50% (span=50)</Col>
    </Row>
    <Row>
      <Col :span="75">75% (span=75)</Col>
      <Col :span="25">25% (span=25)</Col>
    </Row>
    <Row>
      <Col :span="80">80% (span=80)</Col>
      <Col :span="20">20% (span=20)</Col>
    </Row>

    <div class="line-title">嵌套</div>
    <Row :gutter="gutter">
      <Col :span="50">
      50% (span=50)
      <Row :gutter="10">
        <Col :span="50">50% (span=50)</Col>
        <Col :span="50">50% (span=50)</Col>
      </Row>
      </Col>
      <Col :span="50">
      50% (span=50)
      <Row :gutter="10">
        <Col :span="33">33% (span=33)</Col>
        <Col :span="66">66% (span=66)</Col>
      </Row>
      </Col>
    </Row>

    <div class="line-title">响应式网格</div>
    <Row :gutter="gutter">
      <Col :span="100"
           :md="50"
           :lg="33">100% (md=50, lg=33)</Col>
      <Col :span="100"
           :md="50"
           :lg="33">100% (md=50, lg=33)</Col>
      <Col :span="100"
           :md="50"
           :lg="33">100% (md=50, lg=33)</Col>
    </Row>
    <Row :gutter="gutter">
      <Col :span="50"
           :md="25"
           :lg="20">50% (md=25, lg=20)</Col>
      <Col :span="50"
           :md="25"
           :lg="20">50% (md=25, lg=20)</Col>
      <Col :span="50"
           :md="25"
           :lg="20">50% (md=25, lg=20)</Col>
      <Col :span="50"
           :md="25"
           :lg="20">50% (md=25, lg=20)</Col>
      <Col :span="50"
           :md="25"
           :lg="20">50% (md=25, lg=20)</Col>
    </Row>
    <Row :gutter="gutter">
      <Col :span="100"
           :md="40">100% (md=40)</Col>
      <Col :span="50"
           :md="60">50% (md=60)</Col>
      <Col :span="50"
           :md="66">50% (md=66)</Col>
      <Col :span="100"
           :md="33">100% (md=33)</Col>
    </Row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        gutter: 100
      }
    }
  }
</script>
