<script setup>
import { club } from '../data/club.js'
import PageIntro from '../components/PageIntro.vue'
import FirstClassCta from '../components/FirstClassCta.vue'
import ClubDetails from '../components/ClubDetails.vue'
import PricingTable from '../components/PricingTable.vue'
import JoinSection from '../components/JoinSection.vue'
</script>

<template>
  <main id="main-content" tabindex="-1">
    <PageIntro eyebrow="Make time for practice" title="Classes & Prices" text="Traditional aikido every Friday evening in Leicester. Beginners and experienced students are welcome."><FirstClassCta /></PageIntro>
    <section class="section-space"><div class="container split-layout"><div><p class="eyebrow">Your weekly class</p><h2>{{ club.day }}<br>{{ club.hours }}</h2><p>Our regular class takes place at {{ club.venue }}. Your first introductory lesson is free, and advance booking is not required.</p><p>{{ club.clothing }}</p><p>{{ club.ageGuidance }}</p><router-link to="/beginners">Read the guide to your first class</router-link></div><ClubDetails travel /></div></section>
    <section class="section-space warm-section"><div class="container"><p class="eyebrow">If you choose to continue</p><h2>Training and association membership</h2><p>There are two separate fees: monthly club training and annual UK Aikikai association membership.</p><PricingTable /><div class="content-panel mt-4"><h3>Visiting from another club?</h3><p>Guests are welcome to visit and practise. The published guest fee is £{{ club.guestFee }} per session.</p><h3>Clothing, equipment and joining</h3><p>Ask the instructor for advice on an aikido suit (aikidogi), bokken, jo and tanto if you continue training. Contact us for concession eligibility, payment arrangements and membership details.</p><router-link to="/contact">Ask about classes and membership</router-link></div></div></section>
    <JoinSection />
  </main>
</template>
