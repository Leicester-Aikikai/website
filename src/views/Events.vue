<template>
  <div class="events">
    <!-- Hero Section -->
    <section class="hero-section" role="banner">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5 mb-4 mb-md-0">
            <p class="text-uppercase mb-3 opacity-75">Welcome - はじめまして</p>
            <h1 class="display-3 fw-bold mb-4">Events</h1>
            <p class="lead mb-4">
              See below for a list of dojo courses and events. In the list we also include events we have been invited to.
            </p>
          </div>
          <div class="col-md-7 text-center">
            <img
              src="/src/assets/img/antonis-pavlakis-with-iain-cooper.webp"
              alt="Antonis Pavlakis with Iain Cooper"
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
            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>
    </section>

    <!-- Events List Section -->
    <main id="main-content" class="py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-4">Events</h2>
        <div class="section-divider"></div>

        <div class="row">
          <div class="col-12">
            <div class="position-relative">
              <!-- Timeline line -->
              <div class="position-absolute top-0 bottom-0 start-0" style="width: 2px; background: var(--primary-color); margin-left: 12px;"></div>

              <!-- Upcoming Event - December 2025 -->
              <div id="event-2025-12-14" class="mb-5 position-relative ps-5" :class="{ 'opacity-75': isEventPast('14.12.2025') }">
                <div class="position-absolute start-0 rounded-circle" :class="isEventPast('14.12.2025') ? 'bg-secondary' : 'bg-primary'" style="width: 12px; height: 12px; top: 8px; margin-left: 7px;"></div>
                <div class="mb-2">
                  <time :class="isEventPast('14.12.2025') ? 'text-muted' : 'fw-bold text-primary'">14.12.2025</time>
                </div>
                <div class="row g-3">
                  <div class="col-lg-8">
                    <div class="card h-100 shadow-sm">
                      <div class="card-body">
                        <h3 class="h5 fw-bold mb-3" :class="{ 'text-muted': isEventPast('14.12.2025') }">
                          <a href="/src/assets/img/Byakko-kan-joint-aikido-course-december-2025.jpg" target="_blank" class="text-decoration-none">
                            Xmas 2025 course with Melton Byakko-Kan Aikido
                          </a>
                        </h3>
                        <p class="mb-3" :class="isEventPast('14.12.2025') ? 'text-muted' : ''">
                          A joint course at the <a href="http://www.warrior-arts.co.uk/melton-aikido.html" target="_blank" rel="noopener noreferrer" class="fw-bold">Melton Byakko-Kan Aikido</a> dojo.
                        </p>

                        <div class="mb-3">
                          <strong :class="{ 'text-muted': isEventPast('14.12.2025') }">Instructors:</strong>
                          <ul class="mb-0 mt-2" :class="{ 'text-muted': isEventPast('14.12.2025') }">
                            <li>Naoko Suzuki</li>
                            <li>Sergio Cardoso</li>
                            <li>Antonis Pavlakis</li>
                            <li>Terry Mickowski</li>
                          </ul>
                        </div>

                        <div class="mb-3">
                          <strong :class="{ 'text-muted': isEventPast('14.12.2025') }">Location:</strong>
                          <address class="mb-0 mt-1" :class="{ 'text-muted': isEventPast('14.12.2025') }">Jubilee Sports Centre, Jubilee Street, Melton Mowbray, Leicestershire, LE13 1ND</address>
                        </div>

                        <div class="mb-3">
                          <strong :class="{ 'text-muted': isEventPast('14.12.2025') }">Time:</strong> <time :class="{ 'text-muted': isEventPast('14.12.2025') }">10:30am - 2:30pm</time>
                        </div>

                        <div>
                          <strong :class="{ 'text-muted': isEventPast('14.12.2025') }">Price:</strong>
                          <div class="mt-1" :class="{ 'text-muted': isEventPast('14.12.2025') }">
                            £10
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <img
                      src="/src/assets/img/Byakko-kan-joint-aikido-course-december-2025.jpg"
                      alt="Joint course with Melton Byakko-Kan Aikido poster December 2025"
                      class="img-fluid rounded shadow"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <!-- Event Items -->
              <div id="event-2023-12-10" class="mb-5 position-relative ps-5" :class="{ 'opacity-75': isEventPast('10.12.2023') }">
                <div class="position-absolute start-0 rounded-circle" :class="isEventPast('10.12.2023') ? 'bg-secondary' : 'bg-primary'" style="width: 12px; height: 12px; top: 8px; margin-left: 7px;"></div>
                <div class="mb-2">
                  <time :class="isEventPast('10.12.2023') ? 'text-muted' : 'fw-bold text-primary'">10.12.2023</time>
                </div>
                <div class="row g-3">
                  <div class="col-lg-8">
                    <div class="card h-100 shadow-sm">
                      <div class="card-body">
                        <h3 class="h5 fw-bold mb-3" :class="{ 'text-muted': isEventPast('10.12.2023') }">
                          <a href="/src/assets/img/Byakko-kan-joint-aikido-course-december-2023.jpg" target="_blank" class="text-decoration-none">
                            Joint course with Melton Byakko-Kan Aikido
                          </a>
                        </h3>
                        <p class="mb-3" :class="isEventPast('10.12.2023') ? 'text-muted' : ''">
                          A joint course at the <a href="http://www.warrior-arts.co.uk/melton-aikido.html" target="_blank" rel="noopener noreferrer" class="fw-bold">Melton Byakko-Kan Aikido</a> dojo.
                        </p>

                        <div class="mb-3">
                          <strong :class="{ 'text-muted': isEventPast('10.12.2023') }">Instructors:</strong>
                          <ul class="mb-0 mt-2" :class="{ 'text-muted': isEventPast('10.12.2023') }">
                            <li>Naoko Suzuki sensei</li>
                            <li>Terry Mickowski sensei</li>
                            <li>Andy Thompson sensei</li>
                            <li>Antonis Pavlakis sensei</li>
                          </ul>
                        </div>

                        <div class="mb-3">
                          <strong :class="{ 'text-muted': isEventPast('10.12.2023') }">Location:</strong>
                          <address class="mb-0 mt-1" :class="{ 'text-muted': isEventPast('10.12.2023') }">Jubilee Sports Centre, Jubilee Street, Melton Mowbray, Leicestershire, LE13 1ND</address>
                        </div>

                        <div class="mb-3">
                          <strong :class="{ 'text-muted': isEventPast('10.12.2023') }">Time:</strong> <time :class="{ 'text-muted': isEventPast('10.12.2023') }">11am - 3pm</time>
                        </div>

                        <div>
                          <strong :class="{ 'text-muted': isEventPast('10.12.2023') }">Prices:</strong>
                          <div class="mt-1" :class="{ 'text-muted': isEventPast('10.12.2023') }">
                            £20<br>
                            £10 - concessions
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <img
                      src="/src/assets/img/Byakko-kan-joint-aikido-course-december-2023.jpg"
                      alt="Joint course with Melton Byakko-Kan Aikido poster"
                      class="img-fluid rounded shadow"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <!-- Past Event 1 -->
              <div id="event-2023-10-22" class="mb-5 position-relative ps-5" :class="{ 'opacity-75': isEventPast('22.10.2023') }">
                <div class="position-absolute start-0 rounded-circle" :class="isEventPast('22.10.2023') ? 'bg-secondary' : 'bg-primary'" style="width: 12px; height: 12px; top: 8px; margin-left: 7px;"></div>
                <div class="mb-2">
                  <time :class="isEventPast('22.10.2023') ? 'text-muted' : 'fw-bold text-primary'">22.10.2023</time>
                </div>
                <div class="card shadow-sm">
                  <div class="card-body">
                    <h3 class="h5 fw-bold mb-3" :class="{ 'text-muted': isEventPast('22.10.2023') }">Leicester Aikikai Dojo Course - October 2023</h3>
                    <p class="mb-3" :class="{ 'text-muted': isEventPast('22.10.2023') }">
                      Dojo course on October 22nd 2023 with guest instructor Iain Cooper sensei 4th dan Fukushidoin
                    </p>

                    <div class="mb-2">
                      <strong :class="{ 'text-muted': isEventPast('22.10.2023') }">Location:</strong>
                      <address class="mb-0" :class="{ 'text-muted': isEventPast('22.10.2023') }">Aylestone Leisure Centre, 2 Knighton Lane East, Leicester, LE2 6LU</address>
                    </div>

                    <div class="mb-2">
                      <strong :class="{ 'text-muted': isEventPast('22.10.2023') }">Time:</strong> <time :class="{ 'text-muted': isEventPast('22.10.2023') }">1pm - 5pm</time>
                    </div>

                    <div>
                      <strong :class="{ 'text-muted': isEventPast('22.10.2023') }">Prices:</strong>
                      <div :class="{ 'text-muted': isEventPast('22.10.2023') }">
                        Adults - £15<br>
                        Under 18's - £8<br>
                        Concession - £12<br>
                        Kids 12 and under go FREE (Only available to dojo members)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Past Event 2 -->
              <div id="event-2023-09-15" class="mb-5 position-relative ps-5" :class="{ 'opacity-75': isEventPast('15.09.2023') }">
                <div class="position-absolute start-0 rounded-circle" :class="isEventPast('15.09.2023') ? 'bg-secondary' : 'bg-primary'" style="width: 12px; height: 12px; top: 8px; margin-left: 7px;"></div>
                <div class="mb-2">
                  <time :class="isEventPast('15.09.2023') ? 'text-muted' : 'fw-bold text-primary'">15.09.2023</time>
                </div>
                <div class="card shadow-sm">
                  <div class="card-body">
                    <h3 class="h5 fw-bold mb-3" :class="{ 'text-muted': isEventPast('15.09.2023') }">Aikido Beginner's Course 2023</h3>
                    <p class="mb-2" :class="{ 'text-muted': isEventPast('15.09.2023') }">Start aikido with a 3-month beginner's course.</p>
                    <p class="mb-2" :class="{ 'text-muted': isEventPast('15.09.2023') }">From September 15th 2023 to December 15th 2023 we ran our beginner's course.</p>
                    <p class="mb-3" :class="{ 'text-muted': isEventPast('15.09.2023') }">Join us to work on co-ordination, self-improvement and body conditioning. Learn how to fall, how to defend yourself and much more.</p>

                    <div class="mb-2">
                      <strong :class="{ 'text-muted': isEventPast('15.09.2023') }">Location:</strong>
                      <address class="mb-0" :class="{ 'text-muted': isEventPast('15.09.2023') }">Aylestone Leisure Centre, 2 Knighton Lane East, Leicester, LE2 6LU</address>
                    </div>

                    <div class="mb-2">
                      <strong :class="{ 'text-muted': isEventPast('15.09.2023') }">Time:</strong> <time :class="{ 'text-muted': isEventPast('15.09.2023') }">7pm - 9pm</time>
                    </div>

                    <div>
                      <strong :class="{ 'text-muted': isEventPast('15.09.2023') }">Prices:</strong>
                      <div :class="{ 'text-muted': isEventPast('15.09.2023') }">
                        Adults (waged) - £60<br>
                        Adults (concession) - £45
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Past Event 3 -->
              <div id="event-2023-06-11" class="mb-5 position-relative ps-5" :class="{ 'opacity-75': isEventPast('11.06.2023') }">
                <div class="position-absolute start-0 rounded-circle" :class="isEventPast('11.06.2023') ? 'bg-secondary' : 'bg-primary'" style="width: 12px; height: 12px; top: 8px; margin-left: 7px;"></div>
                <div class="mb-2">
                  <time :class="isEventPast('11.06.2023') ? 'text-muted' : 'fw-bold text-primary'">11.06.2023</time>
                </div>
                <div class="card shadow-sm">
                  <div class="card-body">
                    <h3 class="h5 fw-bold mb-3" :class="{ 'text-muted': isEventPast('11.06.2023') }">Dojo 10th year anniversary course</h3>
                    <p class="mb-3" :class="{ 'text-muted': isEventPast('11.06.2023') }">Join us on June 11th 2023 for the 10th year anniversary course.</p>

                    <div class="mb-3">
                      <strong :class="{ 'text-muted': isEventPast('11.06.2023') }">Instructors:</strong>
                      <ul class="mb-0 mt-2" :class="{ 'text-muted': isEventPast('11.06.2023') }">
                        <li>Ian Grubb 6th dan Shidoin</li>
                        <li>Terry Mickowski 4th dan Fukushidoin</li>
                        <li>Iain Cooper 3rd dan Fukushidoin</li>
                        <li>Antonis Pavlakis 3rd dan Fukushidoin</li>
                      </ul>
                    </div>

                    <div class="mb-2">
                      <strong :class="{ 'text-muted': isEventPast('11.06.2023') }">Location:</strong>
                      <address class="mb-0" :class="{ 'text-muted': isEventPast('11.06.2023') }">Aylestone Leisure Centre, 2 Knighton Lane East, Leicester, LE2 6LU</address>
                    </div>

                    <div class="mb-2">
                      <strong :class="{ 'text-muted': isEventPast('11.06.2023') }">Time:</strong> <time :class="{ 'text-muted': isEventPast('11.06.2023') }">1pm - 5pm</time>
                    </div>

                    <div>
                      <strong :class="{ 'text-muted': isEventPast('11.06.2023') }">Prices:</strong>
                      <div :class="{ 'text-muted': isEventPast('11.06.2023') }">
                        Adults - £15<br>
                        Under 18's - £8<br>
                        Concession - £12<br>
                        Kids 12 and under go FREE (Only available to dojo members)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { setJsonLd, SITE_URL } from '../utils/seo.js'

