<script setup>

</script>

<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div class="page-header-image main_img" data-parallax="true" >
    </div>
    <div class="container">
      <div class="content-center brand">
        <h1 class="h1-seo">Enjoy Trip</h1>
        <h3>Journey Your Life</h3>

        <button class="btn btn-neutral btn-round" type="button" data-bs-toggle="modal"
          data-bs-target="#loginModal">Login</button>
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
  </div>
</template>

<style scoped>
.main_img{
  background-image:url("@/assets/img/header.jpg");
}
</style>