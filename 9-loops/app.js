const app = Vue.createApp({
    data() {

        return {
            // todoList: ["Todo 1", "Todo 2", "Todo 3"],
            todoList: [
                { id: 1, text: "Vue Ders 1", completed: false },
                { id: 2, text: "Vue Ders 2", completed: false },
                { id: 3, text: "Vue Ders 3", completed: false },
                { id: 4, text: "Vue Ders 4", completed: false },
                { id: 5, text: "Vue Ders 5", completed: false },
                { id: 6, text: "Vue Ders 6", completed: false },
                { id: 7, text: "Vue Ders 7", completed: false },
            ]
        }
    },



    methods: {

        addTodo(event) {
            console.log("jkas");

            this.todoList.push({
                id: new Date().getTime(),
                text: event.target.value,
                completed: false,
            });
            event.target.value = "";
        },
        removeItem(todoItem) {
            //console.log(todoItem);

            this.todoList = this.todoList.filter(todo => todo != todoItem);
        }

    },
    computed: {
        completedItemCount() {
            return this.todoList.filter((t) => t.completed).length;
        },
        unCompletedItemCount() {
            return this.todoList.filter((t) => !t.completed).length;
        },

    },
    watch: {

    }
});
app.mount("#app");