<script setup lang="ts">
import type { Timeframes } from "@/types";

const { currentTimeframe } = defineProps<{
  currentTimeframe: Timeframes;
}>();

const emit = defineEmits<{
  update: [currentTimeframe: Timeframes];
}>();

const timeframes: Timeframes[] = ["daily", "weekly", "monthly"];
</script>
<template>
  <div class="max-w-64 relative">
    <div
      class="flex gap-4 items-center bg-purple-600 p-8 rounded-2xl md:flex-col md:items-start md:pb-20"
    >
      <img
        class="rounded-full border-2 border-white"
        src="@/assets/image-jeremy.png"
        alt="Portrait of a man smiling to the camera"
        width="71"
        height="71"
      />
      <h1>
        <span class="text-navy-200">Report for</span><br />
        <span class="text-2xl md:text-4xl font-light">Jeremy Robson</span>
      </h1>
    </div>

    <ul
      class="absolute bottom-0 right-0 w-full bg-navy-900 text-navy-200 text-lg p-8 flex items-center md:flex-col md:items-start md:gap-4 md:text-base justify-between rounded-2xl"
    >
      <li v-for="tf in timeframes" :key="tf">
        <button
          class="hover:text-white cursor-pointer"
          @click="emit('update', tf)"
          :class="{
            'text-white': currentTimeframe === tf,
          }"
        >
          {{ tf.charAt(0).toUpperCase() + tf.slice(1) }}
        </button>
      </li>
    </ul>
  </div>
</template>
