<template>
  <div class="instructor-profile" v-if="instructor">
    <!-- Skip link for accessibility -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Hero Section -->
    <section class="hero-section" role="banner">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5 mb-4 mb-md-0">
            <p class="text-uppercase mb-3 opacity-75">Instructor Profile</p>
            <h1 class="display-3 fw-bold mb-4">{{ instructor.name }}</h1>
            <p class="lead mb-4">
              {{ instructor.title }}
            </p>
            <router-link to="/" class="btn btn-light btn-lg rounded-pill px-4 shadow">
              ← Back to Home
            </router-link>
          </div>
          <div class="col-md-7 text-center">
            <img
              :src="instructor.image"
              :alt="`${instructor.name} - ${instructor.title}`"
              class="img-fluid rounded shadow-lg"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <!-- Wave divider -->
      <div class="wave-divider">
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
            </g>
          </g>
        </svg>
      </div>
    </section>

    <!-- Main Content -->
    <main id="main-content">
      <!-- Instructor Details Section -->
      <section class="py-5" itemscope itemtype="https://schema.org/Person">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h2 class="section-title" itemprop="name">{{ instructor.name }}</h2>
              <div class="section-divider"></div>

              <p class="h5 mb-4 text-muted" itemprop="jobTitle">{{ instructor.title }}</p>

              <div class="instructor-bio" itemprop="description">
                <div v-html="instructor.bio"></div>
              </div>

              <div v-if="instructor.credentials && instructor.credentials.length > 0" class="mt-5">
                <h3 class="h4 fw-bold mb-3">Credentials & Qualifications</h3>
                <ul class="list-unstyled">
                  <li v-for="(credential, index) in instructor.credentials" :key="index" class="mb-2">
                    <strong>{{ credential.year }}:</strong> {{ credential.title }}
                  </li>
                </ul>
              </div>

              <div v-if="instructor.affiliations && instructor.affiliations.length > 0" class="mt-4">
                <h3 class="h4 fw-bold mb-3">Affiliations</h3>
                <ul class="list-unstyled">
                  <li v-for="(affiliation, index) in instructor.affiliations" :key="index" class="mb-2">
                    <span v-if="affiliation.url">
                      <a :href="affiliation.url" target="_blank" rel="noopener noreferrer">{{ affiliation.name }}</a>
                    </span>
                    <span v-else>{{ affiliation.name }}</span>
                  </li>
                </ul>
              </div>

              <meta itemprop="image" :content="instructor.image">
              <meta itemprop="url" :content="instructorUrl">
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="py-5 bg-gradient text-white text-center">
        <div class="container">
          <h2 class="display-5 fw-bold mb-4">Train with us</h2>
          <div style="height: 4px; width: 64px; background: white; opacity: 0.5; margin: 0 auto 2rem;"></div>
          <h3 class="h4 mb-4">Come down on a Friday night to give it a go. First class is FREE.</h3>
          <router-link to="/" class="btn btn-light btn-lg rounded-pill px-4 shadow">
            Learn More
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { setMeta, setJsonLd, SITE_URL } from '../utils/seo.js'

export default {
  name: 'Instructor',
  data() {
    return {
      instructors: {
        'antonis-pavlakis': {
          name: 'Antonios Pavlakis',
          alternateName: 'Antonis Pavlakis',
          title: '4th Dan • Yondan so-Hombu Fukushidoin (副指導員)',
          image: '/img/leicester-aikikai-antonios-pavlakis-2016.jpg',
          bio: `
            <p class="mb-3">
              Antonios (aka Antonis) holds a fourth degree black belt (yondan so-Hombu Fukushidoin 副指導員) and serves
              as the chief instructor and founder of Leicester Aikikai dojo.
            </p>

            <p class="mb-3">
              <strong>Training Background:</strong> His aikido journey began in 1997 at De Montfort University Aikido Club
              under the guidance of Dave Lenton sensei (4th dan), where he developed a strong foundation in traditional Aikido principles.
            </p>

            <p class="mb-3">
              <strong>Teaching Career:</strong> After receiving his teaching qualifications (Coaching Level 1) in 2009,
              Antonis became an assistant instructor at DMU Aikido Club. In May 2013, he established Leicester Aikikai dojo
              (レスター 合気道 道場) with a vision to create an inclusive training environment welcoming practitioners of all levels.
              In 2018, he was awarded the Fukushidoin teaching title, allowing him to grade students up to 1st kyu.
              In 2023, he successfully passed his Yondan (4th dan) grading examination.
            </p>

            <p class="mb-0">
              <strong>Affiliations:</strong> Leicester Aikikai maintains full membership with United Kingdom Aikikai (UKA)
              and the Joint Aikikai Council (JAC), ensuring all grades meet national and international standards.
            </p>
          `,
          credentials: [
            { year: '2023', title: '4th Dan (Yondan)' },
            { year: '2018', title: 'Fukushidoin (Teaching Qualification)' },
            { year: '2009', title: 'Coaching Level 1' }
          ],
          affiliations: [
            { name: 'United Kingdom Aikikai (UKA)', url: 'https://ukaikikai.org.uk/' },
            { name: 'Joint Aikikai Council (JAC)', url: 'http://jointaikikaicouncil.co.uk/' }
          ],
          alumniOf: 'De Montfort University Aikido Club',
          knowsAbout: ['Aikido', 'Martial Arts', 'Traditional Aikikai', 'Self Defense', 'Aikido Instruction']
        }
      },
      instructor: null
    }
  },
  computed: {
    instructorUrl() {
      return `${SITE_URL}/instructors/${this.$route.params.name}`
    }
  },
  mounted() {
    const instructorSlug = this.$route.params.name
    this.instructor = this.instructors[instructorSlug]

    if (!this.instructor) {
      // Redirect to home if instructor not found
      this.$router.push('/')
      return
    }

    // Set meta tags for SEO
    setMeta({
      title: `${this.instructor.name} - Instructor Profile | Leicester Aikikai Dojo`,
      description: `${this.instructor.name}, ${this.instructor.title} at Leicester Aikikai Dojo. Learn about their aikido journey, qualifications, and teaching experience.`,
      keywords: `${this.instructor.name}, aikido instructor Leicester, aikido teacher, ${this.instructor.title}, Leicester Aikikai instructor`,
      url: this.instructorUrl,
      image: `${SITE_URL}${this.instructor.image}`,
      type: 'profile'
    })

    // Set structured data for Person
    setJsonLd([
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': this.instructor.name,
        'alternateName': this.instructor.alternateName,
        'jobTitle': this.instructor.title,
        'description': this.instructor.bio.replace(/<[^>]*>/g, '').substring(0, 200),
        'image': `${SITE_URL}${this.instructor.image}`,
        'url': this.instructorUrl,
        'memberOf': {
          '@type': 'SportsOrganization',
          'name': 'Leicester Aikikai Dojo',
          'url': SITE_URL
        },
        'affiliation': this.instructor.affiliations.map(aff => ({
          '@type': 'Organization',
          'name': aff.name
        })),
        'knowsAbout': this.instructor.knowsAbout,
        'alumniOf': {
          '@type': 'Organization',
          'name': this.instructor.alumniOf
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': SITE_URL
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Instructors',
            'item': `${SITE_URL}/instructors`
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': this.instructor.name,
            'item': this.instructorUrl
          }
        ]
      }
    ])
  }
}
</script>

<style scoped>
.instructor-bio {
  line-height: 1.8;
  font-size: 1.05rem;
}

.instructor-bio strong {
  font-weight: 600;
}

@media (max-width: 767px) {
  .instructor-bio {
    font-size: 1rem;
  }
}
</style>

