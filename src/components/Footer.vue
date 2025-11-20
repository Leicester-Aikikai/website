<template>
  <footer class="bg-light border-top">
    <div class="container py-4">
      <div class="row align-items-center">
        <div class="col-md-6 mb-3 mb-md-0">
          <div class="d-flex align-items-center">
            <svg class="me-2" style="height: 24px; width: 24px; fill: #2465c7;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span class="fs-5 fw-bold text-primary">Leicester Aikikai</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-md-end flex-wrap gap-3">
            <a href="https://www.tiktok.com/@leicesteraikikai" class="text-decoration-none" target="_blank" rel="noopener noreferrer" aria-label="Visit our TikTok page">
              TikTok
            </a>
            <a href="https://www.facebook.com/LeicesterAikikai" class="text-decoration-none" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
              Facebook
            </a>
            <a href="https://www.instagram.com/leicesteraikikai/" class="text-decoration-none" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
              Instagram
            </a>
            <a href="https://twitter.com/leicesterdojo" class="text-decoration-none" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  margin-top: auto;
}

footer a {
  color: #6c757d;
  transition: color 0.3s ease;
}

footer a:hover {
  color: var(--primary-color);
}
</style>

