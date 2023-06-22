<template>
    <h1>Home</h1>
    <p>
       5.ders  32. dakikada kaldım
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dignissimos accusantium nam maxime doloremque ab consequatur culpa ipsa
      consectetur earum neque, in deserunt suscipit animi facilis, voluptatum adipisci odit hic!
    </p>
    <input v-model="userID" type="text" @keydown.enter="goToDetails" />
    <input v-model="name" type="text" @keydown.enter="goToDetails" />
  </template>
  
  <script>
  
  export default {
   data() {
    return {
      userID: null,
      name: null
    }
   },
    methods: {
    
      goToDetails(e) {
        
         console.log(e.target.value);
         alert(this.name);
         alert(this.userID);
        this.$router.push(`/detay/${e.target.value}`);
        this.$router.push({
          name: "DetailPage",
          params: {
            userID: e.target.value,
            name : "dogukan"
          },
          query: {
            type: "DetailAuth",
            user: "secsec"
          }
        });
      }
    }
  };
  </script>