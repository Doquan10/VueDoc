<template>
  <ul>


    <li v-for="todo in todoList" :key="todo.id" class="d-flex justify-content-between align-items-center">
      <span> {{ todo.text }}</span>
      <button @click="deleteItem(todo)" class="sm red">Sil</button>
    </li>


  </ul>
</template>
<script>
export default {
  props: ["todoList"],

  methods: {
    deleteItem(item){
      this.$emit("delete-item", item);
    
    }
  }
}


</script>