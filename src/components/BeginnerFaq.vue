<script setup>
import { beginnerFaqs } from '../data/club.js'
</script>

<template>
  <div class="faq-list">
    <details v-for="faq in beginnerFaqs" :key="faq.question">
      <summary>{{ faq.question }}</summary>
      <p>{{ faq.answer }}</p>
    </details>
  </div>
</template>
