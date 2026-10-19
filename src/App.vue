<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Announcements from './components/Announcements.vue'
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <Navbar />
  <Announcements />
  <router-view :key="$route.path" />
  <Footer />
</template>
