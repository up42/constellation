<template>
  <div class="spacing">
    <div
      v-for="(prop, index) in tokens"
      :key="index"
      :class="$style.space"
      :style="{ lineHeight: prop.value, height: prop.value }"
    >
      ${{prop.name.replace(/_/g, "-")}}
      <span>({{prop.value}})</span>
    </div>
  </div>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json";
import { filterByCategory } from "../utils/tokenFilter";

/**
 * These tokens are used for padding, margins, and position.
 * To edit spacing, see
 * [/src/tokens/spacing.yml](https://github.com/up42/constellation/blob/master/src/tokens/spacing.json).
 */
export default {
  name: "Spacing",
  data() {
    return {
      tokens: filterByCategory(designTokens.props, "space")
    };
  }
};
</script>

<style lang="scss" module>
@import "../docs.tokens.scss";
@import "../../src/assets/tokens/tokens.scss";
@import "../../src/styles/base.scss";

/* STYLES
--------------------------------------------- */

.spacing {
  margin-top: $space-l;
  overflow: hidden;
  max-width: 1176px;
  width: 100%;
}
.space {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: $radius-default;
  box-shadow: $shadow-s-inset;
  margin-bottom: $space-xs;
  font-size: $size-s;
  font-family: $font-text;
  color: $color-rich-black;
  background: tint(#c4cdd5, 85%);
  text-align: center;
  position: relative;
  float: left;
  width: 100%;
  span {
    margin-left: 5px;
    color: $color-silver;
    user-select: none;
    font-style: normal;
  }
}
</style>

<docs>
  ```jsx
  <spacing/>
  ```
</docs>