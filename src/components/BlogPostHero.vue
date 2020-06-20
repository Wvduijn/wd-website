<template>
    <div
        class="wd-blogpost-hero"
        :style="{ background: `url(${post.heroImage.file.url}) no-repeat` }"
    >
        <div class="wd-blogpost-hero__wrapper mx-auto max-w-3xl">
            <h1 class="wd-blogpost-hero__title text-4xl">{{ post.title }}</h1>
            <h2
                class="wd-blogpost-hero__subtitle font-normal tracking-wider text-sm"
            >
                gepost op: {{ post.publishDate }} door {{ post.author.name }}
            </h2>
        </div>
    </div>
</template>

<script>
// #TODO: Images door contentful API trekken om optimale image te serven :
// https://www.contentful.com/developers/docs/references/images-api/#/reference/resizing-&-cropping/crop-rounded-corners-&-circle-elipsis
export default {
    props: ['post'],
}
</script>

<style lang="scss" scoped>
@keyframes kenburns {
    0% {
        opacity: 0;
    }
    5% {
        opacity: 1;
    }
    95% {
        transform: scale3d(1.5, 1.5, 1.5) translate3d(-190px, -120px, 0px);
        animation-timing-function: ease-in;
        opacity: 1;
    }
    100% {
        transform: scale3d(2, 2, 2) translate3d(-170px, -100px, 0px);
        opacity: 0;
    }
}

.wd-blogpost-hero {
    box-shadow: inset 0px 11px 8px -10px #333, inset 0px -11px 8px -10px #333;
    background-size: cover !important;
    position: relative;
    height: 466px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    padding-bottom: 50px;
    border-bottom: 1px solid var(--orange);

    &__effect {
        animation: kenburns 30s infinite;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: var(--main-gradient-trans);
    }

    &__wrapper {
        display: grid;
        width: 100%;
        z-index: 1;
        padding: 0 4%;
    }

    &__title,
    &__subtitle {
        font-family: 'Roboto', sans-serif;
        color: #fff;
        margin: 0 0 16px 0;
        text-transform: uppercase;
    }
    &__subtitle {
        text-transform: uppercase;
        color: var(--orange);
        padding: 10px;
        background: var(--bg-content-color);
    }
}
</style>
