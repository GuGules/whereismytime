<script setup lang="ts">
import { onBeforeMount } from 'vue';
import TodoForm from './components/TodoForm.vue'
import { useTodosStore } from './storage/todosStore.ts';
import ProgressionOverview from './components/ProgressionOverview.vue';
import TodoList from './components/TodoList.vue';
import InfoCard from './components/InfoCard.vue';

const todosStore = useTodosStore();

onBeforeMount(()=>{
  todosStore.load()
})

</script>

<template>
  <TodoForm />
  <ProgressionOverview />
  <TodoList />
  <InfoCard />
</template>
