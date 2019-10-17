<template>
  <div>
    <div v-for="(tokenList, index) in tokens" :key="index">
      <h2>{{index}}</h2>
      <div class="colors">
        <div v-for="(prop, index) in tokenList" class="color" :key="index">
          <div class="swatch" :style="{ backgroundColor: prop.value }" />
          <h3>{{prop.name.replace(/_/g, " ").replace(/color/g, "").replace(`${prop.category}`, "")}}</h3>
          <span>
            <em>RGB:</em>
            {{prop.value}}
          </span>
          <span>
            <em>SCSS:</em>
            ${{prop.name.replace(/_/g, "-")}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json";
import { filterByTypeGroupByCategory } from "../../utils/tokenFilter";
import orderBy from "lodash/orderBy";

/**
 * The colors in the palette have been grouped for better understanding the use of each hue.
 * These hues should be used purposefully to communicate how things function in the
 * interface.
 * To edit the colors, see
 * [/src/tokens/color.yml](https://github.com/up42/constellation/blob/master/src/tokens/color.json).
 */
export default {
  name: "Color",
  data() {
    return {
      tokens: filterByTypeGroupByCategory(designTokens.props, "color")
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../docs.tokens.scss";

/* STYLES
--------------------------------------------- */

.colors {
  margin-top: $space-l;
  display: block;
  width: 100%;
  @supports (display: grid) {
    display: grid;
    max-width: 1200px;
    align-content: stretch;
    justify-content: left;
    grid-template-columns:
      calc(20% - #{$space-m})
      calc(20% - #{$space-m})
      calc(20% - #{$space-m})
      calc(20% - #{$space-m})
      calc(20% - #{$space-m});
    grid-column-gap: $space-m;
    @media (max-width: 1300px) {
      grid-template-columns:
        calc(25% - #{$space-m})
        calc(25% - #{$space-m})
        calc(25% - #{$space-m})
        calc(25% - #{$space-m});
    }
    @media (max-width: 1100px) {
      grid-template-columns:
        calc(33.333% - #{$space-m})
        calc(33.333% - #{$space-m})
        calc(33.333% - #{$space-m});
    }
    @media (max-width: 900px) {
      grid-template-columns:
        calc(50% - #{$space-m})
        calc(50% - #{$space-m});
    }
    @media (max-width: 400px) {
      grid-template-columns: 100%;
    }
  }
}
.swatch {
  @include stack-space($space-s);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  height: $space-xxl;
  margin-left: -#{$space-s};
  margin-top: -#{$space-s};
  width: calc(100% + #{$space-l});
  float: left;
}
h2,
h3 {
  @include stack-space($space-xs);
  text-transform: capitalize;
  line-height: 1.2;
  width: 100%;
  float: left;
}

h2 {
  margin-top: $space-m;
}

.color {
  padding: $space-scale-16;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: $space-m;
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 rgba(63, 63, 68, 0.15);
  font-size: $size-s;
  font-family: $font-text;
  color: $color-rich-black;
  border-radius: $radius-default;
  overflow: hidden;
  text-align: left;
  @supports (display: grid) {
    width: 100%;
    float: left;
  }
  @media (max-width: 400px) {
    margin-bottom: $space-m;
  }
  &:hover {
    span {
      color: $color-rich-black;
      em {
        color: $color-silver;
      }
    }
  }
  span {
    margin-bottom: $space-xs;
    line-height: 1.3;
    color: $color-silver;
    font-size: $size-s;
    width: 100%;
    float: left;
    em {
      user-select: none;
      font-style: normal;
    }
  }
}
</style>

<docs>
  ```jsx
  <color/>
  ```
</docs>
