<template>
    <Section class="posts-background" id="recent-posts">
        <template v-slot:section-title>
            <title-block
                title="Recente Blog Posts"
                subtitle="onderwerpen als Vue, Javascript etc."
            />
        </template>
        <template v-slot:content>
            <div class="posts-wrapper">
                <RecentPostCard
                    v-for="edge in $static.posts.edges"
                    :key="edge.node.id"
                    :post="edge.node"
                />
            </div>
        </template>
    </Section>
</template>
<static-query>
query {
    posts: allContentfulBlogPost(perPage: 3, limit: 3){
  	edges {
      node {
        slug
        publishDate (format:"DD-MM-YYYY", locale: "nl-NL")
        id
        title
        description
        body
        hashtags {
          id
          title
          belongsTo {
            edges {
              node {
                id
              }
            }
          }
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
</static-query>

<script>
import TitleBlock from '~/components/title-block/TitleBlock.vue'
import Section from '~/components/section/Section.vue'
import RecentPostCard from '~/components/sections/recent-posts/RecentPostCard.vue'

export default {
    name: 'RecentPosts',
    components: {
        TitleBlock,
        Section,
        RecentPostCard,
    },
    mounted() {
        console.log(this.$static.posts)
    },
}
</script>

<style lang="scss" scoped>
.posts-background {
    background: var(--recent-postsbg);
}
.posts-wrapper {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 1rem;
    margin-top: var(--space);
    padding: 1rem;

    @include respond-below(sm) {
        grid-template-columns: 1fr 1fr;
    }
    @include respond-below(xs) {
        grid-template-columns: 1fr;
    }
}
</style>
