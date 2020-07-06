<template>
    <div class="post-card content-box-home">
        <div class="post-card__header">
            <g-image
                alt="Cover image"
                v-if="post.heroImage"
                class="post-card__image"
                :src="post.heroImage.file.url"
            />
        </div>
        <div class="post-card__content">
            <h2 class="post-card__title">{{ post.title }}</h2>
            <PostMeta class="post-card__meta" :post="post" />
            <PostTags class="post-card__tags" :post="post" />

            <g-link class="post-card__link" :to="`/blog/${post.slug}`"
                >Link</g-link
            >
        </div>
    </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
    components: {
        PostMeta,
        PostTags,
    },
    props: ['post'],
}
</script>

<style lang="scss">
.post-card {
    margin-bottom: var(--space);
    position: relative;
    font-family: 'Roboto', sans-serif;
    &__header {
        height: 100px;
        margin-left: calc(20px * -1);
        margin-right: calc(20px * -1);
        margin-bottom: calc(20px / 2);
        margin-top: calc(20px * -1);
        overflow: hidden;
        border-radius: var(--radius) var(--radius) 0 0;

        &:empty {
            display: none;
        }
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__title {
        margin-top: 1rem;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
    }

    &__tags {
        z-index: 1;
        position: relative;
    }

    &__link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        overflow: hidden;
        text-indent: -9999px;
        z-index: 0;
    }
}
</style>
