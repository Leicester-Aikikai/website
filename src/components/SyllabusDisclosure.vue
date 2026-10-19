<script setup>
import { ref } from 'vue'

defineProps({ id: { type: String, required: true } })
const open = ref(false)
</script>

<template>
  <section class="card shadow-sm mb-4 weapons-disclosure">
    <div class="card-body">
      <div class="weapons-disclosure-header">
        <h4 :id="`${id}-heading`" class="h5 fw-bold"><slot name="heading" /></h4>
        <button
          class="btn btn-outline-primary btn-sm"
          type="button"
          :aria-expanded="open"
          :aria-controls="id"
          :aria-labelledby="`${id}-action ${id}-heading`"
          @click="open = !open"
        >
          <span :id="`${id}-action`">{{ open ? 'Hide details' : 'Show details' }}</span>
          <span aria-hidden="true">{{ open ? '−' : '+' }}</span>
        </button>
      </div>
      <div :id="id" :hidden="!open" class="pt-3"><slot /></div>
    </div>
  </section>
</template>

<style scoped>
.weapons-disclosure-header { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; }
.weapons-disclosure-header h4 { flex: 1 1 17rem; margin-bottom: 0; }
.weapons-disclosure-header button { flex-shrink: 0; }
</style>
