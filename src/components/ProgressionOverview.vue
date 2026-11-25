<script setup lang="ts">
import { useTodosStore } from "../storage/todosStore";
import ProgressBar from "./ProgressBar.vue";

const todosStore = useTodosStore();
</script>
<template>
  <div class="todo-container mb-2">
    <h1>Avancement</h1>
    <ProgressBar
      v-bind:label="`Progression: ${todosStore.doneTime} / ${todosStore.totalTime}`"
      :value="todosStore.progressionPercentage"
    />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=BBH+Bogle&display=swap");

h1 {
  font-family: "BBH Bogle", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  font-style: normal;
}
</style>
