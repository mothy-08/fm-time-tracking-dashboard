<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import CardCategory from "./components/CardCategory.vue";
import { useData } from "./composable/useData";
import CardProfile from "./components/CardProfile.vue";
import type { Timeframes } from "./types";

const { data, loadData } = useData();
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
  <main class="min-h-svh flex items-center justify-center">
    <section class="max-w-6xl flex flex-col gap-6 md:flex-row justify-center">
      <CardProfile :currentTimeframe @update="currentTimeframe = $event" />
      <ul
        class="flex flex-col md:grid md:grid-cols-3 md:place-content-center gap-6 items-center justify-center"
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
