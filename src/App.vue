<script setup lang="ts">
import CardCategory from "./components/CardCategory.vue";
</script>

<template>
  <ul class="mx-auto flex items-center justify-center min-h-svh">
    <CardCategory
      class="w-[90%]"
      :title="'Work'"
      :currValue="32"
      :prevValue="28"
      :lastMessage="'Last Week'"
    />
  </ul>
</template>
