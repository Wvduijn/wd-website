<template>
    <fragment>
        <h2 class="section-title font-black text-3xl text-center">
            {{ title }}
        </h2>
        <h6 class="section-subtitle text-xs text-center">{{ subtitle }}</h6>

        <div class="title-spacer"></div>
    </fragment>
</template>
<script>
export default {
    props: {
        title: String,
        subtitle: String,
    },
}
</script>
<style lang="scss" scoped>
.title-spacer {
    border: 0 solid #e7e6e6;
    border-color: #ffffff;
    border-top-width: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
    width: 100%;
    max-width: 130px;
}
.section-title {
    font-family: 'Poppins', sans-serif;
    color: var(--title-color);
    letter-spacing: 1px;
    margin: 0 0 10px 0;
    text-transform: uppercase;
}
.section-subtitle {
    font-family: 'Roboto', sans-serif;
    color: #ee751c;
    letter-spacing: 4px;
    margin: 0 0 20px 0;
    text-transform: uppercase;
}
</style>
