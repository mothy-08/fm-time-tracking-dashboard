<script setup lang="ts">
import IconEllipsis from "./icons/IconEllipsis.vue";
import IconExercise from "./icons/IconExercise.vue";
import IconPlay from "./icons/IconPlay.vue";
import IconSocial from "./icons/IconSocial.vue";
import IconStudy from "./icons/IconStudy.vue";
import IconWork from "./icons/IconWork.vue";
import IconSelfCare from "./icons/IconSelfCare.vue";
import { computed } from "vue";

const props = defineProps<{
  title: string;
  currValue: number;
  prevValue: number;
  lastMessage: string;
}>();

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
      class="relative overflow-hidden w-full h-full rounded-2xl pb-16 bg-orange-300 -z-1"
      :class="designColor"
    >
      <component :is="designIcon" class="absolute -top-3 right-6" />
    </div>

    <!-- dynamic title -->
    <div class="-mt-6 rounded-2xl bg-navy-900 px-6 py-7 space-y-4">
      <div class="flex justify-between items-center">
        <h2 class="text-lg">{{ title }}</h2>
        <IconEllipsis />
      </div>

      <div class="flex justify-between items-center">
        <!-- dynamic curr value -->
        <data :value="`${currValue} hours`" class="text-3xl font-light"
          >{{ currValue }}hrs</data
        >

        <span class="text-navy-200">
          <!-- dynamic lastMsg -->
          {{ lastMessage }} -
          <data :value="`${prevValue} hours`"> {{ prevValue }}hrs </data>
        </span>
      </div>
    </div>
  </li>
</template>
