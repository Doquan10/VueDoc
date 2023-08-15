<template>
  <div class="grid-container">
    <header class="header"></header>
    <aside class="sidebar"><Sidebar></Sidebar></aside>
    <main class="main"></main>
    <footer class="footer"></footer>
  </div>
  <router-view></router-view>

</template>




<script>
import Sidebar from './components/Sidebar.vue'
 export default {
   components: {
     Sidebar
   },
  

 };
 </script>