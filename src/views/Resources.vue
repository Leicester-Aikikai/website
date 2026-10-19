<script setup>
import PageIntro from '../components/PageIntro.vue'
const resources = [
  { title: 'Beginner fundamentals', text: 'Start with the beginner guide and the official UKA welcome booklet.', links: [{ label: 'Your first class', to: '/beginners' }, { label: 'Welcome to Aikido booklet (PDF)', href: '/docs/welcome-to-aikido-uka-booklet.pdf' }] },
  { title: 'Grading syllabus', text: 'The club’s published grading material, preserved in full.', links: [{ label: 'Complete grading syllabus', to: '/syllabus#grading-syllabus' }, ...['6th', '5th', '4th', '3rd'].map(grade => ({ label: `${grade} kyu syllabus`, to: `/syllabus/${grade}-kyu` }))] },
  { title: 'Weapons training', text: 'Explore the existing bokken and jo syllabus, following the teachings of Kazuo Chiba shihan and Morihiro Saito shihan.', links: [{ label: 'Bokken — wooden sword', to: '/syllabus#bokken-syllabus' }, { label: 'Jo — wooden staff', to: '/syllabus#jo-syllabus' }] },
  { title: 'Aikido terminology', text: 'Each grading section includes a terminology panel with the terms used at that level.', links: [{ label: 'Terminology in the grading syllabus', to: '/syllabus#grading-syllabus' }] },
  { title: 'Further practice & reading', text: 'Return to the full technical syllabus, read dojo notes and find courses to support your practice.', links: [{ label: 'Full body-art and weapons syllabus', to: '/syllabus' }, { label: 'Blog and dojo notes', to: '/blog' }, { label: 'Courses and events', to: '/events' }] }
]
</script>

<template>
  <main id="main-content" tabindex="-1">
    <PageIntro eyebrow="Keep learning" title="Student Resources" text="A practical home for the club’s syllabus, grading material and reading. Use these resources alongside guidance from your instructor." />
    <section class="section-space"><div class="container resource-grid"><article v-for="resource in resources" :key="resource.title" class="content-panel"><h2 class="h3">{{ resource.title }}</h2><p>{{ resource.text }}</p><ul class="resource-links"><li v-for="link in resource.links" :key="link.label"><router-link v-if="link.to" :to="link.to">{{ link.label }} <span aria-hidden="true">↗</span></router-link><a v-else :href="link.href">{{ link.label }} <span aria-hidden="true">↗</span></a></li></ul></article></div></section>
  </main>
</template>
