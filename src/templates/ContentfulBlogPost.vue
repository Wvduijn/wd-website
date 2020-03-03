<template>
  <BlogPostLayout>
    <blog-post-hero :post="$page.post" />
    <!-- <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.post.title }}
      </h1>

      <PostMeta :post="$page.post" />

    </div> -->

    <div class="post content-box">
      <!-- <div class="post__header">
        <g-image
          alt="Cover image"
          v-if="$page.post.heroImage"
          :src="$page.post.heroImage.file.url"
        />
      </div> -->

      <div
        class="post__content"
        v-html="contentbody"
      />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>

    <Author class="post-author" />
  </BlogPostLayout>
</template>

<script>
// Syntax highlighting in code blocks - only import what's needed
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import shell from 'highlight.js/lib/languages/shell';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('dockerfile', dockerfile);
hljs.registerLanguage('shell', shell);

// Parse markdown to html
import MarkdownIt from "markdown-it";
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'
import BlogPostLayout from '~/layouts/BlogPost.vue'
import BlogPostHero from '~/components/BlogPostHero.vue'


export default {
  name: "Contentful",
  components: {
    Author,
    PostMeta,
    PostTags,
    BlogPostLayout,
    BlogPostHero
  },
  computed: {
    // to render markdown using markdown-it
    contentbody() {
      const md = new MarkdownIt({
        // enable syntax highlighting in code blocks
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (__) {}
          }

          return ''; // use external default escaping
        }
      });

      return md.render(this.$page.post.body);
    }
    },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>
<page-query>
    query Post($path: String!) {
        post: contentfulBlogPost(path: $path ) {
            slug
            id
            title
            date
            publishDate (format:"DD-MM-YYYY", locale: "nl-NL")
            heroImage {
                file {
                    url
                }
            }
            author {
              name
            }
            body
            hashtags {
              title
            }
        }
    }
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {
  
  a {
    color: var(--link-color);
  }

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
