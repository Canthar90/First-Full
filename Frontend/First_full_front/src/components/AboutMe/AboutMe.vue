<template>
  <div class="text-orange-200 grid grid-cols-6 gap-2">
    <figure
      class="mt-8 p-8 bg-slate-800 rounded-xl col-start-1 col-span-6 border border-orange-300"
    >
      <h2 class="flex text-xl justify-center pb-8">Hi I'm Dawid Cieślak</h2>
      <div class="grid grid-cols-6">
        <div class="row-span-6 col-span-2 grid">
          <img
            class="flex justify-center justify-items-center rounded-xl object-scale-down w-[80%]"
            alt="Profile image"
            :src="aboutStore.cvData?.img"
          />
        </div>

        <div
          class="col-start-3 col-span-4 flex justify-left pt-4"
          v-for="element in aboutStore.cvData?.Summary"
          :key="element"
        >
          <p>{{ element }}</p>
        </div>
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

    <div class="col-span-6 grid grid-cols-6">
      <div class="col-start-3 col-span-2 mt-8 p-8 bg-slate-800 rounded-xl border border-orange-300">
        <h1 class="text-xl flex justify-center">🛠️ Skills</h1>
      </div>
    </div>

    <div class="col-span-6 grid grid-cols-8 gap-2">
      <figure
        v-for="skill in aboutStore.cvSkills"
        :key="skill.Skill"
        class="mt-8 p-8 col-span-2 bg-slate-800 rounded-xl border border-orange-300"
      >
        <div class="grid gap-2">
          <h1 class="text-md">{{ skill.Skill }}</h1>

          <div class="w-full bg-slate-900 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              class="bg-yellow-400 h-2.5 rounded-full"
              :style="{ width: skill.Percentage }"
            ></div>
          </div>
        </div>
      </figure>
    </div>

    <div class="col-span-6 grid gap-4">
      <figure class="mt-8 p-8 bg-slate-800 rounded-xl border border-orange-300 flex flex-col">
        <h1 class="text-xl flex justify-center">🎲 Hobbies</h1>
        <p class="flex justify-center pt-8">{{ aboutStore.cvData?.Hobbies }}</p>
      </figure>
    </div>

    <div class="col-span-6 grid grid-cols-6 gap-2">
      <figure class="mt-8 p-8 col-span-6 bg-slate-800 rounded-xl border border-orange-300">
        <div class="grid grid-cols-1 grid-rows-2 gap-4">
          <h1 class="text-xl flex justify-center">Reach me up on:</h1>
          <div class="flex flex-nowrap flex-full justify-center">
            <font-awesome-icon
              class="text-xl cursor-pointer"
              :icon="['fab', 'linkedin']"
              role="button"
              @click="goToLink(aboutStore.cvData?.LinkedIn)"
            />
            <font-awesome-icon
              class="text-xl cursor-poiter px-4"
              :icon="['fab', 'github']"
              role="button"
              @click="goToLink(aboutStore.cvData?.Github)"
            />
            <div class="flex flex-col justify-center">
              <font-awesome-icon class="text-xl" :icon="['fa', 'phone']" />
              <p class="text-xs">{{ aboutStore.cvContactInfo?.Phone }}</p>
            </div>
          </div>
        </div>
      </figure>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useAboutStore } from '@/stores/about'

const aboutStore = useAboutStore()

const goToLink = (link: string | undefined) => {
  window.open(link, '_blank')
}

onMounted(() => {
  if (!aboutStore.cvDataFetched) {
    aboutStore.GET_CV_DATA()
  }
})
</script>
