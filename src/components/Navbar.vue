<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { navigation } from '../data/club.js'
import FirstClassCta from './FirstClassCta.vue'
import ClubLogo from './ClubLogo.vue'
const route = useRoute()
const open = ref(false)
const toggle = ref(null)
watch(() => route.fullPath, () => { open.value = false })
function active(path) {
  if (path === '/resources' && (route.path.startsWith('/syllabus') || route.path.startsWith('/blog'))) return true
  if (path === '/about' && route.path.startsWith('/instructors/')) return true
  return path === '/' ? route.path === '/' : route.path === path || route.path.startsWith(`${path}/`)
}
async function closeMenu() { open.value = false; await nextTick(); toggle.value?.focus() }
</script>

<template>
  <header class="site-header" @keydown.esc="closeMenu">
    <nav class="container site-nav" aria-label="Main navigation">
      <router-link to="/" class="club-brand" aria-label="Leicester Aikikai home"><ClubLogo /></router-link>
      <button ref="toggle" class="menu-toggle" type="button" :aria-expanded="open" aria-controls="primary-menu" @click="open = !open">{{ open ? 'Close' : 'Menu' }} <span aria-hidden="true">{{ open ? '×' : '☰' }}</span></button>
      <div id="primary-menu" class="primary-menu" :class="{ 'is-open': open }">
        <ul><li v-for="item in navigation" :key="item.path"><router-link :to="item.path" :class="{ 'is-active': active(item.path) }" :aria-current="route.path === item.path ? 'page' : undefined">{{ item.label }}</router-link></li></ul>
        <FirstClassCta compact />
      </div>
    </nav>
  </header>
</template>
