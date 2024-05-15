<script setup>
import { RouterLink } from "vue-router"
import { useLoginStore } from "@/stores/login.js"
const store = useLoginStore()
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
      <div class="container"  >
        <div class="navbar-translate">
          <router-link :to="{name:'main'}" class="navbar-brand">
            Enjoy Trip{{ store.isLogin }}
          </router-link>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navigation"
          data-nav-image="./assets/img/blurred-image-1.jpg">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'test' }" class="nav-link">Test</router-link>
            </li>
            <button @click="store.accessLogin()" class="btn btn-neutral btn-round" type="button">login Test</button>
            <div class="navbar-nav" v-if="!store.isLogin">
              <li class="nav-item">
                <router-link :to="{ name: 'main' }" class="nav-link">회원가입</router-link>
              </li>
              <li class="nav-item">
                <a @click="store.openModal()" :to="{ name: 'main' }" class="nav-link">로그인</a>
              </li>
            </div>
            <div class="navbar-nav" v-else>
              <li class="nav-item">
                <router-link :to="{ name: 'trip' }" class="nav-link">여행지검색</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'main' }" class="nav-link">temp</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'main' }" class="nav-link">마이페이지</router-link>
              </li>
              <li class="nav-item">
                <router-link @click="store.logout()" :to="{ name: 'main' }" class="nav-link">로그아웃</router-link>
              </li>
            </div>


          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
</style>