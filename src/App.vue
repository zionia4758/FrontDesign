<script setup>
import NavBar from "@/components/include/Navbar.vue"
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import TripAddModal from "@/components/trip/TripAddModal.vue";
const openLoginModal = ref(false)
</script>

<template>
  
  <nav-bar />
  
  <TripAddModal></TripAddModal>
  <body class="index-page sidebar-collapse ">
    <div class="page-header clear-filter d-flex justify-content-center" filter-color="orange" style="position:fixed; width: 100%;">
      <div class="page-header-image main_img" data-parallax="true">
      </div style="position:absolute;">
      <RouterView />
    </div>
  </body>
</template>

<style >
@import "./assets/css/bootstrap.min.css";
@import "./assets/css/now-ui-kit.css";
@import "./assets/demo/demo.css";
@import "https://fonts.googleapis.com/css?family=Montserrat:400,700,200";
@import "https://use.fontawesome.com/releases/v5.7.1/css/all.css";
.main_img {
  background-image: url("@/assets/img/header.jpg");
}
</style>
