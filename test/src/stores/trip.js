import { ref, computed } from "vue";
import { defineStore } from "pinia";
export const useTripStore = defineStore("trip", () => {
  // const markers = ref([]);
  // const map = ref(kakao.maps.Map);
  // const contents = ref({ data: [] });
  const pageIdx = ref(3);
  const maxPageIdx = ref(3);
  // const numOfMarkers = computed(() => {
  //   return contents.value.data.length;
  // });
  return { pageIdx,maxPageIdx };
});
