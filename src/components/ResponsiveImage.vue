<script setup>
import { computed } from 'vue'
import { getImage } from '../utils/images.js'
const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  sizes: { type: String, default: '(min-width: 1200px) 600px, (min-width: 768px) 50vw, 100vw' },
  priority: Boolean
})
const image = computed(() => getImage(props.src))
</script>

<template>
  <img :src="image.src" :srcset="image.srcset" :sizes="image.srcset ? sizes : undefined" :width="image.width" :height="image.height" :alt="alt" :loading="priority ? 'eager' : 'lazy'" :fetchpriority="priority ? 'high' : undefined" decoding="async">
</template>
