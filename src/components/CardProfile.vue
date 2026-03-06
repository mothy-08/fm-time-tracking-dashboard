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
  <div class="bg-navy-900 relative rounded-2xl pb-16 lg:max-w-64 lg:pb-0">
    <div
      class="flex items-center gap-4 rounded-2xl bg-purple-600 p-8 lg:flex-col lg:items-start lg:gap-8 lg:pb-20"
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
        <span class="text-2xl font-light lg:text-4xl">Jeremy Robson</span>
      </h1>
    </div>

    <ul
      class="text-navy-200 absolute -bottom-3 left-0 flex h-full w-full items-end justify-between rounded-2xl p-8 text-lg lg:bottom-0 lg:flex-col lg:items-start lg:justify-end lg:gap-4 lg:text-base"
    >
      <li v-for="tf in timeframes" :key="tf">
        <button
          class="cursor-pointer hover:text-white"
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
