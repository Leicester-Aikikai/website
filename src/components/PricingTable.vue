<script setup>
import { club } from '../data/club.js'
</script>

<template>
  <div class="pricing-grid">
    <article v-for="fee in club.fees" :key="fee.label" class="price-panel">
      <h3>{{ fee.label }}</h3>
      <p class="price">£{{ fee.monthly }}<span> / month</span></p>
      <p class="mb-0">Club training membership</p>
      <hr>
      <p class="mb-0"><strong>£{{ fee.annual }} / year</strong><br>Separate annual UK Aikikai membership<br>Includes liability insurance</p>
    </article>
  </div>
  <p class="mt-4">Your first introductory lesson is free. Annual UK Aikikai membership is separate from monthly club fees and includes liability insurance. Ask the instructor about registration, payment and cover before continuing.</p>
  <p><a :href="club.membershipUrl">Read the UK Aikikai membership information</a></p>
</template>
