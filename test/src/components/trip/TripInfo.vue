<script setup>
import TripInfoItem from "./TripInfoItem.vue"
// import PageNavigation from "@/components/common/PageNavigation.vue"

const { numOfContents, contents } = defineProps({
  numOfContents: { type: Number, default: 5 },
  contents: { type: Object }
})
const emit = defineEmits([
  'pageMove'
])
</script>

<template>
  <div v-for="content in contents" :key="content.id">
    <trip-info-item :attraction="content"></trip-info-item>
  </div>
  <!-- <page-navigation @pageMove="(val) => { emit('pageMove', val) }" :numOfContents="numOfContents"></page-navigation> -->
</template>

<style scoped></style>