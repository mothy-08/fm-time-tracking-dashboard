<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import type { Category, Timeframes } from "./types";
import CardProfile from "./components/CardProfile.vue";
import CardCategory from "./components/CardCategory.vue";

const data = ref<Category[] | null>(null);

async function loadData() {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data.json`);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    data.value = await response.json();
  } catch (error) {
    console.error(error);
  }
}

onMounted(loadData);

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
