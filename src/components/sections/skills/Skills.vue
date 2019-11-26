<template>
  <Section class="wd-background">
    <template v-slot:section-title>
      <TitleBlock
        title="Waarom mij inhuren?"
        subtitle="HTML / SCSS • JAVASCRIPT • ANGULAR • VUE"
      />
    </template>

    <template v-slot:content>
      <div class="w-full p-10">
        <p class="font-black">
            Door de jaren heen heb ik aan verscheidene Front-end projecten bij verscheidene organisaties gewerkt. Door de verscheidenheid aan projecten ook met een ruim scala aan technieken kunnen werken. Mijn voorkeur gaat uit naar het werken met de frameworks Angular &amp; Vue.
        </p>
        <p>
            Ik ben gewend aan een agile werkomgeving (SCRUM) en aan het werken in autonome DevOps/Feature teams.
            Doordat ik zelf zeer toegankelijk ben heb ik doorgaans weinig moeite om me aan te passen aan nieuwe omgevingen/teams.
            Door mijn open persoonlijkheid vinden mensen het ook prettig om met me samen te werken.
        </p>
        <!-- SKILLS HERE: #TODO replace with v-for when dynamic path for g-image is available -->
        <div class="skills-wrapper">

          <h3 class="text-center">U kunt bij mij o.a. terecht voor:</h3>
          <!-- Four columns -->
          <div class="flex flex-wrap mb-4">

            <div class="w-1/4">
              <SkillCard title="Angular">
                <template v-slot:image>
                  <g-image
                    src="~/assets/images/dev-logos/angular.png"
                    alt="Angular"
                  />
                </template>
              </SkillCard>
            </div>

            <div class="w-1/4">
              <SkillCard title="Vue">
                <template v-slot:image>
                  <g-image
                    src="~/assets/images/dev-logos/vue.png"
                    alt="Vue"
                  />
                </template>
              </SkillCard>
            </div>

            <div class="w-1/4">
              <SkillCard title="Stencil">
                <template v-slot:image>
                  <g-image
                    src="~/assets/images/dev-logos/stencil.png"
                    alt="Stencil"
                  />
                </template>
              </SkillCard>
            </div>

            <div class="w-1/4">
              <SkillCard title="Javascript">
                <template v-slot:image>
                  <g-image
                    src="~/assets/images/dev-logos/javascript-plain.png"
                    alt="Vue"
                  />
                </template>
              </SkillCard>
            </div>

             <div class="w-1/4">
              <SkillCard title="Typescript">
                <template v-slot:image>
                  <g-image
                    src="~/assets/images/dev-logos/typescript-plain.png"
                    alt="Vue"
                  />
                </template>
              </SkillCard>
            </div>

            <div class="w-1/4">
              <SkillCard title="Html / (s)css">
                <template v-slot:image>
                  <g-image
                    src="~/assets/images/dev-logos/html5.png"
                    alt="Vue"
                  />
                </template>
              </SkillCard>
            </div>

            <div class="w-1/4">
              <SkillCard title="Sass">
                <template v-slot:image>
                  <g-image
                    src="~/assets/images/dev-logos/sass.png"
                    alt="Vue"
                  />
                </template>
              </SkillCard>
            </div>

            <div class="w-1/4">
              <SkillCard title="node">
                <template v-slot:image>
                  <g-image
                    src="~/assets/images/dev-logos/node.png"
                    alt="Vue"
                  />
                </template>
              </SkillCard>
            </div>

            <div class="w-1/4">
              <SkillCard title="GraphQL">
                <template v-slot:image>
                  <g-image
                    src="~/assets/images/dev-logos/GraphQL_Logo.png"
                    alt="GraphQL"
                  />
                </template>
              </SkillCard>
            </div>

            <div class="w-1/4">
              <SkillCard title="Apollo">
                <template v-slot:image>
                  <g-image
                    src="~/assets/images/dev-logos/apollo.png"
                    alt="Apollo"
                  />
                </template>
              </SkillCard>
            </div>

            <div class="w-1/4">
              <SkillCard title="Webpack">
                <template v-slot:image>
                  <g-image
                    src="~/assets/images/dev-logos/webpack-original.png"
                    alt="Webpack"
                  />
                </template>
              </SkillCard>
            </div>

            <div class="w-1/4">
              <SkillCard title="NPM">
                <template v-slot:image>
                  <g-image
                    src="~/assets/images/dev-logos/npm-original-wordmark.png"
                    alt="NPM"
                  />
                </template>
              </SkillCard>
            </div>

          </div>
        </div>
      </div>

    </template>
  </Section>
</template>
<script>
import TitleBlock from '~/components/title-block/TitleBlock.vue'
import Section from '~/components/section/Section.vue'
import SkillCard from '~/components/ui-components/SkillCard.vue'
export default {

            computed: {
                skills() {
                    return [
                        {
                            title: "Angular",
                            imageurl: require('!!assets-loader!~/assets/images/dev-logos/angular.png') 
                        },
                        {
                            title: "Vue",
                            imageurl: require('!!assets-loader!~/assets/images/dev-logos/vue.png') 
                        },
                        {
                            title: "Stencil",
                            imageurl: require('!!assets-loader!~/assets/images/dev-logos/vue.png') 
                        },
                        {
                            title: "Javascript",
                            imageurl: require('!!assets-loader!~/assets/images/dev-logos/vue.png') 
                        },
                        {
                            title: "Typescript",
                            imageurl: require('!!assets-loader!~/assets/images/dev-logos/vue.png') 
                        },
                        {
                            title: "HTML / (S)CSS",
                            imageurl: require('!!assets-loader!~/assets/images/dev-logos/vue.png') 
                        },
                        {
                            title: "SASS",
                            imageurl: require('!!assets-loader!~/assets/images/dev-logos/vue.png') 
                        },
                        {
                            title: "Node",
                            imageurl: require('!!assets-loader!~/assets/images/dev-logos/vue.png') 
                        },
                        {
                            title: "GraphQL",
                            imageurl: require('!!assets-loader!~/assets/images/dev-logos/vue.png') 
                        },
                        {
                            title: "Apollo",
                            imageurl: require('!!assets-loader!~/assets/images/dev-logos/vue.png') 
                        },
                        {
                            title: "Webpack",
                            imageurl: require('!!assets-loader!~/assets/images/dev-logos/vue.png') 
                        },
                        {
                            title: "NPM",
                            imageurl: require('!!assets-loader!~/assets/images/dev-logos/vue.png') 
                        }
                    ]
                }
        },
    components: {
        Section,
        TitleBlock,
        SkillCard
    },
    
}
</script>
<style lang="scss" scoped>

</style>