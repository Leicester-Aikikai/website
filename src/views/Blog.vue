<template>
  <div class="blog">
    <section class="hero-section" role="banner">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-7 mb-4 mb-md-0">
            <p class="text-uppercase mb-3 opacity-75">Insights - 気づき</p>
            <h1 class="display-3 fw-bold mb-4">
              {{ currentPost ? currentPost.title : 'Leicester Aikikai Blog' }}
            </h1>
            <p class="lead mb-4" v-if="currentPost">
              {{ currentPost.excerpt }}
            </p>
            <p class="lead mb-4" v-else>
              Read practical articles about aikido training, beginner guidance, dojo culture, and what regular practice looks like at Leicester Aikikai.
            </p>
            <router-link v-if="currentPost" to="/blog" class="btn btn-light btn-lg rounded-pill px-4 shadow back-to-blog-link">
              ← Back to Blog
            </router-link>
          </div>
          <div class="col-md-5 text-center">
            <img
              :src="currentPost ? getPostImage(currentPost) : '/img/aylestone-leisure-centre-mat-space.jpeg'"
              :alt="currentPost ? (currentPost.imageAlt || currentPost.title) : 'Aikido training area at Leicester Aikikai'"
              class="img-fluid rounded shadow-lg"
              fetchpriority="high"
              width="1280"
              height="960"
            />
          </div>
        </div>
      </div>

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

    <main id="main-content" class="py-5 bg-light">
      <div v-if="currentPost">
        <article class="blog-article" itemscope itemtype="https://schema.org/BlogPosting">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 mx-auto">
                <nav aria-label="Breadcrumb" class="mb-4">
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/">Home</router-link>
                    </li>
                    <li class="breadcrumb-item">
                      <router-link to="/blog">Blog</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ currentPost.title }}</li>
                  </ol>
                </nav>

                <figure class="mb-4">
                  <img
                    :src="getPostImage(currentPost)"
                    :alt="currentPost.imageAlt || currentPost.title"
                    class="img-fluid rounded shadow-lg w-100"
                    itemprop="image"
                  />
                </figure>

                <div class="d-flex flex-wrap gap-3 align-items-center text-muted small mb-4">
                  <span>
                    <strong>Published:</strong>
                    <time itemprop="datePublished" :datetime="formatDateForIso(currentPost.publishedDate)">{{ formatBlogDate(currentPost.publishedDate) }}</time>
                  </span>
                  <span v-if="currentPost.lastUpdated !== currentPost.publishedDate">
                    <strong>Last updated:</strong>
                    <time itemprop="dateModified" :datetime="formatDateForIso(currentPost.lastUpdated)">{{ formatBlogDate(currentPost.lastUpdated) }}</time>
                  </span>
                  <span>
                    <strong>Author:</strong>
                    <router-link :to="currentAuthor.profile" class="text-decoration-none">{{ currentAuthor.name }}</router-link>
                  </span>
                  <span>
                    <strong>Reading time:</strong> {{ currentPost.readingTime }}
                  </span>
                </div>

                <p class="lead mb-4" itemprop="description">
                  {{ currentPost.introduction }}
                </p>

                <nav
                  v-if="currentPost.sections.length > 1"
                  aria-label="Table of contents"
                  class="card shadow-sm border-0 mb-5"
                >
                  <div class="card-body">
                    <h2 class="h5 fw-bold mb-3">Table of Contents</h2>
                    <ul class="mb-0 ps-3">
                      <li v-for="section in currentPost.sections" :key="section.slug" class="mb-2">
                        <a :href="`#${section.slug}`" class="text-decoration-none">{{ section.heading }}</a>
                      </li>
                    </ul>
                  </div>
                </nav>

                <div itemprop="articleBody">
                  <section v-for="section in currentPost.sections" :key="section.slug" :id="section.slug" class="mb-5">
                    <h2 class="h3 fw-bold mb-3">{{ section.heading }}</h2>
                    <p v-for="(paragraph, index) in section.paragraphs" :key="index" class="mb-3">
                      {{ paragraph }}
                    </p>
                  </section>
                </div>

                <section class="mb-5">
                  <div class="card border-0 shadow-sm bg-white">
                    <div class="card-body p-4 p-md-5">
                      <h2 class="h3 fw-bold mb-3">Conclusion</h2>
                      <p class="mb-0">{{ currentPost.conclusion }}</p>
                    </div>
                  </div>
                </section>

                <section class="mb-5">
                  <div class="cta-card rounded-4 p-4 p-md-5 text-white">
                    <div class="row align-items-center g-4">
                      <div class="col-md-8">
                        <h2 class="h3 fw-bold mb-3">{{ currentPost.callToAction.heading }}</h2>
                        <p class="mb-0">{{ currentPost.callToAction.text }}</p>
                      </div>
                      <div class="col-md-4 text-md-end">
                        <router-link
                          :to="currentPost.callToAction.buttonLink"
                          class="btn btn-light btn-lg rounded-pill px-4"
                        >
                          {{ currentPost.callToAction.buttonLabel }}
                        </router-link>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="mb-5">
                  <div class="card border-0 shadow-sm">
                    <div class="card-body p-4 p-md-5">
                      <div class="row align-items-center g-4">
                        <div class="col-md-3 col-lg-2 text-center">
                          <img
                            :src="currentAuthor.image"
                            :alt="`${currentAuthor.name} profile photo`"
                            class="img-fluid rounded-circle author-image"
                          />
                        </div>
                        <div class="col-md-9 col-lg-10">
                          <p class="text-uppercase small text-muted mb-2">Author</p>
                          <h2 class="h4 fw-bold mb-2">{{ currentAuthor.name }}</h2>
                          <p class="mb-3">{{ currentAuthor.bio }}</p>
                          <router-link :to="currentAuthor.profile" class="btn btn-outline-primary rounded-pill">
                            View instructor profile
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="mb-4">
                  <h2 class="h3 fw-bold mb-4">Related Articles</h2>
                  <div class="row g-4">
                    <div v-for="post in relatedPosts" :key="post.id" class="col-md-6 col-lg-4">
                      <article class="card h-100 border-0 shadow-sm">
                        <img
                          :src="getPostImage(post)"
                          :alt="post.imageAlt || post.title"
                          class="card-img-top blog-card-image"
                          loading="lazy"
                        />
                        <div class="card-body d-flex flex-column">
                          <p class="text-uppercase small text-muted mb-2">{{ post.category }}</p>
                          <h3 class="h5 fw-bold mb-3">
                            <router-link :to="getBlogPostUrl(post)" class="text-decoration-none stretched-link">
                              {{ post.title }}
                            </router-link>
                          </h3>
                          <p class="text-muted mb-3">{{ post.excerpt }}</p>
                          <p class="text-muted small mb-0 mt-auto">
                            {{ formatBlogDate(post.publishedDate) }} · {{ post.readingTime }}
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div v-else-if="postNotFound">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="card shadow-sm border-0">
                <div class="card-body p-4 p-md-5 text-center">
                  <h2 class="h3 fw-bold mb-3">Blog post not found</h2>
                  <p class="text-muted mb-4">
                    The article you are looking for may have moved or may no longer be available.
                  </p>
                  <router-link to="/blog" class="btn btn-primary btn-lg rounded-pill px-4">
                    Back to Blog
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-10 mx-auto">
              <div class="card border-0 shadow-sm">
                <div class="card-body p-4 p-md-5">
                  <p class="text-uppercase small text-muted mb-2">Blog</p>
                  <h2 class="section-title text-center mb-3">Aikido articles and dojo notes</h2>
                  <div class="section-divider"></div>
                  <p class="mb-0 text-center">
                    Explore beginner-friendly guidance, reflections on training, and practical articles about traditional Aikido at Leicester Aikikai.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="sortedPosts.length" class="row g-4">
            <div v-for="post in sortedPosts" :key="post.id" class="col-md-6 col-lg-4">
              <article class="card h-100 border-0 shadow-sm">
                <img
                  :src="getPostImage(post)"
                  :alt="post.imageAlt || post.title"
                  class="card-img-top blog-card-image"
                  loading="lazy"
                />
                <div class="card-body d-flex flex-column">
                  <p class="text-uppercase small text-muted mb-2">{{ post.category }}</p>
                  <h2 class="h5 fw-bold mb-3">
                    <router-link :to="getBlogPostUrl(post)" class="text-decoration-none stretched-link">
                      {{ post.title }}
                    </router-link>
                  </h2>
                  <p class="text-muted mb-3">{{ post.excerpt }}</p>
                  <ul class="list-unstyled small text-muted mb-3">
                    <li>Published: {{ formatBlogDate(post.publishedDate) }}</li>
                    <li v-if="post.lastUpdated !== post.publishedDate">Updated: {{ formatBlogDate(post.lastUpdated) }}</li>
                    <li>Author: {{ getAuthor(post.authorId).name }}</li>
                    <li>Reading time: {{ post.readingTime }}</li>
                  </ul>
                  <div class="mt-auto">
                    <router-link :to="getBlogPostUrl(post)" class="btn btn-primary rounded-pill px-4">
                      Read article
                    </router-link>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div v-else class="row">
            <div class="col-lg-8 mx-auto">
              <div class="card border-0 shadow-sm text-center">
                <div class="card-body p-4 p-md-5">
                  <h2 class="h3 fw-bold mb-3">No articles published yet</h2>
                  <p class="text-muted mb-4">
                    We are preparing new blog posts about aikido training, beginner guidance, and dojo life at Leicester Aikikai.
                  </p>
                  <router-link to="/events" class="btn btn-primary btn-lg rounded-pill px-4">
                    View upcoming events
                  </router-link>
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
import {
  blogPosts,
  formatBlogDate,
  formatBlogDateForUrl,
  getBlogAuthor,
  getBlogPostByRoute,
  getBlogPostUrl,
  getBlogRelatedPosts,
  parseBlogDate
} from '../data/blog.js'
import { setJsonLd, setMeta, SITE_URL, getOrganizationSchema, getWebSiteSchema } from '../utils/seo.js'

