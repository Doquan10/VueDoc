<template>
  <div class="container">
    <UserSection></UserSection>
  </div>
</template>

<script>
import UserSection from "@/components/UserSection.vue";
export default {
  components: {
    UserSection,
  },
  data() {
    return {
      provideData: {
        userList: ["Doğukan", "Barış", "Seçil", "Zeynep"],
      },
    };
  },
  methods :{
newItem(item){
  this.provideData.userList.push(item)
}
  },
  provide() {
    return {
      newItem: this.newItem,
      userList: this.provideData.userList,
    };
  },
};
</script>
