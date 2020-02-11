<template>
  <div id="app" class="container mx-auto">
    <Button v-on:clickButton="clickButton"/>
    <EchartDemo v-show="showChart"/>
    <Button v-on:clickButton="showCardFun"/>
    <BuinessCard v-if="showCard"/>
  </div>
</template>

<script>
import Button from './components/Button.vue'
import EchartDemo from './components/EchartDemo.vue'
import BuinessCard from './components/BuinessCard.vue'

export default {
  name: 'app',
  components: {
    // 注册局部组件
    Button,
    EchartDemo,
    BuinessCard
  },
  data() {
    return {
      showChart: false,
      showCard: false
    }
  },
  methods: {
    clickButton() {
      console.log("显示chart：" + this.showChart);
      this.showChart = !this.showChart;
    },
    showCardFun() {
      this.showCard = !this.showCard;
    }
  }
}
</script>
<style scoped>
#app {
  @apply bg-red-100;
}
</style>
