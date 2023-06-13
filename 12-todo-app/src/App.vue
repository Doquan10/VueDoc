<template>
  <div class="container">
    <h3 class="text-center"> ToDo App</h3>
    <hr class="my-2">
    <AddSection @add-todo=addNewTodo />
    <TodoList @delete-item="deleteItem" :todoList = todoList></TodoList>
    <small class="d-flex justify-content-end green">
      {{ todoList.length }} adet görev vardır
    </small>
  </div>
</template>
<script>
import AddSection from "@/components/AddSection.vue";
import TodoList from "@/components/TodoList.vue";
export default {
  components: {
    AddSection,
    TodoList,
  },
  data() {
    return {
      todoList: [
        { id: 1, text: "A görevi" },
        { id: 2, text: "B görevi" },
        { id: 3, text: "C görevi" },
        { id: 4, text: "D görevi" },
        { id: 5, text: "E görevi" },
        { id: 6, text: "F görevi" },
      ],
    }
  },
  methods: {
    deleteItem(todoItem) {
      console.log(todoItem);
      this.todoList = this.todoList.filter((t) => t != todoItem);
    },
    addNewTodo(todo) {
      this.todoList.push({
        id: new Date().getTime(),
        text: todo
      });
      event.target.value = "";
    }
  }
}
</script>