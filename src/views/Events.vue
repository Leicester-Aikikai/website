<template>
  <div class="events">
    <!-- Hero Section -->
    <section class="hero-section" role="banner">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5 mb-4 mb-md-0">
            <p class="text-uppercase mb-3 opacity-75">Welcome - はじめまして</p>
            <h1 class="display-3 fw-bold mb-4">Aikido Events in Leicester</h1>
            <p class="lead mb-4">
              Discover upcoming aikido courses in Leicester and the East Midlands. Join us for traditional aikido training, seminars, and special events led by experienced instructors.
            </p>
          </div>
          <div class="col-md-7 text-center">
            <img
              src="/img/antonis-pavlakis-with-iain-cooper.webp"
              alt="Aikido instructors Antonis Pavlakis and Iain Cooper at Leicester Aikikai dojo event"
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

    <!-- Events List Section -->
    <main id="main-content" class="py-5 bg-light">
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
                          <a :href="byakkoKan2025Image" target="_blank" class="text-decoration-none">
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
                      src="/img/Byakko-kan-joint-aikido-course-december-2025.jpg"
                      alt="Joint course with Melton Byakko-Kan Aikido poster December 2025"
                      class="img-fluid rounded shadow"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <!-- Event - November 2025 -->
              <div id="event-2025-11-22" class="mb-5 position-relative ps-5" :class="{ 'opacity-75': isEventPast('22.11.2025') }">
                <div class="position-absolute start-0 rounded-circle" :class="isEventPast('22.11.2025') ? 'bg-secondary' : 'bg-primary'" style="width: 12px; height: 12px; top: 8px; margin-left: 7px;"></div>
                <div class="mb-2">
                  <time :class="isEventPast('22.11.2025') ? 'text-muted' : 'fw-bold text-primary'">22.11.2025</time>
                </div>
                <div class="card shadow-sm">
                  <div class="card-body">
                    <h3 class="h5 fw-bold mb-3" :class="{ 'text-muted': isEventPast('22.11.2025') }">Aikido Course at Fight Ministry Hull</h3>
                    <p class="mb-3" :class="isEventPast('22.11.2025') ? 'text-muted' : ''">
                      Aikido course at Fight Ministry in Hull with instructors Philip Smith shihan.
                    </p>

                    <div class="mb-3">
                      <strong :class="{ 'text-muted': isEventPast('22.11.2025') }">Instructors:</strong>
                      <ul class="mb-0 mt-2" :class="{ 'text-muted': isEventPast('22.11.2025') }">
                        <li>Philip Smith</li>
                        <li>Antonis Pavlakis</li>
                      </ul>
                    </div>

                    <div class="mb-3">
                      <strong :class="{ 'text-muted': isEventPast('22.11.2025') }">Location:</strong>
                      <address class="mb-0 mt-1" :class="{ 'text-muted': isEventPast('22.11.2025') }">Fight Ministry, Salisbury Hall, 1 Park Rd, Hull, HU3 1TD</address>
                    </div>

                    <div class="mb-3">
                      <strong :class="{ 'text-muted': isEventPast('22.11.2025') }">Time:</strong> <time :class="{ 'text-muted': isEventPast('22.11.2025') }">2pm - 5pm</time>
                    </div>
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
                          <a :href="byakkoKan2023Image" target="_blank" class="text-decoration-none">
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
                      src="/img/Byakko-kan-joint-aikido-course-december-2023.jpg"
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

