<script setup>
import { club, enquiryUrl } from '../data/club.js'
import PageIntro from '../components/PageIntro.vue'
import ClubDetails from '../components/ClubDetails.vue'
</script>

<template>
  <main id="main-content" tabindex="-1">
    <PageIntro eyebrow="We’re happy to help" title="Contact Leicester Aikikai" text="Thinking about your first class, returning to aikido or visiting from another dojo? Get in touch with the club." />
    <section class="section-space"><div class="container split-layout"><div><h2>Ask about your first class</h2><p>Your first introductory lesson is free. You can come along on a Friday without advance booking, or email first with any questions.</p><a :href="enquiryUrl" class="btn btn-primary btn-lg">Email Leicester Aikikai <span aria-hidden="true">↗</span></a><p class="mt-3"><a :href="`mailto:${club.email}`">{{ club.email }}</a></p><p>You can tell us your name, the Friday you are considering and anything you would like to ask. Please enquire before bringing a child so we can confirm eligibility and availability.</p><p class="small text-muted">The email link opens your email app. You review and send the message there; this website does not submit a form or reserve a class. Your email provider handles the message. Include only the information needed for your enquiry.</p><p><router-link to="/beginners#first-class">Read how to attend your first class</router-link></p><h3 class="mt-4">Follow the club</h3><ul class="plain-list"><li v-for="social in club.social" :key="social.label"><a :href="social.url">{{ social.label }}</a></li></ul></div><ClubDetails travel /></div></section>
  </main>
</template>
