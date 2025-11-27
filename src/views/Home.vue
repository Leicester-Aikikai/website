<template>
  <div class="home">
    <!-- Skip link for accessibility -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Hero Section -->
    <section class="hero-section" role="banner">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5 mb-4 mb-md-0">
            <p class="text-uppercase mb-3 opacity-75">Welcome - はじめまして</p>
            <h1 class="display-3 fw-bold mb-4">Learn Aikido</h1>
            <p class="lead mb-4">
              Join us to learn this non-competitive martial art that uses the opponent's strength against them.
            </p>
            <a href="#our-journey" class="btn btn-light btn-lg rounded-pill px-4 shadow">
              Our Journey So Far
            </a>
          </div>
          <div class="col-md-7 text-center">
            <img
              src="/img/leicester-aikikai-aylestone-leisure-centre.jpeg"
              alt="Leicester Aikikai at Aylestone Leisure Centre"
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
      <!-- Our Journey Section -->
      <section id="our-journey" class="py-5">
        <div class="container">
          <h2 class="section-title text-center">Our Journey So Far</h2>
          <div class="section-divider"></div>

          <div class="row">
            <div class="col-12">
              <p class="text-muted mb-3">
                We started the club in May 2013 with the main aim to ensure that everyone is always welcome to join and train with us in a friendly environment.
              </p>

              <p class="text-muted mb-3">
                Since then, we've had people of all ages training with us. We've also had guest instructors coming to teach from all over the country and different
                associations, including UK Aikikai (UKA), British Aikikai (BA), British Birankai (BB) and British Aikido Federation (BAF).
              </p>

              <div class="row g-3 my-4">
                <div class="col-12">
                  <img
                    src="/img/leicester-aikikai-joint-course-march-17th-2024.webp"
                    alt="Leicester Aikikai - March 2024"
                    class="img-fluid rounded shadow"
                    loading="lazy"
                  />
                </div>
                <div class="col-md-6">
                  <img
                    src="/img/leicester-aikikai-group-selfie-august-2019.jpg"
                    alt="Leicester Aikikai group selfie - August 2019"
                    class="img-fluid rounded shadow"
                    loading="lazy"
                  />
                </div>
                <div class="col-md-6">
                  <img
                    src="/img/leicester-aikikai-july-2019-joe.jpg"
                    alt="Leicester Aikikai training - July 2019"
                    class="img-fluid rounded shadow"
                    loading="lazy"
                  />
                </div>
              </div>

              <p class="text-muted mb-3">
                Leicester Aikikai ( <span title="Leicester Aikikai written in Japanese katakana and kanji">レスター 合気会</span> ) holds a full membership affiliation to
                <a href="https://ukaikikai.org.uk/" target="_blank" rel="noopener noreferrer" title="United Kingdom Aikikai">United Kingdom Aikikai (UKA)</a>
                which is part of the
                <a href="http://jointaikikaicouncil.co.uk/" target="_blank" rel="noopener noreferrer" title="Joint Aikikai Council">Joint Aikikai Council (JAC)</a>;
                all our kyu grades are recognised nationally and the dan grades internationally.
              </p>

              <p class="text-muted mb-4">
                We teach traditional aikido (aikikai).
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Instructor Section -->
      <section id="the-instructor" class="text-white py-5" style="background: linear-gradient(90deg, #2465c7 0%, #525bd3 100%); padding-bottom: 100px !important;" itemscope itemtype="https://schema.org/Person">
        <div class="container">
          <h2 class="display-5 fw-bold text-center mb-4">Chief Instructor</h2>
          <div style="height: 4px; width: 64px; background: white; opacity: 0.5; margin: 0 auto 3rem;"></div>

          <div class="row align-items-center">
            <div class="col-md-6 mb-4 mb-md-0">
              <h3 class="h3 fw-bold mb-3" itemprop="name">
                <router-link to="/instructors/antonis-pavlakis" class="text-white text-decoration-none">
                  Antonios Pavlakis
                </router-link>
                <meta itemprop="alternateName" content="Antonis Pavlakis">
              </h3>
              <p class="h5 mb-4 opacity-90" itemprop="jobTitle">4th Dan • Yondan so-Hombu Fukushidoin (副指導員)</p>

              <div class="instructor-bio" itemprop="description">
                <p class="mb-3">
                  Antonios (aka Antonis) holds a fourth degree black belt (yondan so-Hombu Fukushidoin 副指導員) and serves
                  as the chief instructor and founder of Leicester Aikikai dojo.
                </p>

                <p class="mb-3">
                  <strong>Training Background:</strong> His aikido journey began in 1997 at <span itemprop="alumniOf" itemscope itemtype="https://schema.org/Organization"><span itemprop="name">De Montfort University Aikido Club</span></span>
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
                  <strong>Affiliations:</strong> Leicester Aikikai maintains full membership with <span itemprop="affiliation" itemscope itemtype="https://schema.org/Organization"><span itemprop="name">United Kingdom Aikikai (UKA)</span></span>
                  and the <span itemprop="affiliation" itemscope itemtype="https://schema.org/Organization"><span itemprop="name">Joint Aikikai Council (JAC)</span></span>, ensuring all grades meet national and international standards.
                </p>

                <meta itemprop="knowsAbout" content="Aikido">
                <meta itemprop="knowsAbout" content="Martial Arts">
                <meta itemprop="knowsAbout" content="Traditional Aikikai">
                <meta itemprop="knowsAbout" content="Self Defense">
              </div>
            </div>

            <div class="col-md-6">
              <div class="position-relative">
                <img
                  src="/img/leicester-aikikai-antonios-pavlakis-2016.jpg"
                  alt="Antonios Pavlakis - Chief Instructor, Leicester Aikikai, 4th Dan"
                  class="img-fluid rounded shadow-lg"
                  loading="lazy"
                  itemprop="image"
                />
                <div class="instructor-badge position-absolute bottom-0 end-0 bg-white text-dark px-3 py-2 m-3 rounded shadow">
                  <small class="fw-bold">Est. 2013</small>
                </div>
              </div>
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

      <!-- Location Section -->
      <section id="location" class="py-5" itemscope itemtype="https://schema.org/LocalBusiness">
        <div class="container">
          <h2 class="section-title text-center">Location and Times</h2>
          <div class="section-divider"></div>

          <div class="row align-items-center">
            <div class="col-md-6 mb-4 mb-md-0">
              <img
                src="/img/aylestone-leisure-centre-mat-space.jpeg"
                alt="Aylestone Leisure Centre mat space"
                class="img-fluid rounded shadow"
                loading="lazy"
                itemprop="image"
              />
            </div>
            <div class="col-md-6">
              <div class="card mb-3 border-0 shadow">
                <div class="card-body border-start border-success border-4">
                  <h3 class="h4 fw-bold mb-3 text-dark">Class Times</h3>
                  <p class="text-muted mb-0" itemprop="openingHours" content="Fr 19:00-21:00">Fridays at 7:00pm - 9:00pm</p>
                </div>
              </div>

              <div class="card mb-3 border-0 shadow">
                <div class="card-body border-start border-warning border-4" itemprop="location" itemscope itemtype="https://schema.org/Place">
                  <h3 class="h4 fw-bold mb-3 text-dark">We practice at</h3>
                  <p class="mb-2">
                    <a href="https://www.leicester.gov.uk/leisure-and-culture/sport-and-leisure/sports-and-leisure-centres/aylestone-leisure-centre/"
                       target="_blank" rel="noopener noreferrer" class="text-decoration-none" itemprop="name">
                      Aylestone Leisure Centre
                    </a>
                  </p>
                  <address class="mb-1 text-muted" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                    <span itemprop="streetAddress">2 Knighton Lane East</span>, <span itemprop="addressLocality">Leicester</span>, <span itemprop="postalCode">LE2 6LU</span>
                  </address>
                  <small class="text-muted">
                    (<a href="https://www.google.com/maps/place/Aylestone+Leisure+Centre,+2+Knighton+Ln+E,+Leicester+LE2+6LU/@52.6093325,-1.1334088,17z/"
                        target="_blank" rel="noopener noreferrer">open in Google Maps</a>)
                  </small>
                  <meta itemprop="latitude" content="52.6093325">
                  <meta itemprop="longitude" content="-1.1334088">
                </div>
              </div>

              <div class="card border-0 shadow">
                <div class="card-body border-start border-warning border-4">
                  <h3 class="h4 fw-bold mb-3 text-dark">Getting here</h3>
                  <p class="mb-2 text-muted"><strong>Car:</strong> Use the above address. Free parking at the leisure centre.</p>
                  <p class="mb-0 text-muted"><strong>Bus:</strong> The "Aylestone Leisure Centre" bus stop is just 2 minutes away.</p>
                </div>
              </div>
            </div>
          </div>

          <meta itemprop="name" content="Leicester Aikikai Dojo">
          <meta itemprop="priceRange" content="££">
        </div>
      </section>

      <!-- Costs Section -->
      <section id="costs" class="py-5 text-white" style="background: linear-gradient(90deg, #2465c7 0%, #525bd3 100%); padding-bottom: 100px !important;">
        <div class="container">
          <h2 class="display-5 fw-bold text-center mb-4">Costs</h2>
          <div style="height: 4px; width: 64px; background: white; opacity: 0.5; margin: 0 auto 3rem;"></div>

          <div class="text-center mb-4">
            <p>
              The initial cost is for the annual membership with the
              <a href="https://ukaikikai.org.uk/online-membership/about/online-membership"
                 target="_blank" rel="noopener noreferrer" title="UK Aikikai annual membership costs"
                 class="text-white text-decoration-underline">
                UK Aikikai (UKA)
              </a> association which also includes insurance.
            </p>
            <ul class="list-unstyled fw-bold">
              <li>Adult (waged) £32.00</li>
              <li>Under 18s* £18.00</li>
            </ul>
            <p class="mt-3">For the monthly costs, see below:</p>
          </div>

          <div class="row justify-content-center g-4 mb-4">
            <div class="col-lg-3 col-md-6">
              <div class="card h-100 price-card">
                <div class="card-header text-center bg-white border-bottom border-3">
                  <h3 class="h4 fw-bold mb-0 text-dark">Under 18s</h3>
                </div>
                <div class="card-body text-center d-flex flex-column">
                  <div class="mt-auto">
                    <p class="display-6 fw-bold text-dark mb-0">£15.00 <span class="fs-6">/ month</span></p>
                  </div>
                </div>
                <div class="card-footer bg-info bg-opacity-10 border-info">
                  <small class="text-dark">Children 12 years old and under can practice only if their parent is also training.</small>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card h-100 price-card featured">
                <div class="card-header text-center bg-white">
                  <h3 class="h4 fw-bold mb-0 text-dark">Adults (waged)</h3>
                  <div class="gradient-border"></div>
                </div>
                <div class="card-body text-center d-flex flex-column">
                  <div class="mt-auto">
                    <p class="display-5 fw-bold text-dark mb-0">£25.00 <span class="fs-6">/ month</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card h-100 price-card">
                <div class="card-header text-center bg-white border-bottom border-3">
                  <h3 class="h4 fw-bold mb-0 text-dark">Adults (concession)</h3>
                </div>
                <div class="card-body text-center d-flex flex-column">
                  <div class="mt-auto">
                    <p class="display-6 fw-bold text-dark mb-0">£20.00 <span class="fs-6">/ month</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="alert alert-light border-0 shadow" role="alert">
                <strong class="text-dark">Guest visits:</strong> <span class="text-dark">Guests are welcome to visit and practice. The fee is £8 per session.</span>
              </div>
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

      <!-- Call to Action -->
      <section class="py-5 bg-gradient text-white text-center">
        <div class="container">
          <h2 class="display-5 fw-bold mb-4">Give it a go.</h2>
          <div style="height: 4px; width: 64px; background: white; opacity: 0.5; margin: 0 auto 2rem;"></div>
          <h3 class="h4 mb-4">Come down on a Friday night to give it a go. First class is FREE.</h3>
        </div>
      </section>

      <!-- FAQ Section -->
      <section id="faq" class="py-5">
        <div class="container">
          <h2 class="section-title text-center">FAQ</h2>
          <div class="section-divider"></div>

          <div class="row g-4">
            <div class="col-md-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <p class="text-muted text-uppercase small mb-2">GETTING STARTED</p>
                  <h3 class="h5 fw-bold mb-3">Am I fit/flexible enough?</h3>
                  <p class="text-muted mb-0">
                    Yes you are! The number one reason people state they will 'come later' is to improve fitness.
                    We work with anyone, at any level of fitness and you can improve fitness and flexibility while learning aikido.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <p class="text-muted text-uppercase small mb-2">GETTING STARTED</p>
                  <h3 class="h5 fw-bold mb-3">What do I need to get started?</h3>
                  <p class="text-muted mb-0">
                    Just come along to one of our classes. The first class is free! Wear some loose fitting exercise clothes
                    (not shorts as you spend time kneeling).
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <p class="text-muted text-uppercase small mb-2">GETTING STARTED</p>
                  <h3 class="h5 fw-bold mb-3">Any other costs?</h3>
                  <p class="text-muted mb-0">
                    Aikido is a great value activity, costs are very low and well defined. New members may also like to buy
                    a suit (aikidogi) and aikido weapons (bokken, jo, tanto). We can provide advice and help with all these items.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { setJsonLd, getPersonSchema, setMeta, SITE_URL } from '../utils/seo.js'

