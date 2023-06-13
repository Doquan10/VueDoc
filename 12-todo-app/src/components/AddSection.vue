<template>
<label for="todoText"></label>
<input v-model="todoText" @keydown.enter="addNewTodo" type="text" id="todoText" placeholder="Yeni madde ekle"/>
</template>

<script>
export default{
  methods: {
    addNewTodo(){
      this.$emit("add-todo", this.todoText);
      this.todoText = null;
    }
  }
};
</script>