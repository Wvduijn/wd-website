<template>
  <Section class="dark-bg">
    <template v-slot:section-title>
      <title-block
        title="Wat zeggen opdrachtgevers"
        subtitle="onder andere gewerkt voor"
      />
    </template>

    <template v-slot:content>
      <div class="w-full">
        <div class="flex flex-wrap mb-4 clients">
            <div class="w-1/4 flex justify-center">
              <g-image
                    src="~/assets/images/comp-logos/kpn-logo.png"
                    alt="KPN"
              />
            </div>
            <div class="w-1/4 flex justify-center">
              <g-image
                    src="~/assets/images/comp-logos/postnl-logo.png"
                    alt="PostNL"
              />
            </div>
            <div class="w-1/4 flex justify-center">
              <g-image
                    src="~/assets/images/comp-logos/telfort-logo.png"
                    alt="Telfort"
              />
            </div>
            <div class="w-1/4 flex justify-center">
              <g-image
                    src="~/assets/images/comp-logos/cendris-logo.png"
                    alt="Cendris"
              />
            </div>
        </div>    
      </div>
      <Testimonials />
    </template>
  </Section>
</template>
<script>

import TitleBlock from '~/components/title-block/TitleBlock.vue'
import Section from '~/components/section/Section.vue'
import Testimonials from '~/components/ui-components/Testimonials.vue'

export default {
    components: {
      Section,
      TitleBlock,
      Testimonials
    },
}
</script>
<style lang="scss" scoped>
.dark-bg {
  background: var(--bg-color2);
}
.clients {
  margin: 20px 0;
  border-radius: 20px;
  padding:20px;
}
</style>