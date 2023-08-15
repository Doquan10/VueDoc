<template>
    <div class="sidebar">
      <ul>
        <li v-for="item in menuItems" :key="item.id" @click="handleItemClick(item.route)">
          {{ item.label }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        menuItems: [
          { id: 1, label: 'Anasayfa', route: '/' },
          { id: 2, label: 'Hakkımızda', route: '/About'},
          // Diğer menü öğelerini buraya ekleyebilirsiniz
        ],
      };
    },
    methods: {
      handleItemClick(route) {
        this.$router.push(route);
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    background-color: #f0f0f0;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 10px;
    cursor: pointer;
  }
  
  li:hover {
    background-color: #e0e0e0;
  }
  </style>
  