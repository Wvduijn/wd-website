<template>
  <Layout :show-logo="true">
    <!-- Over mij Section -->
    <AboutMe />

    <!-- Skills Section -->
    <Skills />

    <!-- Clients Section -->
    <Clients />

    <!-- Blog top 3 ? -->

    <!-- Contact Section -->
    <Contact />


    <!-- Author intro -->
    <!-- <Author :show-title="true" /> -->

    <!-- List posts -->
    <!-- <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div> -->

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        ...on Post {
        id
        title
        path
        }
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>
<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import Section from '~/components/section/Section.vue'
import Skills from '~/components/sections/skills/Skills.vue'
import TitleBlock from '~/components/title-block/TitleBlock.vue'
import AboutMe from '~/components/sections/aboutme/AboutMe.vue'
import Contact from '~/components/sections/contact/Contact.vue'
import Clients from '~/components/sections/testimonials/Clients.vue'

export default {
  components: {
    Author,
    PostCard,
    AboutMe,
    Skills,
    Contact,
    Clients
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
<style lang="scss" scoped>

</style>

