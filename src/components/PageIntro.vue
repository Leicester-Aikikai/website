<script setup>
defineProps({ eyebrow: { type: String, default: 'Leicester Aikikai' }, title: String, text: String })
</script>

<template>
  <header class="page-intro">
    <div class="container">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="lead reading-width" v-if="text">{{ text }}</p>
      <slot />
    </div>
  </header>
</template>
