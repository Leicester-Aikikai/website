<template>
  <div
    v-if="latestAnnouncement && !dismissed"
    class="announcement-banner"
    role="alert"
    aria-live="polite"
    aria-atomic="true"
  >
    <div class="announcement-inner">
      <span class="announcement-icon" aria-hidden="true">⚠️</span>
      <div class="announcement-content">
        <strong class="announcement-title">{{ latestAnnouncement.title }}</strong>
        <span class="announcement-text">{{ latestAnnouncement.content }}</span>
      </div>
      <button
        class="announcement-close"
        @click="dismissed = true"
        aria-label="Dismiss announcement"
        title="Dismiss"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script>
import { announcements } from '@/data/announcements.js';

export default {
  name: 'Announcements',
  data() {
    return {
      announcements: announcements,
      dismissed: false
    };
  },
  computed: {
    latestAnnouncement() {
      if (this.announcements.length === 0) {
        return null;
      }
      return this.announcements[0];
    }
  }
};
</script>

<style scoped>
/*
  The navbar uses Bootstrap's fixed-top (z-index: 1030).
  The banner sits just below it using margin-top and a lower z-index.
  position: sticky keeps it visible as the user scrolls.
*/
.announcement-banner {
  margin-top: 62px; /* offset for fixed navbar height */
  position: sticky;
  top: 62px;
  z-index: 1025;
  /* Deep red: background #991b1b, text #ffffff — contrast ratio ~6.6:1 (WCAG AA ✓) */
  background-color: #991b1b;
  color: #ffffff;
  border-bottom: 3px solid #7f1d1d;
}

.announcement-inner {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  max-width: 960px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
}

.announcement-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.announcement-content {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.4rem;
}

.announcement-title {
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap;
}

.announcement-text {
  font-size: 0.95rem;
  font-weight: 400;
}

.announcement-close {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1;
  padding: 0.1rem 0.45rem;
  flex-shrink: 0;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.announcement-close:hover,
.announcement-close:focus {
  background: rgba(255, 255, 255, 0.15);
  border-color: #ffffff;
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

@media (max-width: 576px) {
  .announcement-content {
    flex-direction: column;
    gap: 0.15rem;
  }
}
</style>
