<script setup lang="ts">
import { Button } from "primevue";
import { Check, X, Trash } from "@lucide/vue";

const props = defineProps({
  content: {
    type: String,
    default: "Todo String",
  },
  time: {
    type: Number,
    default: 0,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["deleteTodo", "doneTodo", "undoneTodo"]);
</script>
<template>
  <div class="todo-card grid grid-cols-4 w-full gap-2 mb-1 p-1 pl-2">
    <div class="col-span-3 grid grid-cols-1">
        <div>
            {{ content }}
        </div>
        <div class="text-sm">
            Temps prévu: {{ time }} minutes
        </div>
    </div>
    <div class="grid grid-flow-col justify-items-end">
      <div class="mr-2">
        <Button class="h-full mr-1" v-if="!done" v-on:click="emits('doneTodo')"
          ><Check
        /></Button>
        <Button
          class="h-full mr-1"
          severity="danger"
          v-on:click="emits('undoneTodo')"
          v-if="done"
          ><X
        /></Button>
        <Button severity="danger" class="h-full" v-on:click="emits('deleteTodo')"
          ><Trash
        /></Button>
      </div>
    </div>
  </div>
</template>
<style>
.todo-card {
  background-color: #f1f5f2;
  border: solid 1px #e6e6ea;
  border-radius: 3px;
}
</style>
