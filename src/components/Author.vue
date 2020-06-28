<template>
    <div class="author">
        <h1 v-if="showTitle" class="author__site-title">
            {{ $static.metadata.siteName }}
        </h1>

        <p class="author__intro">
            Heb je vragen of wil je iets met me bespreken? <br />
            Neem dan
            <a href="mailto:info@willemvanduijn.dev" title="Contact">contact</a>
            met me op!
        </p>

        <p class="author__links">
            <a href="https://www.linkedin.com/in/willemvanduijn/">LinkedIn</a>
            <a href="https://github.com/Wvduijn">GitHub</a>
        </p>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
    props: ['showTitle'],
}
</script>

<style lang="scss" scoped>
.author {
    margin: 40px auto 0;
    max-width: 500px;
    text-align: center;
    padding-bottom: calc(var(--space) / 2);

    &__image {
        border-radius: 100%;
        width: 90px;
        height: 90px;
        margin-bottom: 1em;
    }

    &__intro {
        opacity: 0.8;
    }

    &__site-title {
        margin: 0 auto;
        font-size: 1.5em;
        max-width: 400px;
    }

    &__links {
        margin-top: -0.5em;
        a {
            margin: 0 0.5em;
        }
    }
}
</style>
