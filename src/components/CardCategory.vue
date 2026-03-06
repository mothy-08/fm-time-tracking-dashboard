<script setup lang="ts">
import { computed } from "vue";
import type { CurrPrevTimeframe } from "@/types";
import IconEllipsis from "./icons/IconEllipsis.vue";
import IconExercise from "./icons/IconExercise.vue";
import IconPlay from "./icons/IconPlay.vue";
import IconSocial from "./icons/IconSocial.vue";
import IconStudy from "./icons/IconStudy.vue";
import IconWork from "./icons/IconWork.vue";
import IconSelfCare from "./icons/IconSelfCare.vue";

const props = defineProps<{
  title: string;
  timeframe: CurrPrevTimeframe;
  lastMessage: string;
}>();

const currValue = computed(() => props.timeframe.current);
const prevValue = computed(() => props.timeframe.previous);

const designCardStyles = new Map([
  ["Work", { color: "bg-orange-300", icon: IconWork }],
  ["Play", { color: "bg-blue-300", icon: IconPlay }],
  ["Study", { color: "bg-pink-400", icon: IconStudy }],
  ["Exercise", { color: "bg-green-400", icon: IconExercise }],
  ["Social", { color: "bg-purple-700", icon: IconSocial }],
  ["Self Care", { color: "bg-yellow-300", icon: IconSelfCare }],
]);

const designColor = computed(() => designCardStyles.get(props.title)?.color);
const designIcon = computed(() => designCardStyles.get(props.title)?.icon);
</script>

<template>
  <li>
    <div
      class="relative -z-1 -mb-8 w-full overflow-hidden rounded-2xl pb-18"
      :class="designColor"
    >
      <component :is="designIcon" class="absolute -top-3 right-6" />
    </div>

    <button
      class="bg-navy-900 w-full cursor-pointer space-y-4 rounded-2xl px-6 py-7 hover:bg-purple-500"
    >
      <div class="flex items-center justify-between">
        <h2 class="text-lg">{{ title }}</h2>
        <button class="cursor-pointer">
          <IconEllipsis />
        </button>
      </div>

      <div
        class="flex items-center justify-between lg:flex-col lg:items-start lg:gap-5"
      >
        <data
          :value="`${currValue} hours`"
          class="text-3xl font-light lg:text-5xl"
          >{{ currValue }}hrs</data
        >

        <span class="text-navy-200 lg:text-sm">
          {{ lastMessage }} -
          <data :value="`${prevValue} hours`"> {{ prevValue }}hrs </data>
        </span>
      </div>
    </button>
  </li>
</template>
