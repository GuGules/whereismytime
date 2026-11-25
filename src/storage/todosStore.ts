import { defineStore } from "pinia";
import { ref, watch } from "vue";
import type { Todo } from "../models/todo";

export const useTodosStore = defineStore("todosStore", () => {
  const userTodosData = ref<Todo[]>([]);
  const progressionPercentage = ref<number>(0);
  const doneTime = ref<number>(0);
  const todoTime = ref<number>(0);
  const totalTime = ref<number>(0);

  function addTodos(todo: Todo) {
    todo.id = userTodosData.value.length + 1;
    userTodosData.value.push(todo);
    save();
  }

  function createTodo(content: string, time: number) {
    userTodosData.value.push({
      id: userTodosData.value.length + 1,
      content,
      done: false,
      time,
    });
    save();
    updateProgressionData();    
  }

  function getProgressionPercentage() {
    return progressionPercentage.value;
  }

  function updateProgressionData() {
    totalTime.value = 0;
    doneTime.value = 0;

    let doneList = userTodosData.value.filter((todo) => todo.done);
    let todoList = userTodosData.value.filter((todo) => !todo.done);

    doneList.forEach((todo) => (doneTime.value += todo.time));
    todoList.forEach((todo) => (todoTime.value += todo.time));
    userTodosData.value.forEach((todo) => (totalTime.value += todo.time));

    if (totalTime.value != 0) {
      progressionPercentage.value = (doneTime.value * 100) / totalTime.value;
    } else {
      progressionPercentage.value = 100;
    }
    save();
  }

  function getTodos() {
    return userTodosData.value;
  }

  function getNextId() {
    return userTodosData.value.length + 1;
  }

  function deleteTodo(todoId: number) {
    userTodosData.value = userTodosData.value.filter(
      (todo) => todo.id != todoId,
    );
    save();
    updateProgressionData();
  }

  function setDoneTodo(todoId: number, state: boolean) {
    let targetTodo = userTodosData.value.find((todo) => todo.id == todoId);
    if (targetTodo) targetTodo.done = state;
    updateProgressionData();
    save();
  }

  function save() {
    localStorage.setItem("wimt-data", JSON.stringify(userTodosData.value));
  }

  function load() {
    const storedData = localStorage.getItem("wimt-data");
    if (storedData) {
      userTodosData.value = JSON.parse(storedData);
      updateProgressionData();
    }
  }

  watch(userTodosData.value, async () => {
    save();
    updateProgressionData();
  });

  return {
    userTodosData,
    addTodos,
    save,
    load,
    setDoneTodo,
    deleteTodo,
    createTodo,
    getNextId,
    getTodos,
    getProgressionPercentage,
    progressionPercentage,
    doneTime,
    todoTime,
    totalTime,
  };
});
