<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'scrolled': isScrolled }" aria-label="Main navigation" role="navigation">
      <div class="container">
        <router-link to="/" class="navbar-brand d-flex align-items-center" aria-label="Leicester Aikikai home page">
          <svg class="me-2" style="height: 24px; width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          <span class="fs-4 fw-bold">Leicester Aikikai</span>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation menu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            <li class="nav-item">
              <router-link to="/" class="nav-link" :class="{ 'fw-bold': isActive('/') }" aria-label="Welcome page">
                Welcome
              </router-link>
            </li>
            <li class="nav-item">
              <a href="/#our-journey" class="nav-link" aria-label="Our journey so far">Our Journey So Far</a>
            </li>
            <li class="nav-item">
              <router-link to="/events" class="nav-link" :class="{ 'fw-bold': isActive('/events') }" aria-label="Events page">
                Events
              </router-link>
            </li>
            <li class="nav-item">
              <a href="/#location" class="nav-link" aria-label="Location and times">Location and Times</a>
            </li>
            <li class="nav-item">
              <a href="/#costs" class="nav-link" aria-label="Costs information">Costs</a>
            </li>
            <li class="nav-item">
              <router-link to="/syllabus" class="nav-link" :class="{ 'fw-bold': isActive('/syllabus') }" aria-label="Syllabus page">
                Syllabus
              </router-link>
            </li>
            <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a href="/#faq" class="btn btn-gradient rounded-pill px-4 py-2 fw-bold" aria-label="Frequently asked questions">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isScrolled: false
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 10
    },
    isActive(path) {
      return this.$route.path === path
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.navbar {
  background: transparent;
  transition: all 0.3s ease-in-out;
  padding: 1rem 0;
}

.navbar:not(.scrolled) .navbar-brand,
.navbar:not(.scrolled) .nav-link,
.navbar:not(.scrolled) .navbar-toggler-icon {
  color: white !important;
}

.navbar:not(.scrolled) svg {
  fill: white;
}

.navbar.scrolled {
  background-color: white !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar.scrolled .navbar-brand,
.navbar.scrolled .nav-link {
  color: #333 !important;
}

.navbar.scrolled svg {
  fill: #333;
}

.navbar-toggler {
  border-color: rgba(255, 255, 255, 0.5);
}

.navbar.scrolled .navbar-toggler {
  border-color: rgba(0, 0, 0, 0.1);
}

.nav-link {
  font-weight: 400;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
}

.nav-link:hover {
  opacity: 0.8;
}

.nav-link.fw-bold {
  font-weight: 700 !important;
}

@media (max-width: 991px) {
  .navbar:not(.scrolled) {
    background: rgba(36, 101, 199, 0.95);
  }

  .collapse.show,
  .collapsing {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
  }

  .collapse.show .nav-link,
  .collapsing .nav-link {
    color: #333 !important;
  }
}
</style>

