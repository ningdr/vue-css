<template>
  <div>
    <button v-on:click="btnClick" class="btn btn-blue">
      <a href="/button.html" target="_blank">Button Example</a>
    </button>
  </div>
</template>
<script>
export default {
  name: "Button",
  data() {
    return {
      name: "TailwindCSS"
    };
  },
  methods: {
    btnClick() {
      console.log(this.name);
    }
  }
};
</script>
<style scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
  outline: none;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>