<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  buttonType: {
    type: String,
    required: true,
    default: 'primary',
    validator(value: string) {
      return ['primary', 'secondary'].includes(value)
    }
  }
})

const { buttonType } = toRefs(props)

const buttonClass = computed(() => {
  return {
    [buttonType.value]: true
  }
})
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply rounded border-0 bg-yellow-900 text-white hover:shadow-brown;
}

.secondary {
  @apply bg-transparent text-yellow-900 hover:bg-amber-700 hover:text-blue-950;
}
</style>
