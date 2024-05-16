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
    <login-modal v-if="loginStore.loginModal"/>
  
    <body class="index-page sidebar-collapse">
  
    </body>

</template>

<style scoped>
.main_img {
  background-image: url("@/assets/img/header.jpg");
}
</style>