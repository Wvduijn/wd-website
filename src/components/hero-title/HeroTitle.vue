<template>
    <div class="py-20 absolute-center">
        <div class="hero-wrapper absolute-center text-center">
            <div class="hero-center">
                <div class="wd-logo">
                    <g-image
                        src="~/assets/images/wd.svg"
                        class="wd-logo__image"
                        alt="WD - Front-end Developer"
                    />
                </div>
                <h1 class="hero-title text-4xl uppercase font-semibold">
                    Willem van Duijn
                    <span class="title-spacer"></span>
                    <span
                        class="block uppercase font-thin tracking-wider text-3xl"
                        >Front-end Developer</span
                    >
                    <span class="title-spacer"></span>
                    <span
                        class="block uppercase font-thin tracking-wider font-bold text-sm"
                        >websites & webapps met het oog op scalability</span
                    >
                </h1>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.hero-center {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.hero-title {
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    letter-spacing: 0.05em;
    color: #f9f9f9;
}
.title-spacer {
    display: block;
    border: 0 solid #e7e6e6;
    border-color: #f9f9f9;
    border-top-width: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    max-width: 100%;
}
.parent {
    position: relative;
}
.absolute-center {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.wd-logo {
    margin-top: 40px;
    z-index: 1;
    // added min-width for firefox
    min-width: 300px;
    &:hover {
        cursor: pointer;
    }

    &__image {
        width: 100%;
    }
}
</style>
