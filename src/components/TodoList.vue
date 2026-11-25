<script setup lang="ts">
import TodoCard from "./TodoCard.vue";
import { useTodosStore } from "../storage/todosStore";

const todosStore = useTodosStore();

function deleteTodo(todoId:number){
  todosStore.deleteTodo(todoId);
}
function undoneTodo(todoId:number){
  todosStore.setDoneTodo(todoId, false);
}
function doneTodo(todoId:number){
  todosStore.setDoneTodo(todoId, true)
}

</script>
<template>
  <div class="todo-container mb-2">
    <h1>Liste des todos</h1>
    <div class="text-sm" v-if="todosStore.userTodosData.length == 0">
      Aucun todo pour le moment
    </div>
    <div v-for="todo in todosStore.userTodosData">
      <TodoCard
        :done="todo.done"
        :content="todo.content"
        :time="todo.time"
        v-on:delete-todo="deleteTodo(todo.id)"
        v-on:undone-todo="undoneTodo(todo.id)"
        v-on:done-todo="doneTodo(todo.id)"
      />
    </div>
  </div>
</template>
