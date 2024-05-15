<script>
import { useTripStore } from "@/stores/trip";
import {availLocation} from "@/api/TripApi"
const store = useTripStore();

const title = ref("")
const sidos = ref([])
const sidoCode = ref(0)
const contentTypeId = ref(0)
onMounted(() => {
  availLocation(
    (response)=> sidos.value=response.data,
    ()=>console.log("시도 불러오기 실패")
  )
  
  // axios.get("http://localhost:8080/api/v1/trip/sido").then((response) => {
  //   sidos.value = response.data;
  // });
});
</script>

<template>
  <header class="h1 text-center mt-5">
    <div class="col-xl-12">
      지역별 관광 정보
    </div>
    <div class="d-inline-flex col-xl-10 justify-content-start">

      <form class="d-flex my-3" onsubmit="return false;" role="search">
        <select v-model="sidoCode" id="search-area" class="form-select me-2">
          <option value="0" selected>검색 할 지역 선택</option>
          <option v-for="sido in sidos" :key="sido.sidoCode" :value="sido.sidoCode">{{ sido.sidoName }}</option>
        </select>

        <select v-model="contentTypeId" id="search-content-id" class="form-select me-2">
          <option value="0" selected>관광지 유형</option>
          <option v-for="content in contentTypeMap" :key="content.id" :value="content.id">{{ content.type }}</option>
        </select>
        <input v-model="title" id="search-keyword" class="form-control me-2" type="search" placeholder="검색어"
          aria-label="검색어" />
        <button @click="tripSearch" id="btn-search" class="btn btn-outline-success" type="button">검색</button>
      </form>
    </div>
  </header>
</template>

<style></style>
