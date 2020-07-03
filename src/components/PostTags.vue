<template>
    <div class="post-tags">
        <g-link
            class="post-tags__link"
            v-for="(tag, index) in post.hashtags"
            :key="index"
            :to="`/blog/tag/${tag.title}`"
        >
            {{ tag.title }}
        </g-link>
    </div>
</template>

<script>
export default {
    props: ['post'],
}
</script>

<style lang="scss">
.post-tags {
    display: flex;
    flex-wrap: wrap;
    margin: 1em 0 0;

    &__link {
        margin-right: 0.7em;
        margin-bottom: 10px;
        font-size: 0.8em;
        color: currentColor;
        text-decoration: none;
        background-color: var(--bg-color);
        color: var(--orange);
        padding: 0.5em;
        border-radius: var(--radius);

        &:hover {
            color: var(--color-accent);
        }
    }
}
</style>
