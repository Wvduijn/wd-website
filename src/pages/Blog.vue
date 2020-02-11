<template>
  <BlogLayout :show-logo="true">
    <Section>
      <template v-slot:content>
        <div class="posts">
          <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>  
        </div>
      </template>
    </Section>
  </BlogLayout>
</template>

<page-query>
query Posts {
  posts: allContentfulBlogPost(perPage: 10){
  	edges {
      node {
        slug
        publishDate (format:"DD-MM-YYYY", locale: "nl-NL")
        id
        title
        description
        body
        hashtags {
          title
        }
        heroImage {
          file {
            fileName
            url
          }
          title
          description
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
import BlogLayout from '~/layouts/Blog.vue'
import Section from '~/components/section/Section.vue'

export default {
  components: {
    BlogLayout,
    PostCard,
    Section
  }
}
</script>