export default {
  name: 'Home',
  mounted() {
    // Set meta tags for SEO and social media
    setMeta({
      title: 'Leicester Aikikai Dojo | Learn Traditional Aikido in Leicester',
      description: 'Learn traditional Aikido in Leicester. First class FREE. Friday evenings at Aylestone Leisure Centre. Welcoming all ages and abilities.',
      keywords: 'aikido Leicester, martial arts Leicester, aikido classes Leicester, traditional aikido, aikikai aikido, aikido training Leicester, learn aikido Leicester',
      url: SITE_URL,
      image: `${SITE_URL}/img/leicester-aikikai-joint-course-march-17th-2024.webp`,
      type: 'website'
    })

    // Add structured data for FAQ, Person, and Local Business
    setJsonLd([
      getPersonSchema(),
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'Antonios Pavlakis',
        'alternateName': 'Antonis Pavlakis',
        'jobTitle': 'Chief Instructor and Founder',
        'description': 'Fourth degree black belt (4th dan yondan so-Hombu Fukushidoin) and chief instructor at Leicester Aikikai dojo since 2013.',
        'memberOf': {
          '@type': 'SportsOrganization',
          'name': 'Leicester Aikikai Dojo',
          'url': SITE_URL
        },
        'affiliation': [
          {
            '@type': 'Organization',
            'name': 'United Kingdom Aikikai',
            'alternateName': 'UKA'
          },
          {
            '@type': 'Organization',
            'name': 'Joint Aikikai Council',
            'alternateName': 'JAC'
          }
        ],
        'hasCredential': [
          {
            '@type': 'EducationalOccupationalCredential',
            'credentialCategory': 'certificate',
            'name': 'Coaching Level 1',
            'competencyRequired': 'Aikido Instruction',
            'educationalLevel': 'Assistant Instructor',
            'dateCreated': '2009'
          },
          {
            '@type': 'EducationalOccupationalCredential',
            'credentialCategory': 'certificate',
            'name': 'Fukushidoin (Teaching Qualification)',
            'competencyRequired': 'Aikido Instruction',
            'educationalLevel': 'Fukushidoin - Grade students up to 1st kyu',
            'dateCreated': '2018'
          },
          {
            '@type': 'EducationalOccupationalCredential',
            'credentialCategory': 'degree',
            'name': '4th Dan (Yondan)',
            'competencyRequired': 'Aikido',
            'recognizedBy': {
              '@type': 'Organization',
              'name': 'United Kingdom Aikikai'
            },
            'dateCreated': '2023'
          }
        ],
        'knowsAbout': [
          'Aikido',
          'Martial Arts',
          'Traditional Aikikai',
          'Self Defense',
          'Aikido Instruction'
        ],
        'alumniOf': {
          '@type': 'Organization',
          'name': 'De Montfort University Aikido Club'
        },
        'image': `${SITE_URL}/img/leicester-aikikai-antonios-pavlakis-2016.jpg`,
        'url': SITE_URL
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Am I fit/flexible enough to start aikido?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes you are! The number one reason people state they will \'come later\' is to improve fitness. We work with anyone, at any level of fitness and you can improve fitness and flexibility while learning aikido.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What do I need to get started with aikido?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Just come along to one of our classes. The first class is free! Wear some loose fitting exercise clothes (not shorts as you spend time kneeling).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Are there any other costs for aikido training?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Aikido is a great value activity, costs are very low and well defined. New members may also like to buy a suit (aikidogi) and aikido weapons (bokken, jo, tanto). We can provide advice and help with all these items.'
            }
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        'name': 'Leicester Aikikai Dojo',
        'image': `${SITE_URL}/img/leicester-aikikai-joint-course-march-17th-2024.webp`,
        'description': 'Traditional Aikikai Aikido dojo in Leicester. First class FREE. Welcoming all ages and abilities.',
        'inLanguage': 'en-GB',
        'keywords': 'aikido, martial arts, traditional aikido, aikikai, self defense, Leicester dojo',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Aylestone Leisure Centre, 2 Knighton Lane East',
          'addressLocality': 'Leicester',
          'postalCode': 'LE2 6LU',
          'addressCountry': 'GB'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '52.6093325',
          'longitude': '-1.1334088'
        },
        'url': SITE_URL,
        'telephone': '',
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Friday',
          'opens': '19:00',
          'closes': '21:00'
        },
        'priceRange': '££',
        'paymentAccepted': 'Cash, Bank Transfer',
        'currenciesAccepted': 'GBP',
        'hasMap': 'https://what3words.com/stuck.scoop.hopes',
        'additionalProperty': {
          '@type': 'PropertyValue',
          'name': 'what3words',
          'value': 'stuck.scoop.hopes'
        },
        'sameAs': [
          'https://www.facebook.com/LeicesterAikikai'
        ],
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '5',
          'reviewCount': '1'
        }
      }
    ])
  }
}
</script>

<style scoped>
/* Component specific styles */

.instructor-bio {
  line-height: 1.8;
  font-size: 1.05rem;
}

.instructor-bio strong {
  font-weight: 600;
  opacity: 0.95;
}

.instructor-badge {
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

@media (max-width: 767px) {
  .instructor-bio {
    font-size: 1rem;
  }
}
</style>

