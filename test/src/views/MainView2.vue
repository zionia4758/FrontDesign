<script setup>
// import { RouterView } from 'vue'
import IndexPage from "@/components/main/IndexPage.vue"
import LoginModal from "@/components/user/LoginModal.vue"
import { useLoginStore } from "@/stores/login";
import { ref } from 'vue'
const openLoginModal = ref(false)
const loginStore = useLoginStore();
</script>

<template>


    <index-page />
    <div class="page-header-image main_img" data-parallax="true">
    </div style="position:absolute;">
    <login-modal v-if="loginStore.loginModal"/>
  
    <body class="index-page sidebar-collapse">
  
      <!-- <index-page @openLoginModal="()=>{openLoginModal=true; console.log(1)}"/>
      
      <login-modal v-if="openLoginModal"></login-modal> -->
      <!-- <router-view/> -->
    </body>

</template>

<style scoped>
.main_img {
  background-image: url("@/assets/img/header.jpg");
}
</style>