<script setup>
import ResponsiveImage from '../components/ResponsiveImage.vue'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { club } from '../data/club.js'
import { events } from '../data/events.js'
import { getNextClass, formatClassDate } from '../utils/classes.js'
import { getEventUrl, eventDateIso, formatEventDate, formatTime, splitEvents } from '../utils/events.js'
import FirstClassCta from '../components/FirstClassCta.vue'
import PricingTable from '../components/PricingTable.vue'
import ClubDetails from '../components/ClubDetails.vue'
import BeginnerFaq from '../components/BeginnerFaq.vue'
import JoinSection from '../components/JoinSection.vue'

const now = ref(new Date())
const nextClass = computed(() => getNextClass(now.value))
const nextEvent = computed(() => splitEvents(events, now.value).upcoming[0])
const refreshTime = () => { now.value = new Date() }
let clockInterval
onMounted(() => {
  clockInterval = window.setInterval(refreshTime, 60_000)
  document.addEventListener('visibilitychange', refreshTime)
})
onUnmounted(() => {
  window.clearInterval(clockInterval)
  document.removeEventListener('visibilitychange', refreshTime)
})
const benefits = [
  { number: '01', title: 'Beginners welcome', text: 'No previous martial arts experience is necessary.' },
  { number: '02', title: 'Experienced instruction', text: 'Learn traditional aikido with guidance from an experienced instructor.' },
  { number: '03', title: 'Friendly community', text: 'Train with people who share an interest in learning and improving.' },
  { number: '04', title: 'Traditional Japanese aikido', text: 'Explore the principles and techniques of Aikikai aikido.' }
]
</script>

