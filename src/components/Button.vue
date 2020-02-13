<template>
  <div>
    <button v-on:click="$emit('clickButton')" class="btn btn-blue" > {{ buttonName }}
      <!-- <a href="/button.html" target="_blank">Button Example</a> -->
    </button>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    showChart: {
      type: Boolean
    },
    buttonName: {
      type: String
    }
  },
  data() {
    return {
      name: "TailwindCSS",
      chart: this.showChart,
    };
  },
  methods: {
    btnClick() {
      console.log(this.chart);
      this.chart = !this.chart;
    }
  }
};
</script>
<style type="text/less" lang="less" scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
  
}
.btn-blue {
  @apply bg-blue-500 text-white;
  outline:none;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>