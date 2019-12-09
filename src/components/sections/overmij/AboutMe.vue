<template>
  <Section class="wd-background">
    <template v-slot:section-title>
      <TitleBlock
        title="Over mij"
        subtitle="front-end developer"
      />
    </template>

    <template v-slot:content>
      <div class="w-full md:w-2/3 p-10">
        <p class="font-black">
          Ervaren & enthousiaste Front-end Developer met ruim 12 jaar werkervaring.
          Gespecialiseerd in Javascript / Angular / Vue & de bouw van responsive websites/applicaties met het oog op performance.
        </p>
        <p>
          In mijn meest recente opdrachten ben ik voornamelijk bezig geweest met de realisatie van grote Front-end projecten.
          Technieken en tools die hierbij voornamelijk aan bod kwamen zijn Angular, Typescript, Javascript, NPM, Yarn, Webpack, SystemJS, Sass & HTML.
        </p>
        <p>
          Naast mijn reguliere werkzaamheden ben ik in mijn vrije tijd ook graag bezig met het verder uitbreiden van mijn kennis m.b.t. technieken & frameworks. Denk hierbij aan hobby projecten met Vue, Nuxt, Node, Prisma & GraphQL.
        </p>
        <p>
          De trends & laatste ontwikkelingen volgen, maar ook jezelf dwingen om continu bij te blijven leren, is wat het Front-end vak voor mij zo leuk & uitdagend maakt.
        </p>
      </div>
      <div class="w-1/3 relative hidden md:block">
        <div class="absolute bottom-0">
          
        </div>
      </div>
    </template>
  </Section>
</template>
<script>
import TitleBlock from '~/components/title-block/TitleBlock.vue'
import Section from '~/components/section/Section.vue'
export default {
    components: {
        Section,
        TitleBlock
    }
}
</script>
<style lang="scss" scoped>
.wd-background {
  background: url('~@/assets/images/willemvanduijn-hero.webp') bottom right no-repeat;
  background-size: contain;
}
</style>