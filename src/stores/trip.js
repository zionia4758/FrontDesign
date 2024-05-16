import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
export const useTripStore = defineStore("trip", () => {
  // const markers = ref([]);
  // const map = ref(kakao.maps.Map);
  const addTripId = ref(0);
  const contents = ref([]);
  const planIds = ref([]);
  // const numOfMarkers = computed(() => {
  //   return contents.value.data.length;
  // });
  let kakaomap = null;
const contentTypeMap = [
  { type: "관광지", id: 12 },
  { type: "문화시설", id: 14 },
  { type: "축제공연행사", id: 15 },
  { type: "여행코스", id: 25 },
  { type: "레포츠", id: 28 },
  { type: "숙박", id: 32 },
  { type: "쇼핑", id: 38 },
  { type: "음식점", id: 39 },
];
  const contentTypeMapper = {
    12: "관광지",
    14: "문화시설",
    15: "축제공연행사",
    25: "여행코스",
    28: "레포츠",
    32: "숙박",
    38: "쇼핑",
    39: "음식점"
}
  //추후 지울 더미 데이터
  const tempData = [
    {
      contentId: 125266,
      contentTypeId: 12,
      title: "국립 청태산자연휴양림",
      img: "http://tong.visitkorea.or.kr/cms/resource/21/2657021_image2_1.jpg",
      latitude: 37.52251412,
      longitude: 128.2919115,
    },
  ];
  for (let i = 0; i < 100; i++) {
    tempData[i + 1] = {
      contentId: tempData[i].contentId + 1,
      contentTypeId: tempData[i].contentTypeId,
      title: tempData[i].title,
      img: tempData[i].img,
      latitude: tempData[i].latitude + 0.01,
      longitude: tempData[i].longitude + 0.01,
    };
  }

  contents.value = tempData;
  planIds.value = [
    { planId: 66, planName: "경주여행" },
    { planId: 169, planName: "서울여행" },
    { planId: 626, planName: "전국여행" },
  ];
  //추후 지울 더미데이터 end

  const maxPageIdx = computed(() => {
    return Math.floor(contents.value.length / 5);
  });

  const pageIdx = ref(0);
  const filteredContents = computed(() => {
    return contents.value.slice(pageIdx.value * 5, pageIdx.value * 5 + 5);
  });
  const markers = computed(() => {
    let result = [];
    for (let i in filteredContents.value) {
      let content = filteredContents.value[i];
      let marker = { lat: content.latitude, lng: content.longitude };
      result.push(marker);
    }
    return result;
  });
  watch(markers, () => {
    let cnt = 0;
    let lat = 0;
    let lng = 0;

    for (let i in markers.value) {
      lat += markers.value[i].lat;
      lng += markers.value[i].lng;
      cnt++;
    }
    if (cnt > 0) {
      lat = lat / cnt;
      lng = lng / cnt;

      kakaomap.panTo(new kakao.maps.LatLng(lat, lng));
    }
  });
  function setMap(map) {
    kakaomap = map;
  }
  function getMap() {
    return kakaomap
  }
  return {
    contentTypeMapper,contentTypeMap,
    getMap,
    pageIdx,
    maxPageIdx,
    contents,
    filteredContents,
    markers,
    setMap,
    addTripId,
    planIds,
  };
});
