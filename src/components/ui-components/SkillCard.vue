<template>
    <div class="skill">
        <div class="skill__image-wrap">
            <div class="skill__image w-full flex justify-center">
                <slot name="image" />
            </div>
        </div>
        <h6 class="w-full skill__title flex justify-center mt-5">
            {{ title }}
        </h6>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            required: true,
            type: String,
        },
    },
}
</script>
<style lang="scss" scoped>
.skill {
    margin: 20px 0;
    &__image-wrap {
        height: 100px;
        display: flex;
    }
    &__image {
        justify-content: center;
        align-items: center;
    }
    &__title {
        font-family: 'Roboto', sans-serif;
        text-transform: uppercase;
        font-size: 0.75em;
        letter-spacing: 4px;
    }
}
</style>
