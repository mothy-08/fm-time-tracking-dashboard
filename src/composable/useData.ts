import type { Category } from "@/types";
import { ref } from "vue";

export function useData() {
  const data = ref<Category[] | null>(null);
  const error = ref<unknown>(null);

  const loadData = async () => {
    try {
      const response = await fetch("/data.json");

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      data.value = await response.json();
    } catch (err) {
      error.value = err;
    }
  };

  return { data, error, loadData };
}