export default {
  name: 'Events',
  data() {
    return {
      events: [
        {
          date: '14.12.2025',
          title: 'Xmas 2025 course with Melton Byakko-Kan Aikido',
          type: 'course',
          id: 'event-2025-12-14'
        },
        {
          date: '10.12.2023',
          title: 'Joint course with Melton Byakko-Kan Aikido',
          type: 'course',
          id: 'event-2023-12-10'
        },
        {
          date: '22.10.2023',
          title: 'Leicester Aikikai Dojo Course - October 2023',
          type: 'course',
          id: 'event-2023-10-22'
        },
        {
          date: '15.09.2023',
          title: 'Aikido Beginner\'s Course 2023',
          type: 'course',
          id: 'event-2023-09-15'
        },
        {
          date: '11.06.2023',
          title: 'Dojo 10th year anniversary course',
          type: 'course',
          id: 'event-2023-06-11'
        }
      ]
    }
  },
  computed: {
    eventsWithStatus() {
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      return this.events.map(event => {
        const eventDate = this.parseDate(event.date)
        return {
          ...event,
          isPast: eventDate < today
        }
      })
    }
  },
  methods: {
    parseDate(dateStr) {
      // Parse DD.MM.YYYY format
      const parts = dateStr.split('.')
      return new Date(parts[2], parts[1] - 1, parts[0])
    },
    isEventPast(dateStr) {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const eventDate = this.parseDate(dateStr)
      return eventDate < today
    },
    createSlug(title) {
      return title.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
    },
    formatDateForUrl(dateStr) {
      // Convert DD.MM.YYYY to YYYY-MM-DD
      const parts = dateStr.split('.')
      return `${parts[2]}-${parts[1]}-${parts[0]}`
    },
    getEventUrl(event) {
      const date = this.formatDateForUrl(event.date)
      const slug = this.createSlug(event.title)
      return `/events/${date}/${slug}`
    },
    scrollToEvent() {
      // Check if we have route params for a specific event
      if (this.$route.params.date && this.$route.params.title) {
        const date = this.$route.params.date
        const formattedDate = date.split('-').reverse().join('.') // Convert YYYY-MM-DD to DD.MM.YYYY

        this.$nextTick(() => {
          const eventElement = document.getElementById(`event-${date}`)
          if (eventElement) {
            setTimeout(() => {
              eventElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }, 100)
          }
        })
      }
    }
  },
  mounted() {
    // Scroll to specific event if accessed via direct URL
    this.scrollToEvent()

    // Add structured data for upcoming/recent events
    setJsonLd([
      {
        '@context': 'https://schema.org',
        '@type': 'Event',
        'name': 'Joint course with Melton Byakko-Kan Aikido',
        'description': 'A joint aikido course at the Melton Byakko-Kan Aikido dojo with multiple instructors including Naoko Suzuki sensei, Terry Mickowski sensei, Andy Thompson sensei, and Antonis Pavlakis sensei.',
        'startDate': '2023-12-10T11:00',
        'endDate': '2023-12-10T15:00',
        'eventStatus': 'https://schema.org/EventScheduled',
        'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
        'location': {
          '@type': 'Place',
          'name': 'Jubilee Sports Centre',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Jubilee Street',
            'addressLocality': 'Melton Mowbray',
            'addressRegion': 'Leicestershire',
            'postalCode': 'LE13 1ND',
            'addressCountry': 'GB'
          }
        },
        'organizer': {
          '@type': 'Organization',
          'name': 'Leicester Aikikai Dojo',
          'url': SITE_URL
        },
        'offers': {
          '@type': 'Offer',
          'price': '20',
          'priceCurrency': 'GBP',
          'availability': 'https://schema.org/InStock',
          'validFrom': '2023-11-01'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Leicester Aikikai Events',
        'description': 'Past and upcoming aikido events and courses at Leicester Aikikai Dojo',
        'itemListElement': [
          {
            '@type': 'Event',
            'name': 'Leicester Aikikai Dojo 10th Year Anniversary Course',
            'description': '10th year anniversary course with guest instructors Ian Grubb 6th dan, Terry Mickowski 4th dan, Iain Cooper 3rd dan, and Antonis Pavlakis 3rd dan.',
            'startDate': '2023-06-11T13:00',
            'endDate': '2023-06-11T17:00',
            'location': {
              '@type': 'Place',
              'name': 'Aylestone Leisure Centre',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': '2 Knighton Lane East',
                'addressLocality': 'Leicester',
                'postalCode': 'LE2 6LU',
                'addressCountry': 'GB'
              }
            }
          }
        ]
      }
    ])
  }
}
</script>

<style scoped>
/* Component specific styles */
</style>

