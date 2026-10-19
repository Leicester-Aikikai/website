<script setup>
import { club, navigation } from '../data/club.js'
</script>

<template>
  <footer class="site-footer">
    <div class="container"><div class="footer-grid"><div><router-link to="/" class="footer-brand">Leicester Aikikai<span class="accent">.</span></router-link><p>Traditional Japanese aikido.<br>A friendly Leicester club since 2013.</p><p>{{ club.day }}, {{ club.hours }}<br>{{ club.venue }}<br>{{ club.street }}, {{ club.city }}, {{ club.postcode }}</p><router-link to="/contact">Contact us</router-link></div><nav aria-label="Footer navigation"><ul class="plain-list"><li v-for="item in navigation" :key="item.path"><router-link :to="item.path">{{ item.label }}</router-link></li><li><router-link to="/syllabus">Grading syllabus</router-link></li><li><router-link to="/blog">Blog & dojo notes</router-link></li></ul></nav><div><p class="eyebrow">Our wider community</p><p><a href="https://ukaikikai.org.uk/club/leicester-aikikai/">United Kingdom Aikikai</a></p><nav aria-label="Social media"><ul class="plain-list"><li v-for="social in club.social" :key="social.label"><a :href="social.url">{{ social.label }}</a></li></ul></nav></div></div><div class="footer-bottom"><span>© {{ new Date().getFullYear() }} Leicester Aikikai</span><span lang="ja">レスター 合気会</span></div></div>
  </footer>
</template>
