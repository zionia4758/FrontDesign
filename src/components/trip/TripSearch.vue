<script setup lang="ts">
import { ref, computed, watch } from "vue"
import TripSearchBar from "./TripSearchBar.vue";
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
import TripInfo from "./TripInfo.vue"
const args = {
  lat: 37.566826,
  lng: 126.9786567
};
const markers = ref([])
const map = ref(kakao.maps.Map)
const contents = ref({ data: [] })
const pageIdx = ref(0);
const filteredContents = computed(() => {
  return contents.value.data.slice(pageIdx.value * 5, pageIdx * 5 + 5)
})
const showContents = () => {
  let newMarkers = []
  let id = 0
  let sumOfLat = 0
  let sumOfLng = 0
  let i = pageIdx.value
  for (let idx = i * 5; idx < i * 5 + 5; idx++) {

    if (!contents.value.data[idx]) {
      break
    }
    const marker = contents.value.data[idx]
    newMarkers.push({ id: id++, lat: marker.latitude, lng: marker.longitude })
    sumOfLat += marker.latitude
    sumOfLng += marker.longitude
  }
  markers.value = newMarkers

  if (id > 0) {
    //마커들 중심으로 지도 이동
    sumOfLat /= id
    sumOfLng /= id
    map.value.panTo(new kakao.maps.LatLng(sumOfLat, sumOfLng))
  }
}
const changePage = (idx) => {
  pageIdx.value = idx;
  showContents()
}

const searchEmit = (data) => {
  const newMarkers = []
  contents.value.data = data
  pageIdx.value = 0
  console.log(pageIdx)
  showContents()
}

const onLoadKakaoMap = (mapRef: kakao.maps.Map) => {
  map.value = mapRef;
}

const numOfMarkers = computed(() => {
  return contents.value.data.length
})

</script>

<template>
  <TripSearchBar @searchTrip="(data) => searchEmit(data)" />
  <div class="row justify-content-evenly">
    <KakaoMap class="col-5" :level="9" :lat="args.lat" :lng="args.lng" :draggable="true"
      @onLoadKakaoMap="onLoadKakaoMap">
      <KakaoMapMarker v-for="marker in markers" :key="marker" :lat="marker.lat" :lng="marker.lng" />
    </KakaoMap>
    <div class="col-5 d-flex flex-column">
      <div class="container"></div>
      <trip-info @pageMove="(val) => changePage(val)" :contents="contents.data.slice(pageIdx * 5, pageIdx * 5 + 5)"
        :numOfContents="numOfMarkers"></trip-info>
    </div>
  </div>
</template>

<style scoped></style>