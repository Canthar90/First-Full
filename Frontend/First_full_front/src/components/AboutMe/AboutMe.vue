<template>
  <div class="text-orange-200 grid grid-cols-6 gap-2">
    <figure
      class="mt-8 p-8 bg-slate-800 rounded-xl col-start-1 col-span-6 border border-orange-300"
    >
      <h2 class="flex text-xl justify-center pb-4">Hi I'm Dawid Cieślak</h2>
      <div
        class="flex justify-left pt-4"
        v-for="element in aboutStore.cvData?.Summary"
        :key="element"
      >
        <p>{{ element }}</p>
      </div>
    </figure>
    <div class="col-span-6 grid grid-cols-6">
      <figure
        v-for="education in aboutStore.cvEducation"
        :key="education.Degree"
        class="mt-8 p-8 bg-slate-800 rounded-xl col-span-2 col-start-3 border border-orange-300"
      >
        <div class="grid grid-cols-3 gap-2">
          <h1 class="text-xl col-span-3">📖 Education:</h1>
          <div class="text-md col-span-2">
            <h2 class="flex">{{ education.University }}</h2>
          </div>
          <div>
            <p class="flex justify-start text-sm">{{ education.Year }}</p>
          </div>
          <div class="col-span-2 row-span-2">
            <p>{{ education['Thesis Topic'] }}</p>
          </div>
        </div>
      </figure>
    </div>

    <div class="col-span-6 grid grid-cols-6">
      <div class="col-start-3 col-span-2 mt-8 p-8 bg-slate-800 rounded-xl border border-orange-300">
        <h1 class="text-xl flex justify-center">⚙️ Experience:</h1>
      </div>
    </div>

    <div class="col-span-6 grid grid-cols-6 gap-4">
      <figure
        v-for="experience in aboutStore.cvExperience"
        :key="experience.Duration"
        class="mt-8 p-8 col-span-2 bg-slate-800 rounded-xl border border-orange-300"
      >
        <div class="grid gap-2">
          <h1 class="text-xl">{{ experience.Position }}:</h1>
          <p class="flex justify-end text-sm pb-4">{{ experience.Duration }}</p>
          <p class="">At: {{ experience.Company }}</p>
          <p class="pb-2">Responsibilites:</p>
          <ul class="list-disc list-inside">
            <li v-for="elem in experience.Responsibilities" :key="elem" class="pb-2">
              {{ elem }}
            </li>
          </ul>
        </div>
      </figure>
    </div>
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
