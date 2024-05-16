<script setup lang="ts">
import { onMounted } from 'vue';
import { useTripStore } from "@/stores/trip";
defineProps({
  attraction: Object
})
const store = useTripStore()
const addToPlan = (contentId) => {
  store.addTripId = contentId

  //추후 plan list 추가

}
const openInfo = (attraction) => {
  console.log(123);
  var iwContent = `<div class='row '>
      <img src="${attraction.img}" width="100px" height="100px">
      <div class="text-black  d-flex">${attraction.title}</div>
      <div class="text-black d-flex">${ store.contentTypeMapper[attraction.contentTypeId]}</div>
    </div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(attraction.latitude, attraction.longitude), //인포윈도우 표시 위치입니다
    iwRemoveable = true; 
  var infowindow = new kakao.maps.InfoWindow({
    map: store.getMap(), // 인포윈도우가 표시될 지도
    position: iwPosition,
    content: iwContent,
    removable: iwRemoveable
  });
  // store.kakaomap.panTo(iwPosition)
  
  
  
}

</script>

<template>
  <tr class="text-center d-flex">
    <th scope="row"></th>
    <td>
      <button @click="addToPlan(attraction.contentId)" class="btn btn-warning" data-bs-toggle="modal"
        data-bs-target="#myModal1">
        추가
      </button>

    </td>
    <td><img :src="attraction.img" width="100px" height="100px" /></td>
    <td class="text-start">

      <a href="#" @click="openInfo(attraction)" class=" link-dark">
        {{ attraction.title }}
      </a>
      <div>123</div>
    </td>
  </tr>




</template>

<style scoped></style>