const todoText = document.querySelector("#todoText");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

const date = new Date();

addBtn.addEventListener("click",() => {
//alert(todoText.value);

const listItem = document.createElement("li");
listItem.textContent = todoText.value;
todoList.append(listItem);

})