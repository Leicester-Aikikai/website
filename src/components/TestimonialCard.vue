<script setup>
// Render only real quotations with explicit permission. No default content.
defineProps({ quote: String, name: String, permissionConfirmed: Boolean })
</script>

<template>
  <figure v-if="permissionConfirmed && quote && name" class="content-panel">
    <blockquote><p>{{ quote }}</p></blockquote>
    <figcaption>{{ name }}</figcaption>
  </figure>
</template>
