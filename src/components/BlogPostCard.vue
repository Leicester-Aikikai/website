<script setup>
import { formatBlogDate, formatBlogDateForUrl, getBlogAuthor, getBlogPostUrl } from '../data/blog.js'

defineProps({ post: Object, featured: Boolean })
</script>

<template>
  <article class="blog-post-card" :class="{ 'blog-post-featured': featured }">
    <router-link :to="getBlogPostUrl(post)" class="blog-post-photo">
      <img
        :src="post.featuredImage || '/img/training-1280.webp'"
        :alt="post.imageAlt || post.title"
        width="1280"
        height="960"
        loading="lazy"
      >
    </router-link>
    <div class="blog-post-copy">
      <p class="eyebrow">{{ post.category }}</p>
      <h3><router-link :to="getBlogPostUrl(post)">{{ post.title }}</router-link></h3>
      <p>{{ post.excerpt }}</p>
      <p class="blog-post-meta">
        <time :datetime="formatBlogDateForUrl(post.publishedDate)">{{ formatBlogDate(post.publishedDate) }}</time>
        <span aria-hidden="true"> · </span>{{ post.readingTime }}
      </p>
      <p v-if="post.lastUpdated !== post.publishedDate" class="blog-post-meta">Updated <time :datetime="formatBlogDateForUrl(post.lastUpdated)">{{ formatBlogDate(post.lastUpdated) }}</time></p>
      <p class="blog-post-author">By {{ getBlogAuthor(post.authorId)?.name || 'Leicester Aikikai' }}</p>
      <router-link :to="getBlogPostUrl(post)" class="text-link">Read article <span aria-hidden="true">↗</span></router-link>
    </div>
  </article>
</template>

<style scoped>
.blog-post-card { border: 1px solid var(--line); background: white; height: 100%; }
.blog-post-photo { display: block; background: var(--warm); }
.blog-post-photo img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }
.blog-post-copy { padding: clamp(1.5rem, 3vw, 2.5rem); }
.blog-post-copy .eyebrow { color: var(--accent); margin-bottom: .75rem; }
.blog-post-copy h3 { font-size: clamp(1.35rem, 2vw, 1.8rem); line-height: 1.25; }
.blog-post-copy h3 a { color: var(--ink); text-decoration: none; }
.blog-post-copy h3 a:hover { text-decoration: underline; }
.blog-post-copy > p:not(.eyebrow) { font-size: .95rem; }
.blog-post-copy .blog-post-meta, .blog-post-copy .blog-post-author { color: var(--muted); font-size: .8rem; margin-bottom: .5rem; }
.blog-post-copy .text-link { margin-top: .5rem; }
.blog-post-featured { display: grid; grid-template-columns: 1fr 1fr; align-items: stretch; }
.blog-post-featured .blog-post-photo img { height: 100%; min-height: 360px; }
.blog-post-featured .blog-post-copy { align-self: center; }
@media (max-width: 767px) {
  .blog-post-featured { grid-template-columns: 1fr; }
  .blog-post-featured .blog-post-photo img { height: auto; min-height: 0; }
}
</style>
