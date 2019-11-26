<template>
    <Section>
    <template v-slot:section-title>
      <TitleBlock
        title="Waarom mij inhuren?"
        subtitle="HTML / SCSS • JAVASCRIPT • ANGULAR • VUE"
      />
    </template>

    <template v-slot:content>
        CLIENT SECTION
    </template>
     </Section>
</template>
<script>
import TitleBlock from '~/components/title-block/TitleBlock.vue'
import Section from '~/components/section/Section.vue'

export default {
        components: {
        Section,
        TitleBlock,
    },
}
</script>
<style lang="scss" scoped>

</style>