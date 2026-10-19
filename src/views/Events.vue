<script setup>
import ResponsiveImage from '../components/ResponsiveImage.vue'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { events } from '../data/events.js'
import { getEventUrl, eventDateIso, formatEventDate, formatTime, splitEvents, eventCalendar, createSlug } from '../utils/events.js'
import { SITE_URL } from '../utils/seo.js'
import PageIntro from '../components/PageIntro.vue'
import EventCard from '../components/EventCard.vue'

const route = useRoute()
const visiblePast = ref(6)
const singleEvent = computed(() => events.find(event => getEventUrl(event) === route.path))
const grouped = computed(() => splitEvents(events))
const isPast = computed(() => singleEvent.value && grouped.value.past.includes(singleEvent.value))
function downloadCalendar(event) {
  const url = URL.createObjectURL(new Blob([eventCalendar(event, SITE_URL)], { type: 'text/calendar;charset=utf-8' }))
  const link = document.createElement('a')
  link.href = url
  link.download = `${createSlug(event.title)}.ics`
  link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
</script>

<template>
  <main id="main-content" tabindex="-1">
    <PageIntro :eyebrow="singleEvent ? (isPast ? 'From the archive' : 'Upcoming course') : 'Practice. Share. Learn.'" :title="singleEvent ? singleEvent.title : 'Aikido Events & Courses'" :text="singleEvent ? singleEvent.description : 'Shared practice, visiting instructors and courses with the wider aikido community. Find the next event or explore the archive.'">
      <router-link v-if="singleEvent" to="/events" class="text-link">← All events</router-link>
    </PageIntro>
    <section v-if="singleEvent" class="section-space"><div class="container split-layout">
      <div><p v-if="isPast" class="archive-notice">This event has already taken place. Details below are kept for reference.</p><h2>Event details</h2><dl class="event-facts"><dt>Date</dt><dd><time :datetime="eventDateIso(singleEvent.date)">{{ formatEventDate(singleEvent.date) }}</time></dd><dt>Time</dt><dd>{{ formatTime(singleEvent.time.start) }} – {{ formatTime(singleEvent.time.end) }}</dd><dt>Location</dt><dd><strong>{{ singleEvent.location.name }}</strong><br>{{ singleEvent.location.address }}</dd><template v-if="singleEvent.price"><dt>Price</dt><dd>{{ singleEvent.price }}</dd></template></dl>
        <h3>Instructors</h3><ul><li v-for="(person, index) in singleEvent.instructors" :key="index"><template v-if="typeof person === 'string'">{{ person }}</template><router-link v-else-if="person.profile?.startsWith('/')" :to="person.profile">{{ person.name }}</router-link><a v-else-if="person.profile" :href="person.profile">{{ person.name }}</a><span v-else>{{ person.name }}</span></li></ul>
        <button v-if="!isPast" type="button" class="btn btn-primary" @click="downloadCalendar(singleEvent)">Add to calendar</button>
        <nav class="action-row mt-4" aria-label="Share this event"><a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL + getEventUrl(singleEvent))}`" target="_blank" rel="noopener noreferrer">Share on Facebook</a><a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL + getEventUrl(singleEvent))}`" target="_blank" rel="noopener noreferrer">Share on LinkedIn</a></nav>
      </div><ResponsiveImage v-if="singleEvent.image" :src="singleEvent.image" :alt="`${singleEvent.title} event poster or photograph`" class="event-detail-image" priority />
    </div></section>
    <template v-else>
      <section id="upcoming-events" class="section-space"><div class="container"><div class="section-heading"><h2>Upcoming events</h2><a href="#past-events">Explore past events ↓</a></div><div v-if="grouped.upcoming.length" class="event-grid"><EventCard v-for="event in grouped.upcoming" :key="getEventUrl(event)" :event="event" /></div><div v-else class="content-panel"><h3>No upcoming events currently scheduled</h3><p>Our regular Friday practice continues. <router-link to="/classes">See weekly class details</router-link> or browse past courses below.</p></div></div></section>
      <section id="past-events" class="section-space warm-section"><div class="container"><p class="eyebrow">From the archive</p><h2>Past events</h2><p>Previous courses and visiting instructors, with their original event details.</p><div class="event-grid"><EventCard v-for="event in grouped.past.slice(0, visiblePast)" :key="getEventUrl(event)" :event="event" /></div><button v-if="visiblePast < grouped.past.length" class="btn btn-outline-dark mt-4" @click="visiblePast += 6">Show more past events</button></div></section>
    </template>
  </main>
</template>
