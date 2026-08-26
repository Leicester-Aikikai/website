<template>
  <div class="events">
    <!-- Hero Section -->
    <section class="hero-section" role="banner">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5 mb-4 mb-md-0">
            <p class="text-uppercase mb-3 opacity-75">Welcome - はじめまして</p>
            <h1 class="display-3 fw-bold mb-4">{{ singleEvent ? singleEvent.title : 'Aikido Events in Leicester' }}</h1>
            <p class="lead mb-4" v-if="!singleEvent">
              Discover upcoming aikido courses in Leicester and the East Midlands. Join us for traditional aikido training, seminars, and special events led by experienced instructors.
            </p>
            <p class="lead mb-4" v-else>
              {{ singleEvent.description }}
            </p>
            <router-link v-if="singleEvent" to="/events" class="btn btn-light btn-lg rounded-pill px-4 shadow">
              ← Back to All Events
            </router-link>
          </div>
          <div class="col-md-7 text-center">
            <img
              :src="singleEvent ? getEventImage(singleEvent) : '/img/antonis-pavlakis-with-iain-cooper.webp'"
              :alt="singleEvent ? `${singleEvent.title} event poster` : 'Aikido instructors Antonis Pavlakis and Iain Cooper at Leicester Aikikai dojo event'"
              class="img-fluid rounded shadow-lg"
              fetchpriority="high"
              width="1280"
              height="960"
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

    <!-- Single Event Detail Section -->
    <main id="main-content" class="py-5 bg-light" v-if="singleEvent">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="card shadow-sm border-0">
              <div class="card-body p-4" :class="{ 'opacity-75': isEventPast(singleEvent.date) }">
                <h2 class="h3 fw-bold mb-4">Event Details</h2>

                <div class="mb-4">
                  <h3 class="h5 fw-bold mb-2">Description</h3>
                  <p>{{ singleEvent.description }}</p>
                </div>

                <div class="mb-4" v-if="singleEvent.instructors">
                  <h3 class="h5 fw-bold mb-2">Instructors</h3>
                  <ul class="list-unstyled">
                    <li v-for="(instructor, index) in singleEvent.instructors" :key="index" class="mb-2">
                      <template v-if="typeof instructor === 'string'">
                        {{ instructor }}
                      </template>
                      <template v-else>
                        <router-link v-if="instructor.profile && !instructor.profile.startsWith('http')"
                                     :to="instructor.profile"
                                     class="text-decoration-none fw-bold">
                          {{ instructor.name }}
                        </router-link>
                        <a v-else-if="instructor.profile"
                           :href="instructor.profile"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="text-decoration-none fw-bold">
                          {{ instructor.name }}
                        </a>
                        <span v-else class="fw-bold">{{ instructor.name }}</span>
                      </template>
                    </li>
                  </ul>
                </div>

                <div class="mb-4">
                  <h3 class="h5 fw-bold mb-2">Location</h3>
                  <p class="mb-1"><strong>{{ singleEvent.location.name }}</strong></p>
                  <p class="text-muted">{{ singleEvent.location.address }}</p>
                </div>

                <div class="mb-4">
                  <h3 class="h5 fw-bold mb-2">Date & Time</h3>
                  <p class="mb-1"><strong>Date:</strong> {{ formatDateForDisplay(singleEvent.date) }}</p>
                  <p class="mb-0"><strong>Time:</strong> {{ formatTime(singleEvent.time.start) }} - {{ formatTime(singleEvent.time.end) }}</p>
                </div>

                <div class="mb-4" v-if="singleEvent.price">
                  <h3 class="h5 fw-bold mb-2">Price</h3>
                  <p class="mb-0">{{ singleEvent.price }}</p>
                </div>

                <div class="alert alert-info" v-if="isEventPast(singleEvent.date)">
                  <strong>Note:</strong> This event has already taken place.
                </div>

                <div class="mt-4">
                  <router-link to="/events" class="btn btn-primary btn-lg rounded-pill px-4">
                    ← Back to All Events
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Events List Section -->
    <main id="main-content" class="py-5 bg-light" v-else>
      <div class="container">
        <h2 class="section-title text-center mb-4">Aikido Courses & Events in Leicester</h2>
        <div class="section-divider"></div>

        <!-- SEO-optimized intro section -->
        <div class="row mb-5">
          <div class="col-lg-10 mx-auto">
            <div class="card shadow-sm border-0">
              <div class="card-body p-4">
                <p class="mb-3">
                  <strong>Leicester Aikikai</strong> hosts regular <strong>aikido events in Leicester</strong> and the surrounding East Midlands region. Our <strong>aikido courses in Leicester</strong> cater to all levels, from beginners to advanced practitioners.
                </p>
                <p class="mb-3">
                  Whether you're looking to start your aikido journey with our beginner's courses or advance your skills at our seminars, our events bring together experienced instructors and passionate students. We regularly host courses at <strong>Aylestone Leisure Centre</strong> and collaborate with other dojos across the UK.
                </p>
                <p class="mb-0">
                  Browse aikido courses in Leicester and beyond. This list features events at our dojo as well as courses led by our instructors throughout the UK and internationally.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Next Event Highlight Box -->
        <div v-if="upcomingEvents.length > 0" class="row mb-5">
          <div class="col-lg-10 mx-auto">
            <div class="alert alert-primary border-0 shadow-lg" role="region" aria-labelledby="next-event-heading">
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-star-fill fs-4 me-3 text-warning"></i>
                <h2 id="next-event-heading" class="h4 mb-0 fw-bold">Next Upcoming Event</h2>
              </div>
              <h3 class="h5 fw-bold mb-2">{{ upcomingEvents[0].title }}</h3>
              <p class="mb-3">
                <i class="bi bi-calendar3 me-2"></i><strong>{{ formatDateForDisplay(upcomingEvents[0].date) }}</strong>
                <span class="mx-2">•</span>
                <i class="bi bi-clock me-2"></i>{{ formatTime(upcomingEvents[0].time.start) }} - {{ formatTime(upcomingEvents[0].time.end) }}
                <span class="mx-2">•</span>
                <i class="bi bi-geo-alt me-2"></i>{{ upcomingEvents[0].location.name }}
              </p>
              <p class="mb-3">{{ upcomingEvents[0].description.substring(0, 150) }}...</p>
              <div class="d-flex gap-2 flex-wrap">
                <router-link :to="getEventUrl(upcomingEvents[0].date, upcomingEvents[0].title)" class="btn btn-light fw-bold">
                  View Full Details <i class="bi bi-arrow-right ms-2"></i>
                </router-link>
                <a href="#upcoming-events" class="btn btn-outline-light">
                  See All Upcoming Events
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Jump Links Navigation -->
        <div class="row mb-4">
          <div class="col-12">
            <nav class="d-flex gap-3 justify-content-center flex-wrap" aria-label="Event sections quick navigation">
              <a v-if="upcomingEvents.length > 0" href="#upcoming-events" class="btn btn-primary">
                <i class="bi bi-calendar-event me-2"></i>Upcoming Events ({{ upcomingEvents.length }})
              </a>
              <a v-if="pastEvents.length > 0" href="#past-events" class="btn btn-outline-secondary">
                <i class="bi bi-archive me-2"></i>Past Events ({{ pastEvents.length }})
              </a>
            </nav>
          </div>
        </div>

        <div class="row">
          <div class="col-12">

            <!-- Upcoming Events Section -->
            <div v-if="upcomingEvents.length > 0" class="mb-5" id="upcoming-events">
              <h2 class="h3 fw-bold mb-4 text-primary">
                <i class="bi bi-calendar-event me-2"></i>Upcoming Events ({{ upcomingEvents.length }})
              </h2>
              <p class="lead mb-4">Join us at these upcoming aikido courses and events. All levels welcome!</p>

              <div class="position-relative">
                <!-- Timeline line for upcoming events -->
                <div class="position-absolute top-0 bottom-0 start-0" style="width: 2px; background: var(--primary-color); margin-left: 12px;"></div>

                <!-- Dynamic Upcoming Event Rendering -->
                <div
                  v-for="event in upcomingEvents"
                  :key="event.id"
                  :id="event.id"
                  class="mb-5 position-relative ps-5"
                  itemscope
                  itemtype="https://schema.org/Event"
                  :data-event-type="event.type"
                  data-event-status="upcoming"
                  :data-event-date="formatDateISO(event.date)"
                  :data-event-location="event.location.name"
                >
                  <div class="position-absolute start-0 rounded-circle bg-primary" style="width: 12px; height: 12px; top: 8px; margin-left: 7px;"></div>
                  <div class="mb-2">
                    <time
                      class="fw-bold text-primary"
                      itemprop="startDate"
                      :datetime="`${formatDateISO(event.date)}T${event.time.start}:00+00:00`"
                    >{{ event.date }}</time>
                  </div>

                  <div class="row g-3" v-if="event.image">
                    <div class="col-lg-8">
                      <div class="card h-100 shadow-sm">
                        <div class="card-body">
                          <h3 class="h5 fw-bold mb-3" itemprop="name">
                            <router-link :to="getEventUrl(event.date, event.title)" class="text-decoration-none">
                              {{ event.title }}
                            </router-link>
                          </h3>
                          <p class="mb-3" itemprop="description">
                            {{ event.description }}
                          </p>

                          <div class="mb-3" v-if="event.instructors && event.instructors.length > 0">
                            <strong>Instructors:</strong>
                            <ul class="mb-0 mt-2">
                              <li v-for="(instructor, idx) in event.instructors" :key="idx" itemprop="performer" itemscope itemtype="https://schema.org/Person">
                                <template v-if="typeof instructor === 'string'">
                                  <span itemprop="name">{{ instructor }}</span>
                                </template>
                                <template v-else>
                                  <router-link v-if="instructor.profile && !instructor.profile.startsWith('http')"
                                               :to="instructor.profile"
                                               class="text-decoration-none"
                                               itemprop="url">
                                    <span itemprop="name">{{ instructor.name }}</span>
                                  </router-link>
                                  <a v-else-if="instructor.profile"
                                     :href="instructor.profile"
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     class="text-decoration-none"
                                     itemprop="url">
                                    <span itemprop="name">{{ instructor.name }}</span>
                                  </a>
                                  <span v-else itemprop="name">{{ instructor.name }}</span>
                                </template>
                              </li>
                            </ul>
                          </div>

                          <div class="mb-2" itemprop="location" itemscope itemtype="https://schema.org/Place">
                            <strong>Location:</strong>
                            <address class="mb-0" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                              <span itemprop="name">{{ event.location.name }}</span>,
                              <span itemprop="streetAddress">{{ event.location.address }}</span>
                            </address>
                          </div>

                          <div class="mb-2">
                            <strong>Time:</strong>
                            <time :datetime="event.time.start">{{ formatTime(event.time.start) }}</time> -
                            <time itemprop="endDate" :datetime="`${formatDateISO(event.date)}T${event.time.end}:00+00:00`">{{ formatTime(event.time.end) }}</time>
                          </div>

                          <div v-if="event.price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                            <strong>Prices:</strong>
                            <div>{{ event.price }}</div>
                          </div>

                          <!-- CTA Buttons -->
                          <div class="mt-4 pt-3 border-top d-flex gap-2 flex-wrap">
                            <router-link :to="getEventUrl(event.date, event.title)" class="btn btn-primary btn-sm">
                              <i class="bi bi-info-circle me-1"></i>View Full Details
                            </router-link>
                            <a :href="generateICalLink(event)"
                               :download="`${createSlug(event.title)}.ics`"
                               class="btn btn-outline-success btn-sm">
                              <i class="bi bi-calendar-plus me-1"></i>Add to Calendar
                            </a>
                          </div>

                          <!-- Social Sharing -->
                          <div class="mt-3 pt-3 border-top">
                            <small class="text-muted me-3">Share this event:</small>
                            <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL + getEventUrl(event.date, event.title))}`"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="btn btn-sm btn-outline-primary me-2"
                               aria-label="Share on Facebook">
                              <i class="bi bi-facebook"></i>
                            </a>
                            <a :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(SITE_URL + getEventUrl(event.date, event.title))}&text=${encodeURIComponent(event.title)}`"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="btn btn-sm btn-outline-info me-2"
                               aria-label="Share on Twitter">
                              <i class="bi bi-twitter-x"></i>
                            </a>
                            <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL + getEventUrl(event.date, event.title))}`"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="btn btn-sm btn-outline-primary"
                               aria-label="Share on LinkedIn">
                              <i class="bi bi-linkedin"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4">
                      <router-link :to="getEventUrl(event.date, event.title)">
                        <img
                          :src="event.image"
                          :alt="`${event.title} poster`"
                          class="img-fluid rounded shadow"
                          loading="lazy"
                          itemprop="image"
                        />
                      </router-link>
                    </div>
                  </div>

                  <!-- Events without images (compact layout) -->
                  <div class="card shadow-sm" v-else>
                    <div class="card-body">
                      <h3 class="h5 fw-bold mb-3" itemprop="name">
                        <router-link :to="getEventUrl(event.date, event.title)" class="text-decoration-none">
                          {{ event.title }}
                        </router-link>
                      </h3>
                      <p class="mb-3" itemprop="description">
                        {{ event.description }}
                      </p>

                      <div class="mb-3" v-if="event.instructors && event.instructors.length > 0">
                        <strong>Instructors:</strong>
                        <ul class="mb-0 mt-2">
                          <li v-for="(instructor, idx) in event.instructors" :key="idx" itemprop="performer" itemscope itemtype="https://schema.org/Person">
                            <template v-if="typeof instructor === 'string'">
                              <span itemprop="name">{{ instructor }}</span>
                            </template>
                            <template v-else>
                              <router-link v-if="instructor.profile && !instructor.profile.startsWith('http')"
                                           :to="instructor.profile"
                                           class="text-decoration-none"
                                           itemprop="url">
                                <span itemprop="name">{{ instructor.name }}</span>
                              </router-link>
                              <a v-else-if="instructor.profile"
                                 :href="instructor.profile"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 class="text-decoration-none"
                                 itemprop="url">
                                <span itemprop="name">{{ instructor.name }}</span>
                              </a>
                              <span v-else itemprop="name">{{ instructor.name }}</span>
                            </template>
                          </li>
                        </ul>
                      </div>

                      <div class="mb-2" itemprop="location" itemscope itemtype="https://schema.org/Place">
                        <strong>Location:</strong>
                        <address class="mb-0" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                          <span itemprop="name">{{ event.location.name }}</span>, {{ event.location.address }}
                        </address>
                      </div>

                      <div class="mb-2">
                        <strong>Time:</strong>
                        <time :datetime="event.time.start">{{ formatTime(event.time.start) }}</time> -
                        <time itemprop="endDate" :datetime="`${formatDateISO(event.date)}T${event.time.end}:00+00:00`">{{ formatTime(event.time.end) }}</time>
                      </div>

                      <div v-if="event.price">
                        <strong>Prices:</strong>
                        <div>{{ event.price }}</div>
                      </div>

                      <!-- CTA Buttons -->
                      <div class="mt-4 pt-3 border-top d-flex gap-2 flex-wrap">
                        <router-link :to="getEventUrl(event.date, event.title)" class="btn btn-primary btn-sm">
                          <i class="bi bi-info-circle me-1"></i>View Full Details
                        </router-link>
                        <a :href="generateICalLink(event)"
                           :download="`${createSlug(event.title)}.ics`"
                           class="btn btn-outline-success btn-sm">
                          <i class="bi bi-calendar-plus me-1"></i>Add to Calendar
                        </a>
                      </div>

                      <!-- Social Sharing -->
                      <div class="mt-3 pt-3 border-top">
                        <small class="text-muted me-3">Share this event:</small>
                        <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL + getEventUrl(event.date, event.title))}`"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="btn btn-sm btn-outline-primary me-2"
                           aria-label="Share on Facebook">
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(SITE_URL + getEventUrl(event.date, event.title))}&text=${encodeURIComponent(event.title)}`"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="btn btn-sm btn-outline-info me-2"
                           aria-label="Share on Twitter">
                          <i class="bi bi-twitter-x"></i>
                        </a>
                        <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL + getEventUrl(event.date, event.title))}`"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="btn btn-sm btn-outline-primary"
                           aria-label="Share on LinkedIn">
                          <i class="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- No Upcoming Events Message -->
            <div v-else class="alert alert-info mb-5">
              <h3 class="h5 mb-2">No Upcoming Events Currently Scheduled</h3>
              <p class="mb-0">Check back soon for new aikido courses and events, or view our past events below to see what we've been up to.</p>
            </div>

            <!-- Past Events Section -->
            <div v-if="pastEvents.length > 0" id="past-events">
              <h2 class="h3 fw-bold mb-4 text-secondary">
                <i class="bi bi-archive me-2"></i>Past Events ({{ pastEvents.length }})
              </h2>
              <p class="text-muted mb-4">View our previous aikido courses and events.</p>

              <div class="position-relative">
                <!-- Timeline line for past events -->
                <div class="position-absolute top-0 bottom-0 start-0" style="width: 2px; background: #6c757d; margin-left: 12px;"></div>

                <!-- Dynamic Past Event Rendering -->
                <div
                  v-for="event in visiblePastEventsList"
                  :key="event.id"
                  :id="event.id"
                  class="mb-5 position-relative ps-5 opacity-75"
                  itemscope
                  itemtype="https://schema.org/Event"
                  :data-event-type="event.type"
                  data-event-status="past"
                  :data-event-date="formatDateISO(event.date)"
                  :data-event-location="event.location.name"
                >
                  <div class="position-absolute start-0 rounded-circle bg-secondary" style="width: 12px; height: 12px; top: 8px; margin-left: 7px;"></div>
                  <div class="mb-2">
                    <time
                      class="text-muted"
                      itemprop="startDate"
                      :datetime="`${formatDateISO(event.date)}T${event.time.start}:00+00:00`"
                    >{{ event.date }}</time>
                  </div>

                  <div class="row g-3" v-if="event.image">
                    <div class="col-lg-8">
                      <div class="card h-100 shadow-sm">
                        <div class="card-body">
                          <h3 class="h5 fw-bold mb-3 text-muted" itemprop="name">
                            <router-link :to="getEventUrl(event.date, event.title)" class="text-decoration-none">
                              {{ event.title }}
                            </router-link>
                          </h3>
                          <p class="mb-3 text-muted" itemprop="description">
                            {{ event.description }}
                          </p>

                          <div class="mb-3" v-if="event.instructors && event.instructors.length > 0">
                            <strong class="text-muted">Instructors:</strong>
                            <ul class="mb-0 mt-2 text-muted">
                              <li v-for="(instructor, idx) in event.instructors" :key="idx" itemprop="performer" itemscope itemtype="https://schema.org/Person">
                                <template v-if="typeof instructor === 'string'">
                                  <span itemprop="name">{{ instructor }}</span>
                                </template>
                                <template v-else>
                                  <router-link v-if="instructor.profile && !instructor.profile.startsWith('http')"
                                               :to="instructor.profile"
                                               class="text-decoration-none"
                                               itemprop="url">
                                    <span itemprop="name">{{ instructor.name }}</span>
                                  </router-link>
                                  <a v-else-if="instructor.profile"
                                     :href="instructor.profile"
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     class="text-decoration-none"
                                     itemprop="url">
                                    <span itemprop="name">{{ instructor.name }}</span>
                                  </a>
                                  <span v-else itemprop="name">{{ instructor.name }}</span>
                                </template>
                              </li>
                            </ul>
                          </div>

                          <div class="mb-2" itemprop="location" itemscope itemtype="https://schema.org/Place">
                            <strong class="text-muted">Location:</strong>
                            <address class="mb-0 text-muted" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                              <span itemprop="name">{{ event.location.name }}</span>,
                              <span itemprop="streetAddress">{{ event.location.address }}</span>
                            </address>
                          </div>

                          <div class="mb-2">
                            <strong class="text-muted">Time:</strong>
                            <time class="text-muted" :datetime="event.time.start">{{ formatTime(event.time.start) }}</time> -
                            <time class="text-muted" itemprop="endDate" :datetime="`${formatDateISO(event.date)}T${event.time.end}:00+00:00`">{{ formatTime(event.time.end) }}</time>
                          </div>

                          <div v-if="event.price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                            <strong class="text-muted">Prices:</strong>
                            <div class="text-muted">{{ event.price }}</div>
                          </div>

                          <!-- CTA Buttons for Past Events -->
                          <div class="mt-4 pt-3 border-top d-flex gap-2 flex-wrap">
                            <router-link :to="getEventUrl(event.date, event.title)" class="btn btn-outline-secondary btn-sm">
                              <i class="bi bi-info-circle me-1"></i>View Event Details
                            </router-link>
                          </div>

                          <!-- Social Sharing for Past Events -->
                          <div class="mt-3 pt-3 border-top">
                            <small class="text-muted me-3">Share this event:</small>
                            <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL + getEventUrl(event.date, event.title))}`"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="btn btn-sm btn-outline-secondary me-2"
                               aria-label="Share on Facebook">
                              <i class="bi bi-facebook"></i>
                            </a>
                            <a :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(SITE_URL + getEventUrl(event.date, event.title))}&text=${encodeURIComponent(event.title)}`"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="btn btn-sm btn-outline-secondary me-2"
                               aria-label="Share on Twitter">
                              <i class="bi bi-twitter-x"></i>
                            </a>
                            <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL + getEventUrl(event.date, event.title))}`"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="btn btn-sm btn-outline-secondary"
                               aria-label="Share on LinkedIn">
                              <i class="bi bi-linkedin"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4">
                      <router-link :to="getEventUrl(event.date, event.title)">
                        <img
                          :src="event.image"
                          :alt="`${event.title} poster`"
                          class="img-fluid rounded shadow"
                          loading="lazy"
                          itemprop="image"
                        />
                      </router-link>
                    </div>
                  </div>

                  <!-- Events without images (compact layout) -->
                  <div class="card shadow-sm" v-else>
                    <div class="card-body">
                      <h3 class="h5 fw-bold mb-3 text-muted" itemprop="name">
                        <router-link :to="getEventUrl(event.date, event.title)" class="text-decoration-none">
                          {{ event.title }}
                        </router-link>
                      </h3>
                      <p class="mb-3 text-muted" itemprop="description">
                        {{ event.description }}
                      </p>

                      <div class="mb-3" v-if="event.instructors && event.instructors.length > 0">
                        <strong class="text-muted">Instructors:</strong>
                        <ul class="mb-0 mt-2 text-muted">
                          <li v-for="(instructor, idx) in event.instructors" :key="idx" itemprop="performer" itemscope itemtype="https://schema.org/Person">
                            <template v-if="typeof instructor === 'string'">
                              <span itemprop="name">{{ instructor }}</span>
                            </template>
                            <template v-else>
                              <router-link v-if="instructor.profile && !instructor.profile.startsWith('http')"
                                           :to="instructor.profile"
                                           class="text-decoration-none"
                                           itemprop="url">
                                <span itemprop="name">{{ instructor.name }}</span>
                              </router-link>
                              <a v-else-if="instructor.profile"
                                 :href="instructor.profile"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 class="text-decoration-none"
                                 itemprop="url">
                                <span itemprop="name">{{ instructor.name }}</span>
                              </a>
                              <span v-else itemprop="name">{{ instructor.name }}</span>
                            </template>
                          </li>
                        </ul>
                      </div>

                      <div class="mb-2" itemprop="location" itemscope itemtype="https://schema.org/Place">
                        <strong class="text-muted">Location:</strong>
                        <address class="mb-0 text-muted" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                          <span itemprop="name">{{ event.location.name }}</span>, {{ event.location.address }}
                        </address>
                      </div>

                      <div class="mb-2">
                        <strong class="text-muted">Time:</strong>
                        <time class="text-muted" :datetime="event.time.start">{{ formatTime(event.time.start) }}</time> -
                        <time class="text-muted" itemprop="endDate" :datetime="`${formatDateISO(event.date)}T${event.time.end}:00+00:00`">{{ formatTime(event.time.end) }}</time>
                      </div>

                      <div v-if="event.price">
                        <strong class="text-muted">Prices:</strong>
                        <div class="text-muted">{{ event.price }}</div>
                      </div>

                      <!-- CTA Buttons for Past Events -->
                      <div class="mt-4 pt-3 border-top d-flex gap-2 flex-wrap">
                        <router-link :to="getEventUrl(event.date, event.title)" class="btn btn-outline-secondary btn-sm">
                          <i class="bi bi-info-circle me-1"></i>View Event Details
                        </router-link>
                      </div>

                      <!-- Social Sharing for Past Events -->
                      <div class="mt-3 pt-3 border-top">
                        <small class="text-muted me-3">Share this event:</small>
                        <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL + getEventUrl(event.date, event.title))}`"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="btn btn-sm btn-outline-secondary me-2"
                           aria-label="Share on Facebook">
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(SITE_URL + getEventUrl(event.date, event.title))}&text=${encodeURIComponent(event.title)}`"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="btn btn-sm btn-outline-secondary me-2"
                           aria-label="Share on Twitter">
                          <i class="bi bi-twitter-x"></i>
                        </a>
                        <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL + getEventUrl(event.date, event.title))}`"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="btn btn-sm btn-outline-secondary"
                           aria-label="Share on LinkedIn">
                          <i class="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Load More Button for Past Events -->
            <div v-if="hasMorePastEvents" class="text-center mt-5">
              <button @click="loadMorePastEvents" class="btn btn-outline-secondary btn-lg">
                <i class="bi bi-arrow-down-circle me-2"></i>
                Load More Past Events ({{ pastEvents.length - visiblePastEvents }} remaining)
              </button>
            </div>
          </div>

        </div>

        <!-- FAQ Section for SEO -->
        <div class="row mt-5">
          <div class="col-lg-10 mx-auto">
            <h2 class="h3 text-center mb-4">Frequently Asked Questions About Aikido Events in Leicester</h2>
            <div class="accordion" id="eventsAccordion">

              <div class="accordion-item">
                <h3 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What aikido courses are available in Leicester?
                  </button>
                </h3>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#eventsAccordion">
                  <div class="accordion-body">
                    Leicester Aikikai offers various aikido courses in Leicester including beginner's courses, regular training sessions, specialist seminars, and collaborative events with other dojos in the East Midlands. We host aikido events at Aylestone Leisure Centre and welcome students of all levels.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Where do aikido events take place in Leicester?
                  </button>
                </h3>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#eventsAccordion">
                  <div class="accordion-body">
                    Most of our aikido events in Leicester are held at <strong>Aylestone Leisure Centre</strong>, located at 2 Knighton Lane East, Leicester, LE2 6LU. We also collaborate with nearby dojos including Melton Byakko-Kan Aikido and participate in regional events across the East Midlands.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How can I join an aikido course in Leicester?
                  </button>
                </h3>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#eventsAccordion">
                  <div class="accordion-body">
                    To join an aikido course in Leicester, check our events list above for upcoming courses and contact Leicester Aikikai through our website. We regularly run beginner's courses and welcome new students. Most events are open to practitioners from other dojos as well.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    What should I expect at aikido events in Leicester?
                  </button>
                </h3>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#eventsAccordion">
                  <div class="accordion-body">
                    Aikido events in Leicester typically feature traditional Aikikai aikido training with experienced instructors. Courses cover fundamental techniques, ukemi (falling), self-defence applications, and sometimes weapons training. Events range from 2-4 hours and are suitable for various skill levels.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Are aikido courses in Leicester suitable for beginners?
                  </button>
                </h3>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#eventsAccordion">
                  <div class="accordion-body">
                    Yes! Leicester Aikikai regularly offers beginner-friendly aikido courses in Leicester. We run specific beginner's courses throughout the year, and many of our events welcome practitioners of all levels. Check the events list for beginner's courses or contact us for more information.
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
import { setMeta, setJsonLd, SITE_URL, getOrganizationSchema } from '../utils/seo.js'
import { events } from '../data/events.js'

