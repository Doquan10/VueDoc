import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import Sidebar from "@/components/Sidebar.vue"


import router from './router'
const app = createApp(App);
app.component("Sidebar",Sidebar);
app.use(router);
app.use();
app.mount("#app");

