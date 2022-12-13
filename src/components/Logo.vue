<template>
    <g-link class="logo" to="/">
        <span>
            <g-image src="~/assets/images/wd.svg" width="70" />
            <!-- &larr; {{ $static.metadata.siteName }} -->
        </span>
    </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
.logo {
    &__image {
        vertical-align: middle;
        border-radius: 99px;
        height: 40px;
        width: 40px;
        margin-right: 0.5em;
    }
}
</style>
