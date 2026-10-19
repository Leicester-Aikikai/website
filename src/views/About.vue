<script setup>
import ResponsiveImage from '../components/ResponsiveImage.vue'
import { club } from '../data/club.js'
import PageIntro from '../components/PageIntro.vue'
import JoinSection from '../components/JoinSection.vue'
</script>

<template>
  <main id="main-content" tabindex="-1">
    <PageIntro eyebrow="Our journey so far" title="Traditional aikido. A welcoming Leicester club." text="Leicester Aikikai began in May 2013 with a simple aim: to welcome people to learn and train together in a friendly environment." />
    <section class="section-space"><div class="container split-layout"><div><h2>A shared practice since 2013</h2><p>We teach traditional Aikikai aikido. Our club brings beginners and experienced practitioners together, with space to learn, ask questions and develop through regular practice.</p><p>Over the years we have welcomed visiting instructors from UK Aikikai, British Aikikai, British Birankai and the British Aikido Federation.</p><p>Explore <router-link to="/events">our courses and guest instructor visits</router-link> and <router-link to="/blog">dojo notes on the blog</router-link>.</p></div><figure><ResponsiveImage src="/img/community-1280.webp" class="feature-image" alt="Leicester Aikikai and visiting students together at the March 2024 joint course" /><figcaption>Our community at a joint course in March 2024.</figcaption></figure></div></section>
    <section class="section-space warm-section"><div class="container split-layout"><div><p class="eyebrow">Chief instructor and founder</p><h2>{{ club.instructor.name }}</h2><p class="qualification">{{ club.instructor.qualification }}</p><p>Antonios, also known as Antonis, began training in 1997 at De Montfort University Aikido Club under Dave Lenton sensei.</p><p>He qualified at Coaching Level 1 in 2009 and became an assistant instructor at DMU before founding Leicester Aikikai in May 2013.</p><p>He received the Fukushidoin teaching title in 2018 and passed his 4th Dan (Yondan) examination in 2023. Fukushidoin is a teaching title; his published profile records authorisation to grade students up to 1st kyu.</p><router-link :to="club.instructor.profile" class="text-link">Read the full instructor profile <span aria-hidden="true">↗</span></router-link></div><ResponsiveImage src="/img/instructor-800.webp" class="feature-image" alt="Antonios Pavlakis, founder of Leicester Aikikai" /></div></section>
    <section class="section-space"><div class="container split-layout"><h2>Part of the Aikikai community</h2><div><p>Leicester Aikikai is a full member of <a href="https://ukaikikai.org.uk/">United Kingdom Aikikai (UKA)</a>, which is part of the <a href="https://jointaikikaicouncil.co.uk/">Joint Aikikai Council (JAC)</a>.</p><p>UKA is recognised by the Aikikai Foundation in Japan. The club’s kyu grades are recognised nationally and dan grades internationally.</p><p>Our <router-link to="/resources">student resources</router-link> preserve the club’s published body-art and weapons syllabus, with the original grading pages available for reference.</p></div></div></section>
    <JoinSection />
  </main>
</template>
