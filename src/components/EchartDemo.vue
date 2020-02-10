<template>
  <div id="myChart" class="div-chart"></div>
</template>
<script>
export default {
  name: "EchartDemo",
  data() {
    return {
      name: "chart",
      checked: true,
      todos: [],
      board: ["   *   ", "  * *  ", "   *   "],
      char0: " ",
      char1: "*"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      this.$axios
        .get("/echart-format-json", {
          char0: this.char0,
          char1: this.char1,
          board: this.board
        })
        .then(res => {
          this.todos.unshift(res.data);
        });
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
#myChart {
  width: 400px;
  height: 400px;
}
.div-chart {
  @apply bg-red-100;
}
</style>