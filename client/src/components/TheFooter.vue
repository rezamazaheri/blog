<template>
  <div class="wrapper">
    <div class="right-side">This</div>
    <div class="left-side">That</div>
  </div>
</template>
<script setup lang="ts">

</script>

<style lang="less">
@prefix:'wrapper';
.@{prefix} {
  @apply flex gap-2 p-4;
  .right-side {
    @apply bg-red-400;
  }
  .left-side {
    @apply bg-green-400;
  }
}
</style>
