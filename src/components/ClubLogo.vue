<script setup>
import { club } from '../data/club.js'

defineProps({ width: { type: Number, default: 128 }, loading: { type: String, default: 'eager' } })
</script>

<template>
  <picture class="club-logo" :style="{ width: `${width}px` }">
    <img :src="club.logo.image" :srcset="club.logo.srcset" :sizes="`${width}px`" :width="club.logo.width" :height="club.logo.height" :alt="`${club.name} logo`" :loading="loading">
  </picture>
</template>

<style scoped>
.club-logo { display: block; max-width: 100%; }
.club-logo img { display: block; width: 100%; height: auto; }
</style>
