<script setup>
import { club } from '../data/club.js'
defineProps({ travel: Boolean })
</script>

<template>
  <div class="venue-details">
    <p class="eyebrow">Find your way to the mat</p>
    <h3>{{ club.venue }}</h3>
    <address>{{ club.street }}<br>{{ club.city }}<br>{{ club.postcode }}</address>
    <p><strong>{{ club.day }}, {{ club.hours }}</strong></p>
    <a :href="club.directions" class="btn btn-outline-dark">Get directions <span aria-hidden="true">↗</span></a>
    <template v-if="travel">
      <p class="mt-4">The club’s published travel information lists free parking at the leisure centre and the nearby Aylestone Leisure Centre bus stop.</p>
      <a :href="club.venueUrl">Check the leisure centre’s facilities and travel information</a>
    </template>
  </div>
</template>
