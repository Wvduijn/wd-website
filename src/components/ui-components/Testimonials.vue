<template>
  <div class="carousel w-full">
    <flickity
      ref="flickity"
      :options="flickityOptions"
      
    >
      <div class="carousel-cell">
        <div class="carousel-cell_quote">
          <blockquote>
            &quot;Ik kan het eigenlijk het beste als volgt samenvatten: Willem is een baas. Willem is betrouwbaar, heeft een groot doorzettingsvermogen en werkt keihard. Wat hij toezegt komt hij zonder uitzondering na. Ik heb niet eerder met iemand samengewerkt die zoveel werk kon verzetten in korte tijd. Op het front-end vlak loopt hij voorop. Naast inhoudelijk sterk is Willem ook sociaal gezien een aanwinst voor het team; hij zorgt voor enthousiasme, goede humor en een gezellige sfeer. Ik beveel hem dan ook van harte aan.&quot;
          </blockquote>
          <div class="author">
            Ellen Brunninkhuis
            <span class="company">Kopwerk</span>
          </div>
        </div>
      </div>

      <div class="carousel-cell">
        <div class="carousel-cell_quote">
          <blockquote>
           &quot;Willem is een fijn persoon om mee samen te werken altijd creatief en zeer betrokken bij de projecten waaraan we samen hebben gewerkt, voor zowel PostNL als andere klanten. Daarnaast communiceert Willem ook prettige en heeft hij de interesse /drive om steeds nieuwe online mogelijkheden toe te passen.&quot;
          </blockquote>
          <div class="author">
            Michel Bodaan
            <span class="company">PostNL</span>
          </div>
        </div>
      </div>

      <div class="carousel-cell">
        <div class="carousel-cell_quote">
          <blockquote>
           &quot;Willem is een zeer postief ingestelde collega met een gezonde dosis humor en een hele berg creativiteit. Ik heb dan ook met veel plezier met hem samengewerkt aan diverse in- en externe projecten!&quot;
          </blockquote>
          <div class="author">
            Glen Zoeteweij
            <span class="company">PostNL</span>
          </div>
        </div>
      </div>
      
    </flickity>

  </div>
</template>

<script>
// #TODO: Replace quote cell with component - get data from NetlifyCMS
// Netlify Fields: quotes, author, company

import Flickity from 'vue-flickity';
export default {
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true
        
        // any options from Flickity can be used
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel {

  &-cell {
  width: 100%; /* full width */
  height: 300px; /* height of carousel */
  margin-right: 10px;

  &_quote {
    padding: 20px;
    font-size: .85em;
    color: var(--body-color); 
    text-align: center;
    letter-spacing: 2px;
    font-style: italic;
    line-height: 30px;

  }

  .author, .company {
    text-transform: uppercase;
  }
  .author {
    margin-top: 20px;
    font-weight: bold;
  }

  }
  // render
  /* position dots in carousel */
.flickity-page-dots {
  position: relative;
  bottom: 0px;
}
/* white circles */
.flickity-page-dots .dot {
  width: 12px;
  height: 12px;
  opacity: 1;
  background: transparent;
  border: 2px solid white;
}
/* fill-in selected dot */
.flickity-page-dots .dot.is-selected {
  background: white;
}
.flickity-viewport {
  overflow: hidden;
}
.flickity-enabled:focus{
  outline:none;
}
}
</style>