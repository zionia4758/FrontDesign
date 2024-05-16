import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { login } from "@/api/authApi.js"
export const useLoginStore = defineStore("login", () => {
  const isLogin = ref(false);
  const loginModal = ref(false);
  function tryLogin(id, password) {
    console.log(id)
    console.log(password)
    login(id, password,
      () => { console.log('로그인 성공') },
      (emsg) => { console.log('로그인 실패'); console.log(emsg)}
    )
  }
  function accessLogin(){
    isLogin.value = true
    loginModal.value=true
  }
  function logout () {
    isLogin.value=false
  }
  function openModal() {
    loginModal.value=true
  }
  function closeModal() {
    loginModal.value=false
  }
  return { isLogin, loginModal, accessLogin, logout, openModal, closeModal,tryLogin };
});
