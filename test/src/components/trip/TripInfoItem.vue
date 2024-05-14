<script setup>
defineProps({
  attraction: Object
})
</script>

<template>
  <tr class="text-center">
    <th scope="row">{{ attraction.id }}</th>
    <td><img :src="attraction.img" width="100px" height="100px" /></td>
    <td class="text-start">
      <a href="#" class=" link-dark">
        {{ attraction.title }}
      </a>
    </td>
  </tr>
</template>

<style scoped></style>