<template>
    <Section class="wd-background">
        <template v-slot:section-title>
            <title-block
                :title="$static.skillscontent.title"
                :subtitle="$static.skillscontent.title"
            />
        </template>

        <template v-slot:content>
            <div class="w-full p-10">
                <p class="font-black">
                    {{ $static.skillscontent.intro }}
                </p>
                <p>
                    {{ $static.skillscontent.body }}
                </p>
                <div class="skills-wrapper">
                    <button
                        v-if="!showSkills"
                        type="button"
                        class="showskill-button float-shadow uppercase flex justify-center float-shadow"
                        @click="toggleSkills()"
                    >
                        Waar kunt u bij mij voor terecht ?
                    </button>
                    <div v-if="showSkills">
                        <h3 class="text-center">
                            U kunt bij mij o.a. terecht voor:
                        </h3>
                        <div class="flex flex-wrap mb-4">
                            <div
                                class="w-2/4 md:w-1/4"
                                v-for="(skill, index) in skills"
                                :key="index"
                            >
                                <skill-card :title="skill.title">
                                    <template v-slot:image>
                                        <g-image
                                            :src="
                                                require(`!!assets-loader!@devimages/${skill.imageurl}`)
                                            "
                                            :alt="skill.title"
                                        />
                                    </template>
                                </skill-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Section>
</template>
<static-query>
query {
  skillscontent: contentfulSectionSkills(id:"6snq9TcFb5Yg9xj0XJAfrj"){
  	body
    intro
    title
    subtitle
    id
  }
}
</static-query>
<script>
import TitleBlock from '~/components/title-block/TitleBlock.vue'
import Section from '~/components/section/Section.vue'
import SkillCard from '~/components/ui-components/SkillCard.vue'
export default {
    components: {
        Section,
        TitleBlock,
        SkillCard,
    },
    data: () => {
        return {
            showSkills: false,
            skills: [
                {
                    title: 'Angular',
                    imageurl: 'angular.png',
                },
                {
                    title: 'Vue',
                    imageurl: 'vue.png',
                },
                {
                    title: 'Nuxt',
                    imageurl: 'nuxt.png',
                },
                {
                    title: 'Gridsome',
                    imageurl: 'gridsome.png',
                },
                {
                    title: 'Stencil',
                    imageurl: 'stencil.png',
                },
                {
                    title: 'Javascript',
                    imageurl: 'javascript-plain.png',
                },
                {
                    title: 'Typescript',
                    imageurl: 'typescript-plain.png',
                },
                {
                    title: 'HTML / (S)CSS',
                    imageurl: 'html5.png',
                },
                {
                    title: 'SASS',
                    imageurl: 'sass.png',
                },
                {
                    title: 'Tailwind CSS',
                    imageurl: 'tailwind.png',
                },
                {
                    title: 'Node',
                    imageurl: 'node.png',
                },
                {
                    title: 'GraphQL',
                    imageurl: 'GraphQL_Logo.png',
                },
                {
                    title: 'Apollo',
                    imageurl: 'apollo.png',
                },
                {
                    title: 'Webpack',
                    imageurl: 'webpack-original.png',
                },
                {
                    title: 'NPM',
                    imageurl: 'npm-original-wordmark.png',
                },
                {
                    title: 'JAMStack',
                    imageurl: 'jamstack.png',
                },
            ],
        }
    },
    methods: {
        toggleSkills() {
            console.log('toggle skills')
            this.showSkills = !this.showSkills
            console.log(this.showSkills)
        },
    },
}
</script>
<style lang="scss" scoped>
.wd-background {
    /* background: var(--section-bg-dark); */
    background: var(--main-gradient);
}
.showskill-button {
    font-size: 0.8rem;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin: 50px auto 0;
    color: #fff;
    background: var(--orange-gradient);
    padding: 0.5rem 1rem;

    &:focus {
        outline: none;
    }
}
</style>
