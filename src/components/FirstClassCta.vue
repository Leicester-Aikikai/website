<script setup>
defineProps({ compact: Boolean })
</script>

<template>
  <router-link to="/beginners#first-class" class="btn btn-primary" :class="{ 'btn-lg': !compact }">
    {{ compact ? 'Free First Class' : 'Try Your First Class Free' }}<span aria-hidden="true"> ↗</span>
  </router-link>
</template>
