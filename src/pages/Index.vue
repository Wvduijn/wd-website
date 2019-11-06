<template>
  <Layout :show-logo="true">
    <!-- First Section -->
    <Section>
      <template v-slot:section-title>
        
        <h2 class="section-title font-black text-3xl text-center">Over mij</h2>
        <h6 class="section-subtitle text-xs text-center">front-end developer</h6>
        
        <div class="title-spacer"></div>
      </template>
      <template v-slot:left-content>
        <p class="font-black">
          Ervaren & enthousiaste Front-end Developer met ruim 12 jaar werkervaring.
          Gespecialiseerd in Javascript / Angular / Vue & de bouw van responsive websites/applicaties met het oog op performance.
        </p>
        <p>
          In mijn meest recente opdrachten ben ik voornamelijk bezig geweest met de realisatie van grote Front-end projecten.
          Technieken en tools die hierbij voornamelijk aan bod kwamen zijn Angular, Typescript, Javascript, NPM, Yarn, Webpack, SystemJS, Sass & HTML.
        </p>
        <p>
          Naast mijn reguliere werkzaamheden ben ik in mijn vrije tijd ook graag bezig met het verder uitbreiden van mijn kennis m.b.t. technieken & frameworks. Denk hierbij aan hobby projecten met Vue, Nuxt,  Node,  Prisma & GraphQL.
        </p>
        <p>
          De trends & laatste ontwikkelingen volgen, maar ook  jezelf dwingen om continu bij te blijven leren, is wat het Front-end vak voor mij zo leuk & uitdagend maakt.
        </p>
      </template>
      <template v-slot:right-content>
        <div class="absolute bottom-0">
        <g-image src="~/assets/images/willemvanduijn.webp" alt="Willem van Duijn"/>
        </div>
      </template>

    </Section>

    <!-- Four columns -->
    <div class="flex mb-4">
      <div class="w-1/4">
      <SkillCard />
      </div>
      <div class="w-1/4">
      <SkillCard />
      </div>
      <div class="w-1/4">
      <SkillCard />
      </div>
      <div class="w-1/4">
      <SkillCard />
      </div>
    </div>
    

    <!-- Second Section -->


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
<style lang="scss" scoped>
.title-spacer {
    border: 0 solid #e7e6e6;
    border-color: #ffffff;
    border-top-width: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
    width: 100%;
    max-width: 130px;
}
.section-title {
  font-family: 'Poppins', sans-serif;
  color: #FFF;
  letter-spacing: 1px;
  margin: 0 0 10px 0;
  text-transform: uppercase;
}
.section-subtitle {
  font-family: 'Roboto', sans-serif;
  color: #ee751c;
  letter-spacing: 4px;
  margin: 0 0 20px 0;
  text-transform: uppercase;
}
</style>
<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import Section from '~/components/section/Section.vue'
import SkillCard from '~/components/ui-components/SkillCard.vue'

export default {
  components: {
    Author,
    PostCard,
    Section,
    SkillCard
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
