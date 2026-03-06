<script setup lang="ts">
import { computed, ref } from "vue";
import type { Category, Timeframes } from "./types";
import CardProfile from "./components/CardProfile.vue";
import CardCategory from "./components/CardCategory.vue";

const data: Category[] = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const currentTimeframe = ref<Timeframes>("weekly");

const lastMessages = new Map([
  ["daily", "Yesterday"],
  ["weekly", "Last Week"],
  ["monthly", "Last Month"],
]);

const lastMessage = computed(
  () => lastMessages.get(currentTimeframe.value) ?? "",
);
</script>

<template>
  <main class="flex min-h-svh items-center justify-center">
    <section
      class="flex flex-col justify-center gap-6 px-4 py-20 lg:flex-row lg:px-20 lg:py-0"
    >
      <CardProfile :currentTimeframe @update="currentTimeframe = $event" />
      <ul
        class="flex flex-1 flex-col justify-center gap-6 lg:grid lg:grid-cols-[repeat(3,minmax(0,256px))] lg:place-content-center"
      >
        <CardCategory
          v-for="datum in data"
          :title="datum.title"
          :timeframe="datum.timeframes[currentTimeframe]"
          :lastMessage
        />
      </ul>
    </section>
  </main>
</template>
