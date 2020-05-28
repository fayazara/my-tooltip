<template>
  <div class="text-center my-7">
    <h3>Tooltip with Vue Directives</h3>
    <div class="my-2"></div>
    <button v-tooltip="{ message: 'Top', position: 'top' }" class="btn indigo">
      Top
    </button>
    <button v-tooltip="{ message: 'Bottom', position: 'bottom' }" class="btn indigo">
      Bottom
    </button>
    <button v-tooltip="{ message: 'Left', position: 'left' }" class="btn indigo">
      Left
    </button>
    <button v-tooltip="{ message: 'Right', position: 'right' }" class="btn indigo">
      Right
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
