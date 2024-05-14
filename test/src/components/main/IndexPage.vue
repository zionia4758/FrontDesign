<script setup>
import { useLoginStore } from "@/stores/login";
const store = useLoginStore()
const openLoginModal = () => {
  store.openModal()
}
</script>

<template>


    <div class="container" style="position:absolute; ">
      <div class="content-center brand">
        <h1 class="h1-seo">Enjoy Trip</h1>
        <h3></h3>

        <button @click="openLoginModal" v-if="!store.isLogin" class="btn btn-neutral btn-round" type="button" data-bs-toggle="modal"
          data-bs-target="#loginModal">Login</button>
        <div v-else class="btn btn-neutral btn-round" >WellCome!</div>
      </div>

      <h6 class="category category-absolute">Designed by
        <a href="#" target="_blank">
          <img src="./assets/img/invision-white-slim.png" class="invision-logo" />
        </a>. Coded by
        <a href="#" target="_blank">
          <img src="./assets/img/creative-tim-white-slim2.png" class="creative-tim-logo" />
        </a>.
      </h6>
    </div>
</template>

<style scoped>

</style>