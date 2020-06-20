<template>
    <BlogLayout>
        <Section>
            <template v-slot:content>
                <h2 class="tag-title text-center space-bottom">
                    Alle posts met de tag:
                    <span class="highlighted">#{{ $page.tag.title }}</span>
                </h2>

                <div class="posts">
                    <PostCard
                        v-for="edge in $page.tag.belongsTo.edges"
                        :key="edge.node.id"
                        :post="edge.node"
                    />
                </div>
            </template>
        </Section>
    </BlogLayout>
</template>

<page-query>
query Tag($path: String!) {
  tag: contentfulTag(path: $path ) {
    id
    title
    belongsTo {
      edges {
        node {
          ...on ContentfulBlogPost {
             slug
              id
              title
              date
              publishDate (format:"DD-MM-YYYY", locale: "nl-NL")
              heroImage {
                  file {
                      url
                  }
              }
              author {
                name
              }
              body
              hashtags {
                title
              }
          }
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
        PostCard,
        BlogLayout,
        Section,
    },
    metaInfo() {
        return {
            title: this.$page.tag.title,
        }
    },
}
</script>

<style lang="scss" scoped>
.tag-title {
    margin: 0 0 50px 0;
    border-bottom: 1px solid var(--orange);
    padding-bottom: 20px;
    text-transform: uppercase;
}
.highlighted {
    color: var(--color-accent);
}
</style>
