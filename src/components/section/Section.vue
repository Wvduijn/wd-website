<template>
    <Section class="section">
        <div class="container mx-auto max-w-3xl pt-20 pb-20">
            <slot name="section-title"></slot>
            <div class="flex content-center justify-center flex-wrap">
                <slot name="content" />
            </div>
        </div>
    </Section>
</template>
<style lang="scss" scoped>
.section {
    //background: var(--main-gradient);
    background: var(--section-bg-dark);
}
</style>
