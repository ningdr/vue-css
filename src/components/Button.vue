<template>
  <div>
    <button v-on:click="$emit('clickButton')" class="btn btn-blue" >Button
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
<style scoped>
.btn {
  @apply font-bold py-2 px-4 rounded-full;
  outline: none;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>