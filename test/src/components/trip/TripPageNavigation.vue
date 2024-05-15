<script setup>
import { useTripStore } from "@/stores/trip.js";
import { ref } from 'vue';

const store = useTripStore();

</script>

<template>
  <div class="container col-sm-6 bg-white">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">
            <i class="fa fa-angle-double-left" aria-hidden="true"></i>
          </span>
        </a>
      </li>
      <li v-show="store.pageIdx >= 2" class="page-item">
        <a class="page-link" href="#">{{ store.pageIdx-2 }}</a>
      </li>
      <li v-show="store.pageIdx >= 1" class="page-item">
        <a class="page-link" href="#">{{ store.pageIdx-1 }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">{{ store.pageIdx }}</a>
      </li>
      <li v-show="store.maxPageIdx > store.pageIdx" class="page-item">
        <a class="page-link" href="#">{{ store.pageIdx+1 }}</a>
      </li>
      <li v-show="store.maxPageIdx > store.pageIdx + 1" class="page-item">
        <a class="page-link" href="#">{{ store.pageIdx+2 }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style></style>