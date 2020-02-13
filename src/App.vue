<template>
  <div id="app">
    <Button v-on:clickButton="clickButton" v-bind:buttonName="chartBtn" />
    <Button v-on:clickButton="showCardFun" v-bind:buttonName="cardBtn"/>
    <Button v-on:clickButton="showAlertDemoFun" v-bind:buttonName="alertBtn"/>
    <Button v-on:clickButton="showBtnDemoFun" v-bind:buttonName="buttonBtn"/>
    <EchartDemo v-if="showChart"/>
    <BuinessCard v-if="showCard"/>
    <AlertDemo v-if="showAlertDemo"/>
    <button-demo v-if="showBtnDemo"/>
  </div>
</template>

<script>
import AlertDemo from './components/demo/AlertDemo.vue';
import Button from './components/Button.vue';
import EchartDemo from './components/EchartDemo.vue';
import BuinessCard from './components/BuinessCard.vue';
import ButtonDemo from './components/demo/ButtonDemo.vue';

export default {
  name: 'app',
  components: {
    // 注册局部组件
    AlertDemo,
    Button,
    ButtonDemo,
    EchartDemo,
    BuinessCard
  },
  data() {
    return {
      showChart: false,
      showAlertDemo: false,
      showBtnDemo: true,
      showCard: false,
      chartBtn: "Show Chart Demo",
      alertBtn: "Show Alert Demo",
      cardBtn: "Show Card Demo",
      buttonBtn: "Show Btn Demo",
    }
  },
  methods: {
    clickButton() {
      console.log("显示chart：" + this.showChart);
      this.showChart = !this.showChart;
    },
    showCardFun() {
      this.showCard = !this.showCard;
    },
    showAlertDemoFun() {
      this.showAlertDemo = !this.showAlertDemo;
    },
    showBtnDemoFun() {
      this.showBtnDemo = !this.showBtnDemo;
    }
  }
}
</script>
<style scoped>
#app {
  @apply bg-red-100;
}
</style>
