<script setup>
import { useTripStore } from "@/stores/trip";
const store = useTripStore()
console.log(store.planIds);

</script>

<template>
  <div class="modal fade modal-mini modal-primary" id="myModal1" tabindex="1050" role="dialog"
    aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-body">
          <p><select v-model="sidoCode" id="search-area" class="form-select me-2">
              <option value="0" selected></option>
              <option v-for="plan in store.planIds" :key="plan.planId" :value="plan.planId">{{ plan.planName }}</option>
            </select>에 해당 여행지를 추가하시겠습니까?</p>
        </div>
        <div tabindex="-1" class="modal-footer">
          <button type="button" class="btn btn-link btn-neutral" data-bs-dismiss="modal">아니오</button>
          <button type="button" class="btn btn-link btn-neutral" data-bs-dismiss="modal">네</button>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">123</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>