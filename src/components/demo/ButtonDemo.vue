<template>
    <div class="container mx-auto bg-teal-100 px-4 py-4 rounded">
        <div class="px-4 py-2 bg-blue-200">
            <span class="font-bold text-blue-500">Simple Button Example</span>
            <div class="py-2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Simple Button 1
                </button>
                <span class="px-2"></span>
                <button class="btn btn-blue">Simple Button 2</button>
            </div>
        </div>

        <div class="px-4 py-2 bg-orange-200">
            <span class="font-bold text-orange-700">Pill Button Example</span>
            <div class="py-2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Pill Button
                </button>
            </div>
        </div>

        <div class="px-4 py-2 bg-red-200">
            <span class="font-bold text-red-700">Outline Button Example</span>
            <div class="py-2">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white
                py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Outline Button
                </button>
            </div>
        </div>

        <div class="px-4 py-2 bg-indigo-200">
            <span class="font-bold text-indigo-700">Bordered Button Example</span>
            <div class="py-2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Bordered Button
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ButtonDemo'
}
</script>
<style type="text/less" lang="less" scoped>
 .btn {
    @apply font-bold py-2 px-4 rounded; 
    outline:none
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>