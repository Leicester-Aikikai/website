<template>
  <div id="app">
    <Announcements />
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Announcements from './components/Announcements.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Announcements
  }
}
</script>

<style>
/* Global styles are imported in main.js */
</style>
