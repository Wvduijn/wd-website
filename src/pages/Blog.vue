<template>
    <BlogLayout :show-logo="true">
        <Section>
            <template v-slot:content>
                <div class="posts">
                    <PostCard
                        v-for="edge in $page.posts.edges"
                        :key="edge.node.id"
                        :post="edge.node"
                    />
                    <!-- <PostCard
					v-for="{ node } of loadedPosts"
					:key="node.id"
					:post="node"
				/> -->
                    <!-- <Pager :info="$page.posts.pageInfo"/> -->
                    <ClientOnly>
                        <infinite-loading
                            @infinite="infiniteHandler"
                            spinner="spiral"
                            v-if="$page"
                        >
                            <div slot="no-more">
                                Je bent door alle posts heen ;)
                            </div>
                            <div slot="no-results">
                                Sorry, nog geen posts :(
                            </div>
                        </infinite-loading>
                    </ClientOnly>
                </div>
            </template>
        </Section>
    </BlogLayout>
</template>

<page-query>
query ($page: Int) {
  posts: allContentfulBlogPost(perPage: 2, page: $page) @paginate {
    pageInfo{
      totalPages
      currentPage
    }
  	edges {
      node {
        slug
        publishDate (format:"DD-MM-YYYY", locale: "nl-NL")
        id
        title
        description
        body
        hashtags {
          title
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
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
import BlogLayout from '~/layouts/Blog.vue'
import Section from '~/components/section/Section.vue'

export default {
    components: {
        BlogLayout,
        PostCard,
        Section,
        InfiniteLoading: () => import('vue-infinite-loading'),
    },
    methods: {
        // Handler for infinite scroll
        async infiniteHandler($state) {
            try {
                const results = await this.$fetch(
                    '/blog/' + (this.$page.posts.pageInfo.currentPage + 1)
                )
                if (results.data.posts.edges.length > 0) {
                    this.$page.posts.pageInfo.currentPage =
                        this.$page.posts.pageInfo.currentPage + 1
                    this.$page.posts.edges = this.$page.posts.edges.concat(
                        results.data.posts.edges
                    )
                    $state.loaded()
                } else {
                    $state.complete()
                }
            } catch (error) {
                console.log(error)
            }
        },
    },
}
</script>
