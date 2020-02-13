<template>
  <Section class="wd-background">
    <template v-slot:section-title>
      <title-block
        title="Over mij"
        subtitle="front-end developer"
      />
    </template>

    <template v-slot:content>
      <div class="w-full lg:w-2/3 p-10 sm:pb-60">
        <p class="font-black">
          {{ $static.about.intro }}
        </p>
        <div v-html="$static.about.body"></div>
      </div>
      <div class="w-full lg:w-1/3 h-46 relative align-wd">
          <div class="block lg:hidden"><g-image src="~/assets/images/willemvanduijn-hero.webp" /></div>
      </div>
    </template>
  </Section>
</template>
<static-query>
query {
  about: contentfulSectionAbout(id:"38s0tNeXlGe8cQJAx15ihx") {
   intro
   title
   subtitle
    body
  }
}
</static-query>
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
  background-size: 65% contain;
  @media screen and (max-width: 1000px) {
    background: none;
  }

}
.align-wd {
  margin-bottom: 0;
  @media screen and (max-width: 650px) {
    margin-bottom: -85px;
  }
  @media screen and (min-width: 651px) and (max-width: 1000px) {
    margin-bottom: -100px;
  }
}
</style>