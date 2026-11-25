<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { useTodosStore } from '../storage/todosStore';
import InputNumber from 'primevue/inputnumber';

const todosStore = useTodosStore();

const content = ref<string>("");
const time = ref<number | null>(null);

function createTodo(){
  todosStore.createTodo(content.value, time.value ?? 0);
  content.value = "";
  time.value = null;
}

</script>
<template>
  <div class="todo-container mb-2">
    <h1>Creer un todo</h1>
    <div class="grid grid-cols-20 gap-2 pb-2">
      <InputText class="col-span-16" placeholder="Titre du todo" v-model="content"></InputText>
      <InputNumber class="col-span-4" placeholder="Temps estimé" v-model="time"></InputNumber>
    </div>
    <div class="grid grid-flow-col justify-items-end">
      <Button v-on:click="createTodo" class="">Ajouter le todo</Button>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=BBH+Bogle&display=swap');

.todo-container {
  border-radius: 10px;
  border: solid 1px #e6e6ea;
  background-color: #ffffff;
  padding: 1rem;
  color: black;
}

h1 {
  font-family: "BBH Bogle", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  font-style: normal;
}
</style>