export default {
  name: 'Events',
  data() {
    return {
      // Image paths from public folder
      byakkoKan2025Image: '/img/Byakko-kan-joint-aikido-course-december-2025.jpg',
      byakkoKan2023Image: '/img/Byakko-kan-joint-aikido-course-december-2023.jpg',
      antonisPavlakisIainCooperImage: '/img/antonis-pavlakis-with-iain-cooper.webp',
      events: [
        {
          date: '14.12.2025',
          title: 'Xmas 2025 course with Melton Byakko-Kan Aikido',
          description: 'A joint aikido course at the Melton Byakko-Kan Aikido dojo featuring instructors Naoko Suzuki, Sergio Cardoso, Antonis Pavlakis, and Terry Mickowski.',
          type: 'course',
          id: 'event-2025-12-14',
          image: '/img/Byakko-kan-joint-aikido-course-december-2025.jpg',
          location: {
            name: 'Jubilee Sports Centre',
            address: 'Jubilee Street, Melton Mowbray, Leicestershire, LE13 1ND'
          },
          time: {
            start: '10:30',
            end: '14:30'
          },
          price: '£10',
          instructors: ['Naoko Suzuki', 'Sergio Cardoso', 'Antonis Pavlakis', 'Terry Mickowski']
        },
        {
          date: '22.11.2025',
          title: 'Aikido Course at Fight Ministry Hull',
          description: 'Aikido course at Fight Ministry in Hull with instructors Philip Smith sensei and Antonis Pavlakis sensei.',
          type: 'course',
          id: 'event-2025-11-22',
          image: '/img/leicester-aikikai-dojo-hall.jpg',
          location: {
            name: 'Fight Ministry',
            address: 'Salisbury Hall, 1 Park Rd, Hull, HU3 1TD'
          },
          time: {
            start: '14:00',
            end: '17:00'
          },
          instructors: ['Philip Smith', 'Antonis Pavlakis']
        },
        {
          date: '10.12.2023',
          title: 'Joint course with Melton Byakko-Kan Aikido',
          description: 'A joint aikido course at the Melton Byakko-Kan Aikido dojo with guest instructors including Naoko Suzuki sensei, Terry Mickowski sensei, Andy Thompson sensei, and Antonis Pavlakis sensei.',
          type: 'course',
          id: 'event-2023-12-10',
          image: '/img/Byakko-kan-joint-aikido-course-december-2023.jpg',
          location: {
            name: 'Jubilee Sports Centre',
            address: 'Jubilee Street, Melton Mowbray, Leicestershire, LE13 1ND'
          },
          time: {
            start: '11:00',
            end: '15:00'
          },
          price: '£20',
          instructors: ['Naoko Suzuki', 'Terry Mickowski', 'Andy Thompson', 'Antonis Pavlakis']
        },
        {
          date: '22.10.2023',
          title: 'Leicester Aikikai Dojo Course - October 2023',
          description: 'Dojo course with guest instructor Iain Cooper sensei 4th dan Fukushidoin at Aylestone Leisure Centre.',
          type: 'course',
          id: 'event-2023-10-22',
          image: '/img/leicester-aikikai-dojo-course-October-2023.jpeg',
          location: {
            name: 'Aylestone Leisure Centre',
            address: '2 Knighton Lane East, Leicester, LE2 6LU'
          },
          time: {
            start: '13:00',
            end: '17:00'
          },
          price: '£15',
          instructors: ['Iain Cooper', 'Antonis Pavlakis']
        },
        {
          date: '15.09.2023',
          title: 'Aikido Beginner\'s Course 2023',
          description: 'Start aikido with a 3-month beginner\'s course. Learn co-ordination, self-improvement, body conditioning, ukemi (falling), self-defence and more.',
          type: 'course',
          id: 'event-2023-09-15',
          image: '/img/leicester-aikikai-bokken-shiko-dachi-circle-exercise.webp',
          location: {
            name: 'Aylestone Leisure Centre',
            address: '2 Knighton Lane East, Leicester, LE2 6LU'
          },
          time: {
            start: '19:00',
            end: '21:00'
          },
          price: '£60',
          instructors: ['Antonis Pavlakis']
        },
        {
          date: '11.06.2023',
          title: 'Dojo 10th year anniversary course',
          description: '10th year anniversary course with guest instructors Ian Grubb 6th dan, Terry Mickowski 4th dan, Iain Cooper 3rd dan, and Antonis Pavlakis 3rd dan.',
          type: 'course',
          id: 'event-2023-06-11',
          image: '/img/leicester-aikikai-10-years-anniversary-course-june-11-2023.JPG',
          location: {
            name: 'Aylestone Leisure Centre',
            address: '2 Knighton Lane East, Leicester, LE2 6LU'
          },
          time: {
            start: '13:00',
            end: '17:00'
          },
          price: '£15',
          instructors: ['Ian Grubb', 'Terry Mickowski', 'Iain Cooper', 'Antonis Pavlakis']
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
    // Set meta tags for SEO and social media
    setMeta({
      title: 'Aikido Events in Leicester | Courses & Training at Leicester Aikikai',
      description: 'Join aikido events in Leicester. Upcoming aikido courses in Leicester and the East Midlands. Traditional aikido training, seminars, and workshops with expert instructors at Leicester Aikikai Dojo.',
      keywords: 'aikido events in Leicester, aikido courses in Leicester, aikido training Leicester, aikido seminars Leicester, aikido workshops Leicester, Leicester martial arts events, aikido East Midlands, aikido courses near me, Leicester Aikikai events',
      url: `${SITE_URL}/events`,
      image: `${SITE_URL}/img/antonis-pavlakis-with-iain-cooper.webp`,
      type: 'website'
    })

    // Scroll to specific event if accessed via direct URL
    this.scrollToEvent()

    // Generate comprehensive structured data
    const eventSchemas = this.events.map(event => {
      const eventDate = this.parseDate(event.date)
      const isPast = eventDate < new Date()
      const isoDate = this.formatDateISO(event.date)

      return {
        '@context': 'https://schema.org',
        '@type': 'Event',
        'name': event.title,
        'description': event.description,
        'startDate': `${isoDate}T${event.time.start}:00`,
        'endDate': `${isoDate}T${event.time.end}:00`,
        'eventStatus': isPast ? 'https://schema.org/EventScheduled' : 'https://schema.org/EventScheduled',
        'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
        'image': event.image ? `${SITE_URL}${event.image}` : `${SITE_URL}/img/leicester-aikikai-dojo-hall.jpg`,
        'location': {
          '@type': 'Place',
          'name': event.location.name,
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': event.location.address.split(',')[0],
            'addressLocality': event.location.address.includes('Leicester') ? 'Leicester' : 'Melton Mowbray',
            'addressRegion': 'Leicestershire',
            'postalCode': event.location.address.match(/[A-Z]{1,2}\d{1,2}\s?\d[A-Z]{2}/)?.[0] || '',
            'addressCountry': 'GB'
          }
        },
        'organizer': {
          '@type': 'Organization',
          'name': 'Leicester Aikikai Dojo',
          'url': SITE_URL
        },
        'performer': event.instructors.map(instructor => ({
          '@type': 'Person',
          'name': instructor
        })),
        'offers': {
          '@type': 'Offer',
          'price': event.price.replace('£', ''),
          'priceCurrency': 'GBP',
          'availability': isPast ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock',
          'url': `${SITE_URL}/events`
        }
      }
    })

    // Add ItemList for events
    const eventsListSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Leicester Aikikai Aikido Events',
      'description': 'List of aikido events, courses and seminars at Leicester Aikikai Dojo',
      'numberOfItems': this.events.length,
      'itemListElement': this.events.map((event, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'Event',
          'name': event.title,
          'description': event.description,
          'startDate': `${this.formatDateISO(event.date)}T${event.time.start}:00`,
          'url': `${SITE_URL}/events#${event.id}`
        }
      }))
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

    // Set all structured data
    setJsonLd([
      getOrganizationSchema(),
      ...eventSchemas,
      eventsListSchema,
      breadcrumbSchema,
      faqSchema
    ])
  }
}
</script>

<style scoped>
/* Component specific styles */
</style>

