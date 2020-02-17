<template>
  <Layout :show-logo="true">
    <!-- Over mij Section -->
    <AboutMe />
    <!-- Skills Section -->
    <Skills />

    <!-- Clients Section -->
    <Clients />

    <!-- #TODO: Blog top 3 ? -->
    
    <!-- Contact Section -->
    <Contact />

    <!-- #TODO Personal card -->
    

  </Layout>
</template>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import Section from '~/components/section/Section.vue'
import Skills from '~/components/sections/skills/Skills.vue'
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

