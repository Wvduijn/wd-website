<template>
    <Layout :show-logo="true">
        <!-- Over mij Section -->
        <AboutMe />
        <!-- Skills Section -->
        <Skills />
        <!-- Clients Section -->
        <Clients />
        <!-- Contact Section -->
        <ContactNew />
        <!-- #TODO: Blog top 3 ? -->
        <RecentPosts />
        <!-- #TODO Personal card -->
    </Layout>
</template>

<script>
import Section from '~/components/section/Section.vue'
import Skills from '~/components/sections/skills/Skills.vue'
import AboutMe from '~/components/sections/aboutme/AboutMe.vue'
import ContactNew from '~/components/sections/contact/Contact-new.vue'
import Clients from '~/components/sections/testimonials/Clients.vue'
import RecentPosts from '~/components/sections/recent-posts/RecentPosts.vue'

export default {
    components: {
        AboutMe,
        Skills,
        ContactNew,
        Clients,
        RecentPosts,
    },
    metaInfo: {
        title: 'Home',
    },
}
</script>
<style lang="scss" scoped></style>
