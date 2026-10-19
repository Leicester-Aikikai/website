<script setup>
import ResponsiveImage from './ResponsiveImage.vue'
import { getEventUrl, eventDateIso, formatEventDate, formatTime, instructorNames } from '../utils/events.js'
defineProps({ event: Object })
</script>

<template>
  <article class="event-card">
    <router-link v-if="event.image" :to="getEventUrl(event)" class="event-image-link" tabindex="-1" aria-hidden="true"><ResponsiveImage :src="event.image" alt="" /></router-link>
    <div class="event-card-body"><p class="eyebrow"><time :datetime="eventDateIso(event.date)">{{ formatEventDate(event.date) }}</time></p><h3><router-link :to="getEventUrl(event)">{{ event.title }}</router-link></h3><p>{{ event.description }}</p><p><strong>{{ event.location.name }}</strong><br>{{ formatTime(event.time.start) }} – {{ formatTime(event.time.end) }}</p><p>{{ instructorNames(event).join(', ') }}</p><p v-if="event.price">{{ event.price }}</p><router-link :to="getEventUrl(event)" class="text-link">View event details <span aria-hidden="true">↗</span></router-link></div>
  </article>
</template>
