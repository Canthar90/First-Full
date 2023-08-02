<template>
  <header class="w-full text-sm text-yellow-950">
    <div class="fixed flex flex-nowrap left-0 top-0 h-16 w-full bg-slate-300">
      <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-xl px-2">
        Dawid Cieślak</router-link
      >

      <nav class="ml-12 h-full">
        <ul class="flex h-full list-none">
          <li v-for="item in menuItems" :key="item.text" class="ml-9 h-full first:ml-0">
            <router-link :to="item.url" class="flex h-full items-center py-2.5">{{
              item.text
            }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const menuItems = ref([
  { text: 'About me', url: '/' },
  { text: 'Experience', url: '/' },
  { text: 'Drinks', url: '/drinks' }
])
</script>