export default {
  name: 'Blog',
  data() {
    return {
      posts: blogPosts
    }
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) => parseBlogDate(b.publishedDate) - parseBlogDate(a.publishedDate))
    },
    currentPost() {
      const { date, title } = this.$route.params
      if (!date || !title) {
        return null
      }
      return getBlogPostByRoute(date, title) || null
    },
    currentAuthor() {
      if (!this.currentPost) {
        return getBlogAuthor('antonis-pavlakis')
      }
      return getBlogAuthor(this.currentPost.authorId) || getBlogAuthor('antonis-pavlakis')
    },
    relatedPosts() {
      if (!this.currentPost) {
        return []
      }
      return getBlogRelatedPosts(this.currentPost, 3)
    },
    postNotFound() {
      return Boolean(this.$route.params.date || this.$route.params.title) && !this.currentPost
    }
  },
  watch: {
    currentPost: {
      handler() {
        this.applySeo()
      },
      immediate: true
    }
  },
  methods: {
    formatBlogDate,
    getBlogPostUrl,
    getAuthor(authorId) {
      return getBlogAuthor(authorId) || getBlogAuthor('antonis-pavlakis')
    },
    getPostImage(post) {
      return post.featuredImage || '/img/leicester-aikikai-dojo-hall.jpg'
    },
    formatDateForIso(dateStr) {
      return `${formatBlogDateForUrl(dateStr)}T00:00:00+00:00`
    },
    applySeo() {
      if (this.currentPost) {
        const author = this.currentAuthor
        const postUrl = `${SITE_URL}${getBlogPostUrl(this.currentPost)}`
        const description = this.currentPost.excerpt
        const image = `${SITE_URL}${this.getPostImage(this.currentPost)}`

        setMeta({
          title: `${this.currentPost.title} | Leicester Aikikai Blog`,
          description,
          keywords: `${this.currentPost.tags.join(', ')}, Leicester Aikikai blog, aikido training, traditional aikido`,
          author: author.name,
          url: postUrl,
          image,
          type: 'article',
          publishedTime: this.formatDateForIso(this.currentPost.publishedDate),
          modifiedTime: this.formatDateForIso(this.currentPost.lastUpdated)
        })

        setJsonLd([
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            '@id': `${postUrl}#blogposting`,
            'headline': this.currentPost.title,
            'description': description,
            'author': {
              '@type': 'Person',
              'name': author.name,
              'url': `${SITE_URL}${author.profile}`
            },
            'publisher': {
              '@type': 'SportsOrganization',
              'name': 'Leicester Aikikai Dojo',
              'url': SITE_URL,
              'logo': {
                '@type': 'ImageObject',
                'url': `${SITE_URL}/img/Leicester-Aikikai-Dojo-Logo.png`
              }
            },
            'datePublished': this.formatDateForIso(this.currentPost.publishedDate),
            'dateModified': this.formatDateForIso(this.currentPost.lastUpdated),
            'image': [image],
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': postUrl
            },
            'articleSection': this.currentPost.category,
            'keywords': this.currentPost.tags,
            'inLanguage': 'en-GB',
            'isAccessibleForFree': true
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
                'name': 'Blog',
                'item': `${SITE_URL}/blog`
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': this.currentPost.title,
                'item': postUrl
              }
            ]
          }
        ])
      } else {
        const listUrl = `${SITE_URL}/blog`
        const postItems = this.sortedPosts.map((post, index) => {
          const url = `${SITE_URL}${getBlogPostUrl(post)}`
          return {
            '@type': 'ListItem',
            'position': index + 1,
            'url': url,
            'name': post.title,
            'description': post.excerpt
          }
        })

        setMeta({
          title: 'Blog | Leicester Aikikai Dojo',
          description: 'Aikido articles, beginner guidance, and dojo notes from Leicester Aikikai. Read practical posts about training, ukemi, consistency, and life on the mat.',
          keywords: 'Leicester Aikikai blog, aikido blog, aikido training, ukemi, beginner aikido, traditional aikido, martial arts Leicester',
          url: listUrl,
          image: `${SITE_URL}${this.getPostImage(this.sortedPosts[0] || {})}`,
          type: 'website'
        })

        setJsonLd([
          getOrganizationSchema(),
          getWebSiteSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Leicester Aikikai Blog',
            'description': 'Aikido articles, beginner guidance, and dojo notes from Leicester Aikikai.',
            'url': listUrl,
            'mainEntity': {
              '@type': 'ItemList',
              'name': 'Leicester Aikikai Blog Articles',
              'numberOfItems': postItems.length,
              'itemListElement': postItems
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
                'name': 'Blog',
                'item': listUrl
              }
            ]
          }
        ])
      }
    }
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(90deg, #2465c7 0%, #525bd3 100%);
  color: white;
  padding: 9rem 0 4rem;
  position: relative;
  overflow: hidden;
}

.hero-section::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 80px;
  background: linear-gradient(to bottom right, transparent 49%, #f8f9fa 50%);
  pointer-events: none;
  z-index: 0;
}

.hero-section .container,
.hero-section .wave-divider {
  position: relative;
  z-index: 1;
}

.hero-section .container {
  z-index: 2;
}

.back-to-blog-link {
  position: relative;
  z-index: 3;
}

.wave-divider {
  position: relative;
  bottom: -1px;
  pointer-events: none;
}

.wave-divider svg {
  display: block;
  pointer-events: none;
}

.blog-article {
  padding-bottom: 2rem;
}

.blog-card-image {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.cta-card {
  background: linear-gradient(90deg, #2465c7 0%, #525bd3 100%);
  box-shadow: 0 1rem 2rem rgba(36, 101, 199, 0.25);
}

.author-image {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border: 4px solid #e9ecef;
}

@media (max-width: 767px) {
  .hero-section {
    padding-top: 7.5rem;
  }

  .blog-card-image {
    aspect-ratio: 4 / 3;
  }

  .cta-card .text-md-end {
    text-align: left !important;
  }
}
</style>



