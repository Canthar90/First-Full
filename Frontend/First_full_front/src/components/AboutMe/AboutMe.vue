<template>
  <div class="text-orange-200 grid grid-cols-4">
    <figure class="mt-8 p-8 bg-slate-800 rounded-xl col-start-1 col-span-4">
      <h2 class="flex text-xl justify-center pb-4">Hi I'm Dawid Cieślak</h2>
      <div
        class="flex justify-left pt-4"
        v-for="element in aboutStore.cvData?.Summary"
        :key="element"
      >
        <p>{{ element }}</p>
      </div>
    </figure>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useAboutStore } from '@/stores/about'

const aboutStore = useAboutStore()

onMounted(() => {
  if (!aboutStore.cvDataFetched) {
    aboutStore.GET_CV_DATA()
  }
})
</script>