export default {
  name: 'Events',
  data() {
    return {
      // Image paths from public folder
      byakkoKan2025Image: '/img/Byakko-kan-joint-aikido-course-december-2025.jpg',
      byakkoKan2023Image: '/img/Byakko-kan-joint-aikido-course-december-2023.jpg',
      antonisPavlakisIainCooperImage: '/img/antonis-pavlakis-with-iain-cooper.webp',
      events: events,
      visiblePastEvents: 5 // Show 5 past events initially
    }
  },
  computed: {
    singleEvent() {
      // Check if we're viewing a single event based on route params
      if (this.$route.params.date && this.$route.params.title) {
        const eventDate = this.$route.params.date // YYYY-MM-DD format
        const eventTitle = this.$route.params.title

        // Find event matching the date
        return this.events.find(event => {
          const formattedDate = this.formatDateISO(event.date)
          return formattedDate === eventDate
        })
      }
      return null
    },
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
    },
    upcomingEvents() {
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      return this.events
        .filter(event => {
          const eventDate = this.parseDate(event.date)
          return eventDate >= today
        })
        .map(event => ({
          ...event,
          isPast: false
        }))
    },
    pastEvents() {
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      return this.events
        .filter(event => {
          const eventDate = this.parseDate(event.date)
          return eventDate < today
        })
        .map(event => ({
          ...event,
          isPast: true
        }))
    },
    visiblePastEventsList() {
      return this.pastEvents.slice(0, this.visiblePastEvents)
    },
    hasMorePastEvents() {
      return this.pastEvents.length > this.visiblePastEvents
    }
  },
  methods: {
    parseDate(dateStr) {
      // Parse DD.MM.YYYY format
      const parts = dateStr.split('.')
      return new Date(parts[2], parts[1] - 1, parts[0])
    },
    formatDateISO(dateStr) {
      // Convert DD.MM.YYYY to YYYY-MM-DD
      const parts = dateStr.split('.')
      const year = parts[2]
      const month = parts[1].padStart(2, '0')
      const day = parts[0].padStart(2, '0')
      return `${year}-${month}-${day}`
    },
    isEventPast(dateStr) {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const eventDate = this.parseDate(dateStr)
      return eventDate < today
    },
    formatDateForDisplay(dateStr) {
      // Convert DD.MM.YYYY to readable format: "14 November 2025"
      const date = this.parseDate(dateStr)
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return date.toLocaleDateString('en-GB', options)
    },
    formatTime(timeStr) {
      // Convert 24h time to 12h format: "19:00" to "7:00pm"
      const [hours, minutes] = timeStr.split(':')
      const hour = parseInt(hours)
      const ampm = hour >= 12 ? 'pm' : 'am'
      const displayHour = hour % 12 || 12
      return `${displayHour}:${minutes}${ampm}`
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
    getEventUrl(date, title) {
      const formattedDate = this.formatDateForUrl(date)
      const slug = this.createSlug(title)
      return `/events/${formattedDate}/${slug}`
    },
    getEventImage(event) {
      // Return event image if it exists, otherwise use default fallback
      return event.image || '/img/end-of-class-leicester-aikikai-and-guests.jpeg'
    },
    /**
     * Parse complex pricing strings into structured offer data
     * Examples:
     * "£15" -> Single offer
     * "£20 adults, £15 concessions" -> Multiple offers
     * "Adults - £20, Concession - £15, Under 18's - £12" -> Multiple offers
     */
    parseEventPricing(priceString, eventUrl, isPast) {
      if (!priceString) return undefined

      // Simple price (single number)
      const simpleMatch = priceString.match(/^£?(\d+)$/)
      if (simpleMatch) {
        return {
          '@type': 'Offer',
          'url': eventUrl,
          'price': simpleMatch[1],
          'priceCurrency': 'GBP',
          'availability': isPast ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock',
          'validFrom': new Date().toISOString()
        }
      }

      // Complex pricing with multiple tiers
      // Match patterns like "£20 adults", "Adults - £15", "Under 18's - £12"
      const pricePattern = /([^,]+?)[-:\s]*£(\d+)/g
      const matches = [...priceString.matchAll(pricePattern)]

      if (matches.length > 1) {
        // Multiple price tiers found - return array of offers
        return matches.map(match => {
          const category = match[1].trim().replace(/^(.*?)\s*-\s*$/, '$1').trim()
          const price = match[2]

          return {
            '@type': 'Offer',
            'name': category.charAt(0).toUpperCase() + category.slice(1),
            'url': eventUrl,
            'price': price,
            'priceCurrency': 'GBP',
            'availability': isPast ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock',
            'validFrom': new Date().toISOString()
          }
        })
      }

      // Fallback: extract first price found
      const firstPrice = priceString.replace('£', '').split(/[,\s]/)[0]
      return {
        '@type': 'Offer',
        'url': eventUrl,
        'price': firstPrice,
        'priceCurrency': 'GBP',
        'availability': isPast ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock',
        'validFrom': new Date().toISOString()
      }
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
    },
    loadMorePastEvents() {
      this.visiblePastEvents += 5
    },
    generateICalLink(event) {
      // Generate iCal format for calendar export
      const eventDate = this.parseDate(event.date)
      const startDateTime = `${this.formatDateISO(event.date).replace(/-/g, '')}T${event.time.start.replace(':', '')}00`
      const endDateTime = `${this.formatDateISO(event.date).replace(/-/g, '')}T${event.time.end.replace(':', '')}00`

      const icalContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Leicester Aikikai//Events//EN',
        'BEGIN:VEVENT',
        `UID:${event.id}@leicesteraikikai.com`,
        `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
        `DTSTART:${startDateTime}`,
        `DTEND:${endDateTime}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
        `LOCATION:${event.location.name}, ${event.location.address}`,
        `URL:${SITE_URL}${this.getEventUrl(event.date, event.title)}`,
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n')

      const blob = new Blob([icalContent], { type: 'text/calendar;charset=utf-8' })
      return URL.createObjectURL(blob)
    }
  },
  mounted() {
    // Check if viewing single event or events list
    if (this.singleEvent) {
      // Single event SEO
      setMeta({
        title: `${this.singleEvent.title} | Leicester Aikikai Dojo`,
        description: `${this.singleEvent.description} Join us at ${this.singleEvent.location.name} for this aikido course.`,
        keywords: `${this.singleEvent.title}, aikido event, Leicester aikido, ${this.singleEvent.location.name}`,
        url: `${SITE_URL}/events/${this.formatDateISO(this.singleEvent.date)}/${this.createSlug(this.singleEvent.title)}`,
        image: `${SITE_URL}${this.singleEvent.image}`,
        type: 'article',
        'article:published_time': this.formatDateISO(this.singleEvent.date),
        'article:section': 'Events',
        'og:locale': 'en_GB',
        'og:site_name': 'Leicester Aikikai Dojo'
      })

      // Single event structured data
      const eventDate = this.parseDate(this.singleEvent.date)
      const isPast = eventDate < new Date()
      const isoDate = this.formatDateISO(this.singleEvent.date)

      const eventUrl = `${SITE_URL}/events/${this.formatDateISO(this.singleEvent.date)}/${this.createSlug(this.singleEvent.title)}`
      const eventImageUrl = this.singleEvent.image ? `${SITE_URL}${this.singleEvent.image}` : `${SITE_URL}/img/leicester-aikikai-dojo-hall.jpg`

      setJsonLd([
        {
          '@context': 'https://schema.org',
          '@type': 'Event',
          'name': this.singleEvent.title,
          'description': this.singleEvent.description,
          'url': eventUrl,
          'startDate': `${isoDate}T${this.singleEvent.time.start}:00+00:00`,
          'endDate': `${isoDate}T${this.singleEvent.time.end}:00+00:00`,
          'eventStatus': 'https://schema.org/EventScheduled',
          'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
          'image': [eventImageUrl],
          'location': {
            '@type': 'Place',
            'name': this.singleEvent.location.name,
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': this.singleEvent.location.address.split(',')[0],
              'addressLocality': this.singleEvent.location.address.includes('Leicester') ? 'Leicester' : 'UK',
              'postalCode': this.singleEvent.location.address.match(/[A-Z]{1,2}\d{1,2}\s?\d[A-Z]{2}/)?.[0] || '',
              'addressCountry': 'GB'
            }
          },
          'organizer': {
            '@type': 'SportsOrganization',
            'name': 'Leicester Aikikai Dojo',
            'url': SITE_URL
          },
          'performer': (this.singleEvent.instructors || []).map(instructor => {
            const instructorName = typeof instructor === 'string' ? instructor : instructor.name
            return {
              '@type': 'Person',
              'name': instructorName
            }
          }),
          'offers': this.parseEventPricing(this.singleEvent.price, eventUrl, isPast)
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
              'name': 'Events',
              'item': `${SITE_URL}/events`
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': this.singleEvent.title,
              'item': `${SITE_URL}/events/${this.formatDateISO(this.singleEvent.date)}/${this.createSlug(this.singleEvent.title)}`
            }
          ]
        }
      ])
    } else {
      // Events list SEO (original code)
      const upcomingCount = this.upcomingEvents.length
      const nextEvent = this.upcomingEvents[0]

      const pageTitle = upcomingCount > 0
        ? `${upcomingCount} Upcoming Aikido ${upcomingCount === 1 ? 'Event' : 'Events'} in Leicester | Leicester Aikikai`
        : 'Aikido Events in Leicester | Leicester Aikikai Dojo'

      let pageDescription = 'Join aikido events in Leicester. Upcoming aikido courses in Leicester and the East Midlands.'
      if (upcomingCount > 0 && nextEvent) {
        pageDescription = `Join ${upcomingCount} upcoming aikido ${upcomingCount === 1 ? 'course' : 'courses'} in Leicester. Next event: ${nextEvent.title} on ${this.formatDateForDisplay(nextEvent.date)}. Traditional Aikikai training for all levels.`
      } else {
        pageDescription = 'View aikido courses and events in Leicester. Traditional Aikikai training at Leicester Aikikai Dojo. Browse our past events and check back for new courses.'
      }

      setMeta({
        title: pageTitle,
        description: pageDescription,
        keywords: 'aikido events in Leicester, aikido courses in Leicester, aikido training Leicester, aikido seminars Leicester, aikido workshops Leicester, Leicester martial arts events, aikido East Midlands, aikido courses near me, Leicester Aikikai events',
        url: `${SITE_URL}/events`,
        image: `${SITE_URL}/img/antonis-pavlakis-with-iain-cooper.webp`,
        type: 'website',
        // Additional AI-friendly metadata
        'article:section': 'Events',
        'article:tag': 'aikido, martial arts, Leicester, training, courses, seminars',
        'og:locale': 'en_GB',
        'og:site_name': 'Leicester Aikikai Dojo'
      })

      // Scroll to specific event if accessed via direct URL
      this.scrollToEvent()

      // Generate comprehensive structured data optimized for AI/LLMs
      const eventSchemas = this.events.map(event => {
      const eventDate = this.parseDate(event.date)
      const isPast = eventDate < new Date()
      const isoDate = this.formatDateISO(event.date)
      const isLeicesterEvent = event.location.address.includes('Leicester')
      const eventUrl = `${SITE_URL}/events/${isoDate}/${this.createSlug(event.title)}`
      const eventImageUrl = event.image ? `${SITE_URL}${event.image}` : `${SITE_URL}/img/leicester-aikikai-dojo-hall.jpg`

      return {
        '@context': 'https://schema.org',
        '@type': 'Event',
        'name': event.title,
        'description': event.description,
        'url': eventUrl,
        'startDate': `${isoDate}T${event.time.start}:00+00:00`,
        'endDate': `${isoDate}T${event.time.end}:00+00:00`,
        'eventStatus': 'https://schema.org/EventScheduled',
        'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
        'image': [eventImageUrl],
        'inLanguage': 'en-GB',
        'keywords': [
          'aikido',
          'martial arts',
          event.type === 'course' ? 'aikido course' : 'aikido event',
          isLeicesterEvent ? 'Leicester' : event.location.address.split(',').pop().trim(),
          'traditional aikido',
          'aikido training',
          'Aikikai'
        ].join(', '),
        'about': {
          '@type': 'Thing',
          'name': 'Aikido',
          'description': 'Traditional Japanese martial art focusing on harmony and self-defence'
        },
        'location': {
          '@type': 'Place',
          'name': event.location.name,
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': event.location.address.split(',')[0],
            'addressLocality': isLeicesterEvent ? 'Leicester' : event.location.address.split(',').find(part => part.includes('Melton') || part.includes('Hull'))?.trim() || 'Leicester',
            'addressRegion': event.location.address.includes('Hull') ? 'East Yorkshire' : 'Leicestershire',
            'postalCode': event.location.address.match(/[A-Z]{1,2}\d{1,2}\s?\d[A-Z]{2}/)?.[0] || '',
            'addressCountry': 'GB'
          }
        },
        'organizer': {
          '@type': 'SportsOrganization',
          'name': 'Leicester Aikikai Dojo',
          'url': SITE_URL,
          'sameAs': [
            'https://www.facebook.com/LeicesterAikikai'
          ],
          'sport': 'Aikido'
        },
        'performer': event.instructors.map(instructor => {
          const instructorName = typeof instructor === 'string' ? instructor : instructor.name
          const instructorProfile = typeof instructor === 'object' && instructor.profile ? instructor.profile : null

          const performerSchema = {
            '@type': 'Person',
            'name': instructorName,
            'jobTitle': 'Aikido Instructor',
            'memberOf': {
              '@type': 'Organization',
              'name': 'Leicester Aikikai Dojo'
            }
          }

          if (instructorProfile) {
            performerSchema.url = instructorProfile.startsWith('http') ? instructorProfile : `${SITE_URL}${instructorProfile}`
          }

          return performerSchema
        }),
        'offers': this.parseEventPricing(event.price, eventUrl, isPast),
        'isAccessibleForFree': false,
        'audience': {
          '@type': 'Audience',
          'audienceType': 'All levels welcome - beginners to advanced practitioners'
        }
      }
    })

    // Add ItemList for events with enhanced metadata
    const eventsListSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Leicester Aikikai Aikido Events',
      'description': 'Comprehensive list of aikido events, courses and seminars at Leicester Aikikai Dojo and partner venues',
      'numberOfItems': this.events.length,
      'itemListElement': this.events.map((event, index) => {
        const isoDate = this.formatDateISO(event.date)
        const eventUrl = `${SITE_URL}/events/${isoDate}/${this.createSlug(event.title)}`
        return {
          '@type': 'ListItem',
          'position': index + 1,
          'item': {
            '@type': 'Event',
            'name': event.title,
            'description': event.description,
            'url': eventUrl,
            'startDate': `${isoDate}T${event.time.start}:00+00:00`,
            'location': {
              '@type': 'Place',
              'name': event.location.name
            }
          }
        }
      })
    }

    // Add EventSeries schema for AI understanding of recurring event pattern
    const eventSeriesSchema = {
      '@context': 'https://schema.org',
      '@type': 'EventSeries',
      'name': 'Leicester Aikikai Regular Events',
      'description': 'Regular aikido training events, courses, and seminars hosted by Leicester Aikikai in Leicester and the East Midlands',
      'organizer': {
        '@type': 'SportsOrganization',
        'name': 'Leicester Aikikai Dojo',
        'url': SITE_URL,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Leicester',
          'addressRegion': 'Leicestershire',
          'addressCountry': 'GB'
        }
      },
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
      },
      'sport': 'Aikido'
    }

    // Add BreadcrumbList for navigation
    const breadcrumbSchema = {
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
          'name': 'Events',
          'item': `${SITE_URL}/events`
        }
      ]
    }

    // Add FAQPage schema for better SEO
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What aikido courses are available in Leicester?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Leicester Aikikai offers various aikido courses in Leicester including beginner\'s courses, regular training sessions, specialist seminars, and collaborative events with other dojos in the East Midlands. We host aikido events at Aylestone Leisure Centre and welcome students of all levels.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Where do aikido events take place in Leicester?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Most of our aikido events in Leicester are held at Aylestone Leisure Centre, located at 2 Knighton Lane East, Leicester, LE2 6LU. We also collaborate with nearby dojos including Melton Byakko-Kan Aikido and participate in regional events across the East Midlands.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How can I join an aikido course in Leicester?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'To join an aikido course in Leicester, check our events list above for upcoming courses and contact Leicester Aikikai through our website. We regularly run beginner\'s courses and welcome new students. Most events are open to practitioners from other dojos as well.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What should I expect at aikido events in Leicester?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Aikido events in Leicester typically feature traditional Aikikai aikido training with experienced instructors. Courses cover fundamental techniques, ukemi (falling), self-defence applications, and sometimes weapons training. Events range from 2-4 hours and are suitable for various skill levels.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Are aikido courses in Leicester suitable for beginners?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes! Leicester Aikikai regularly offers beginner-friendly aikido courses in Leicester. We run specific beginner\'s courses throughout the year, and many of our events welcome practitioners of all levels.'
          }
        }
      ]
    }

    // Set all structured data optimized for AI/LLMs
    setJsonLd([
      getOrganizationSchema(),
      ...eventSchemas,
      eventsListSchema,
      eventSeriesSchema,
      breadcrumbSchema,
      faqSchema
    ])
    }
  }
}
</script>

<style scoped>
/* Component specific styles */

/* Ensure back buttons are clickable in single event view */
.btn-primary,
.btn-light {
  position: relative;
  z-index: 10;
  pointer-events: auto;
}

/* Ensure opacity on past events doesn't affect button clickability */
.opacity-75 .btn {
  opacity: 1;
  pointer-events: auto;
}
</style>