<template>
  <main id="main-content" tabindex="-1" class="home">
    <aside id="next-class" class="next-class-notice" :class="{ 'class-cancelled': nextClass.cancelled }" aria-label="Next class">
      <div class="container next-class-layout">
        <div aria-live="polite" aria-atomic="true">
          <span class="eyebrow">{{ nextClass.inProgress ? 'Class in progress' : 'Next class' }}</span>
          <p class="next-class-time"><time :datetime="nextClass.date">{{ formatClassDate(nextClass.date) }}</time><span>{{ formatTime(nextClass.start) }} – {{ formatTime(nextClass.end) }}</span></p>
          <p v-if="nextClass.cancelled" class="class-update">Class cancelled — no training on this date.</p>
          <p v-else-if="nextClass.changed" class="class-update">Time changed for this class.</p>
          <p v-if="nextClass.message" class="class-message">{{ nextClass.message }}</p>
          <p class="class-venue">{{ club.venue }}, {{ club.city }} · UK time</p>
        </div>
        <router-link to="/classes" class="text-link">Class details <span aria-hidden="true">↗</span></router-link>
      </div>
    </aside>
    <aside v-if="nextEvent" id="latest-event" class="next-event-banner" aria-label="Next upcoming event">
      <div class="container next-event-layout">
        <div class="next-event-date">
          <span class="eyebrow">Next upcoming event</span>
          <time :datetime="eventDateIso(nextEvent.date)">{{ formatEventDate(nextEvent.date) }}</time>
        </div>
        <div class="next-event-summary">
          <router-link :to="getEventUrl(nextEvent)" class="next-event-title">{{ nextEvent.title }}</router-link>
          <p>{{ nextEvent.location.name }} · {{ formatTime(nextEvent.time.start) }} – {{ formatTime(nextEvent.time.end) }}</p>
        </div>
        <router-link :to="getEventUrl(nextEvent)" class="btn btn-outline-dark">View event details <span aria-hidden="true">↗</span></router-link>
      </div>
    </aside>
    <section class="home-hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow"><span class="accent-line" aria-hidden="true"></span> Traditional aikido · Leicester</p>
          <h1>Learn Aikido<br>in Leicester<span class="accent">.</span></h1>
          <p class="lead">Traditional aikido. Friendly people.<br>A place to begin.</p>
          <p>Discover traditional Japanese aikido in a friendly and welcoming environment. Whether you’re completely new to martial arts or returning to training, develop movement, coordination and martial arts skills at your own pace.</p>
          <div class="action-row"><FirstClassCta /><a href="#what-is-aikido" class="text-link">Discover aikido <span aria-hidden="true">↓</span></a></div>
          <p class="hero-note">{{ club.day }} · {{ club.hours }} · First class free<br>{{ club.venue }}, {{ club.city }}</p>
        </div>
        <figure class="hero-photo">
          <ResponsiveImage src="/img/training-1280.webp" sizes="(min-width: 1200px) 960px, (min-width: 768px) 80vw, 100vw" alt="Leicester Aikikai students practising together on the mats at Aylestone Leisure Centre" priority />
          <figcaption><span>On the mat at Leicester Aikikai</span><span aria-hidden="true">レスター 合気会</span></figcaption>
        </figure>
      </div>
    </section>

    <section class="quick-info" aria-label="Class essentials">
      <div class="container info-grid">
        <div><span class="eyebrow">When</span><strong>{{ club.day }}, {{ club.hours }}</strong></div>
        <div><span class="eyebrow">Where</span><strong>{{ club.venue }}</strong><span>{{ club.street }}, {{ club.city }}, {{ club.postcode }}</span></div>
        <div><span class="eyebrow">New to aikido?</span><strong>Beginners welcome. First lesson free.</strong><router-link to="/classes">Full class information <span aria-hidden="true">↗</span></router-link></div>
      </div>
    </section>

    <section id="what-is-aikido" class="section-space">
      <div class="container split-layout">
        <div><p class="eyebrow">Movement. Balance. Connection.</p><h2>What is aikido?</h2></div>
        <div class="reading-width"><p class="lead">A traditional Japanese martial art, practised together.</p><p>Aikido focuses on movement, balance, timing and controlling an opponent without relying on physical strength alone.</p><p>There are no tournaments or winning matches. Students practise with partners, learning throws, joint-control techniques, safe falling and rolling skills, and the principles of effective movement.</p><router-link to="/beginners#what-is-aikido" class="text-link">Explore aikido as a beginner <span aria-hidden="true">↗</span></router-link></div>
      </div>
    </section>

    <section class="section-space warm-section">
      <div class="container"><p class="eyebrow">Since {{ club.established }}</p><h2>Why train with Leicester Aikikai?</h2>
        <div class="benefit-grid"><article v-for="item in benefits" :key="item.number"><span class="item-number" aria-hidden="true">{{ item.number }}</span><h3>{{ item.title }}</h3><p>{{ item.text }}</p></article></div>
      </div>
    </section>

    <section class="section-space">
      <div class="container split-layout"><div><p class="eyebrow">The first step is a simple one</p><h2>Your first aikido class</h2><p>You don’t need to know the terminology or own a training suit to get started.</p><router-link to="/beginners" class="text-link">Read our beginner guide <span aria-hidden="true">↗</span></router-link></div>
        <ol class="step-list"><li><h3>Check the details or get in touch</h3><p>See the Friday class information and contact us with any questions.</p></li><li><h3>Visit the dojo and meet the instructor</h3><p>Come to Aylestone Leisure Centre and let the instructor know you are new.</p></li><li><h3>Try aikido for yourself</h3><p>Your introductory class is free. See how you feel and decide whether you would like to continue.</p></li></ol>
      </div>
    </section>

    <section id="the-instructor" class="section-space dark-section">
      <div class="container split-layout instructor-feature">
        <ResponsiveImage src="/img/instructor-800.webp" alt="Antonios Pavlakis, Leicester Aikikai’s chief instructor" />
        <div><p class="eyebrow">Meet your instructor</p><h2>{{ club.instructor.name }}</h2><p class="qualification">{{ club.instructor.qualification }}</p><p>Founder and chief instructor of Leicester Aikikai, Antonios began aikido in 1997 and established the club in May 2013. His teaching brings together long-standing practice and a welcoming approach to learning.</p><router-link :to="club.instructor.profile" class="text-link">Meet our instructor <span aria-hidden="true">↗</span></router-link></div>
      </div>
    </section>

    <section id="costs" class="section-space"><div class="container"><div class="section-heading"><div><p class="eyebrow">Clear costs. A free first step.</p><h2>Classes & prices</h2></div><router-link to="/classes" class="text-link">Complete class information <span aria-hidden="true">↗</span></router-link></div><PricingTable /></div></section>

    <section id="location" class="section-space warm-section"><div class="container split-layout"><div><p class="eyebrow">Friday evenings in Leicester</p><h2>Find us</h2><ResponsiveImage src="/img/venue-960.webp" class="feature-image" alt="The mat space at Aylestone Leisure Centre" /></div><ClubDetails travel /></div></section>

    <section id="faq" class="section-space"><div class="container split-layout"><div><p class="eyebrow">Before you step on the mat</p><h2>A few common questions</h2><p>Something else on your mind? <router-link to="/contact">Ask us about getting started.</router-link></p></div><BeginnerFaq /></div></section>

    <section id="our-journey" class="section-space warm-section"><div class="container split-layout">
      <div><p class="eyebrow">Beyond the weekly class</p><h2>Part of a wider aikido community</h2><p>Since 2013, the club has brought people together for regular practice, visiting instructors and shared courses.</p><router-link to="/about">Our journey so far</router-link></div>
      <div class="content-panel"><h3>Learn together, on and off the mat</h3><p>Explore our courses and guest instructor visits, or read the latest dojo notes.</p><div class="action-row"><router-link to="/events" class="text-link">Explore club events</router-link><router-link to="/blog" class="text-link">Read dojo notes</router-link></div></div>
    </div></section>
    <JoinSection />
  </main>
</template>
