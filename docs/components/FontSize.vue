<template>
  <div :class="$style.fontSizes">
    <div
      v-for="(prop, index) in tokens"
      :key="index"
      class="font"
      :style="{ fontSize: prop.value }"
    >
      ${{prop.name.replace(/_/g, "-")}}
      <span>({{prop.value}})</span>
    </div>
  </div>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json";
import { filterByCategory } from "../utils/tokenFilter";
import orderBy from "lodash/orderBy";

/**
 * To edit font-sizes, see
 * [/src/tokens/font-size.yml](https://github.com/up42/constellation/blob/master/src/tokens/font-size.yml).
 */
export default {
  name: "FontSize",
  data() {
    return {
      tokens: filterByCategory(designTokens.props, "font-size")
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

.fontSizes {
  margin-top: $space-l;
  overflow: hidden;
  width: 100%;
}
.font {
  font-family: $font-heading;
  font-weight: $weight-bold;
  line-height: $line-height-xs;
  color: $color-rich-black;
  margin-bottom: $space-s;
  font-style: normal;
  span {
    letter-spacing: -0.02em;
    margin-left: 10px;
    font-weight: $weight-normal;
    color: $color-silver;
    user-select: none;
    font-style: normal;
  }
}
</style>

<docs>
  ```jsx
  <FontSize/>
  ```
</docs>