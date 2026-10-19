<template>
  <main id="main-content" tabindex="-1" class="blog">
    <PageIntro
      :eyebrow="currentPost ? currentPost.category : 'From the dojo'"
      :title="currentPost ? currentPost.title : 'Blog & dojo notes'"
      :text="currentPost ? currentPost.excerpt : 'Stories from the club, reflections on practice and guidance for your time on the mat.'"
    >
      <router-link v-if="currentPost" to="/blog" class="text-link">← All articles</router-link>
    </PageIntro>

    <article v-if="currentPost" class="section-space" itemscope itemtype="https://schema.org/BlogPosting">
      <div class="container blog-reading">
        <nav aria-label="Breadcrumb" class="mb-4">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/blog">Blog</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ currentPost.title }}</li>
          </ol>
        </nav>
        <div class="blog-metadata">
          <span>Published <time itemprop="datePublished" :datetime="formatDateForIso(currentPost.publishedDate)">{{ formatBlogDate(currentPost.publishedDate) }}</time></span>
          <span v-if="currentPost.lastUpdated !== currentPost.publishedDate">Updated <time itemprop="dateModified" :datetime="formatDateForIso(currentPost.lastUpdated)">{{ formatBlogDate(currentPost.lastUpdated) }}</time></span>
          <span>By <router-link :to="currentAuthor.profile">{{ currentAuthor.name }}</router-link></span>
          <span>{{ currentPost.readingTime }}</span>
        </div>
        <figure class="blog-article-photo">
          <img :src="getPostImage(currentPost)" :alt="currentPost.imageAlt || currentPost.title" width="1280" height="960" itemprop="image" fetchpriority="high">
        </figure>
        <div class="blog-prose">
          <p class="lead" itemprop="description">{{ currentPost.introduction }}</p>
          <nav v-if="currentPost.sections.length > 1" aria-label="Table of contents" class="blog-contents">
            <h2 class="h5">In this article</h2>
            <ol>
              <li v-for="section in currentPost.sections" :key="section.slug"><a :href="`#${section.slug}`">{{ section.heading }}</a></li>
            </ol>
          </nav>
          <div itemprop="articleBody">
            <section v-for="section in currentPost.sections" :key="section.slug" :id="section.slug" class="blog-body-section">
              <h2>{{ section.heading }}</h2>
              <p v-for="(paragraph, index) in section.paragraphs" :key="index">{{ paragraph }}</p>
            </section>
            <section class="blog-body-section">
              <h2>Conclusion</h2>
              <p>{{ currentPost.conclusion }}</p>
            </section>
          </div>
          <section class="blog-cta">
            <h2>{{ currentPost.callToAction.heading }}</h2>
            <p>{{ currentPost.callToAction.text }}</p>
            <router-link :to="currentPost.callToAction.buttonLink" class="btn btn-primary">{{ currentPost.callToAction.buttonLabel }} <span aria-hidden="true">↗</span></router-link>
          </section>
          <section class="blog-author" aria-labelledby="blog-author-heading">
            <img :src="currentAuthor.image" :alt="`${currentAuthor.name}, article author`" width="88" height="88" loading="lazy">
            <div>
              <p class="eyebrow">About the author</p>
              <h2 id="blog-author-heading" class="h4">{{ currentAuthor.name }}</h2>
              <p>{{ currentAuthor.bio }}</p>
              <router-link :to="currentAuthor.profile" class="text-link">Meet the instructor <span aria-hidden="true">↗</span></router-link>
            </div>
          </section>
        </div>
      </div>
      <section v-if="relatedPosts.length" class="container blog-related">
        <h2>More from the dojo</h2>
        <div class="blog-post-grid"><BlogPostCard v-for="post in relatedPosts" :key="post.id" :post="post" /></div>
      </section>
    </article>

    <section v-else-if="postNotFound" class="section-space">
      <div class="container reading-width">
        <h2>Blog post not found</h2>
        <p>The article you are looking for may have moved or may no longer be available.</p>
        <router-link to="/blog" class="btn btn-primary">Browse all articles</router-link>
      </div>
    </section>

    <section v-else class="section-space">
      <div class="container">
        <div v-if="sortedPosts.length">
          <div class="section-heading"><h2>Latest from the dojo</h2><router-link to="/events" class="text-link">Explore club events <span aria-hidden="true">↗</span></router-link></div>
          <BlogPostCard :post="sortedPosts[0]" featured />
          <div v-if="sortedPosts.length > 1" class="blog-post-grid mt-4"><BlogPostCard v-for="post in sortedPosts.slice(1)" :key="post.id" :post="post" /></div>
        </div>
        <div v-else class="content-panel reading-width">
          <h2>No articles published yet</h2>
          <p>There are no published dojo notes at the moment. You can explore our class information and upcoming events.</p>
          <div class="action-row"><router-link to="/classes" class="text-link">Classes & prices</router-link><router-link to="/events" class="text-link">Explore club events</router-link></div>
        </div>
      </div>
    </section>
    <JoinSection />
  </main>
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
import { club } from '../data/club.js'
import PageIntro from '../components/PageIntro.vue'
import BlogPostCard from '../components/BlogPostCard.vue'
import JoinSection from '../components/JoinSection.vue'

export default {
  name: 'Blog',
  components: { PageIntro, BlogPostCard, JoinSection },
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
                'url': `${SITE_URL}${club.logo.image}`
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
.blog-reading { max-width: 1000px; }
.blog-prose { max-width: 720px; margin-inline: auto; }
.blog-metadata { display: flex; flex-wrap: wrap; gap: .5rem 1.5rem; margin-bottom: 2rem; font-size: .8rem; color: var(--muted); }
.blog-article-photo { margin-bottom: 3rem; }
.blog-article-photo img { display: block; width: 100%; height: auto; }
.blog-contents { background: var(--warm); border-left: 2px solid var(--accent); padding: 1.5rem 2rem; margin-block: 2.5rem 3rem; }
.blog-contents ol { margin-bottom: 0; padding-left: 1.25rem; }
.blog-contents a { display: inline-block; padding-block: .4rem; }
.blog-body-section { margin-block: 3rem; }
.blog-body-section h2, .blog-cta h2 { font-size: clamp(1.6rem, 2.7vw, 2.2rem); }
.blog-cta { background: var(--warm); padding: clamp(1.5rem, 4vw, 2.5rem); margin-block: 3rem; }
.blog-author { display: grid; grid-template-columns: 88px 1fr; gap: 1.5rem; padding-block: 2rem; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.blog-author img { width: 88px; height: 88px; object-fit: cover; }
.blog-author .eyebrow { margin-bottom: .5rem; }
.blog-author p:not(.eyebrow) { font-size: .9rem; }
.blog-post-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2rem; }
.blog-related { margin-top: 4rem; }
.breadcrumb { font-size: .8rem; }
@media (max-width: 767px) {
  .blog-post-grid { grid-template-columns: 1fr; }
  .blog-author { grid-template-columns: 1fr; }
  .blog-contents { padding: 1.25rem; }
}
</style>
