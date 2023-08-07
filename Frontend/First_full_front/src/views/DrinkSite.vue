<template>
  <body class="px-2">
    <div class="pt-16 grid grid-cols-10 justify-center">
      <figure
        class="mt-8 bg-slate-800 rounded-xl md:p-8 col-start-4 col-span-4 justify-center gap-x-6"
      >
        <random-drink></random-drink>
      </figure>
    </div>
  </body>
</template>

<script lang="ts" setup>
import RandomDrink from '@/components/RandomDrink/RandomDrink.vue'
</script>
