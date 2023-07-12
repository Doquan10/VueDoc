<template>
    <AppHeader></AppHeader>
    
    <sideBar></sideBar>
    
</template>

<script>
import sideBar from "@/components/Account/Sidebar";

export default {
    components: {
        sideBar
    },
    data() {
        return {
            bookmarkList:[]
        };
    },
    created() {
    this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response => {
      console.log("bookmark_list_response :>> ", bookmark_list_response);
      this.bookmarkList = bookmark_list_response?.data || [];
    });
  }
 
  
};
</script>