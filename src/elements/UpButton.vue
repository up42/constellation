<template>
  <component
    :is="as"
    :class="[
      $style.upButton,
      {
        [$style.small]: small,
        [$style.large]: large,
        [$style.alternate]: alternate,
        [$style.muted]: muted,
        [$style.danger]: danger,
        [$style.disabled]: disabled,
      },
    ]"
    :disabled="disabled"
    @click="click"
    :to="to"
    ref="button"
    :name="name"
    :style="{ width: actualWidth }"
  >
    <span :class="$style.icon" v-if="$scopedSlots.icon">
      <slot name="icon" />
    </span>
    <slot v-if="loading === false" />
    <vue-loader :class="$style.loader" v-if="loading === true" />
  </component>
</template>

<script lang="ts">
import VueLoader from "./VueLoader.vue";

export default {
  name: "UpButton",
  components: {
    VueLoader
  },
  props: {
    as: {
      type: String,
      default: "button"
    },
    name: String,
    to: [String, Object],
    small: Boolean,
    large: Boolean,
    alternate: Boolean,
    muted: Boolean,
    danger: Boolean,
    disabled: Boolean,
    loading: Boolean
  },
  computed: {
    actualWidth() {
      return this.loading === true && this.$refs.button
        ? `${this.$refs.button.getBoundingClientRect().width}px`
        : null;
    }
  },
  methods: {
    click(e) {
      if (this.disabled === false && this.loading === false) {
        this.$emit("click", e);
      }
    }
  }
};
</script>

<style lang="scss" module>
// @import "~@/app/shared/designSystem";

.upButton,
a.upButton {
  padding: $space-scale-8 $space-scale-16;
  border: none;
  background: $color-ui-active-default;
  border-radius: $radius-default;
  color: $color-typography-font-inverted;
  @include label-default;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: $color-typography-font-inverted;
    text-decoration: none;
  }
  &.disabled {
    background: lighten($color-ui-active-default, 30%);
    cursor: not-allowed;
  }
}

.upButton + .upButton {
  margin-left: $space-scale-8;
}

.upButton.small {
  padding: $space-scale-4 $space-scale-8;
  border-radius: $radius-small;
}

.upButton.large {
  padding: $space-scale-16 $space-scale-32;
  @include label-default;
  .loader {
    width: $space-scale-24 - $space-scale-4;
    height: $space-scale-24 - $space-scale-4;
  }
}

.upButton.alternate {
  color: $color-ui-active-default;
  background: transparent;
  box-shadow: inset 0 0 0 1px $color-ui-active-default;
  &:hover {
    color: $color-ui-active-default;
  }
  &.disabled {
    box-shadow: inset 0 0 0 1px lighten($color-ui-active-default, 30%);
    cursor: not-allowed;
  }
}

.upButton.muted {
  color: $color-typography-font-light;
  background: transparent;
  box-shadow: inset 0 0 0 1px $color-ui-border-default;
  &:hover {
    color: $color-typography-font-light;
  }
  &.disabled {
    box-shadow: inset 0 0 0 1px lighten($color-typography-font-light, 30%);
    cursor: not-allowed;
  }
}

.upButton.danger {
  color: $color-utility-danger-default;
  background: transparent;
  box-shadow: inset 0 0 0 1px $color-utility-danger-default;
  &:hover {
    color: $color-utility-danger-default;
  }
  &.disabled {
    box-shadow: inset 0 0 0 1px lighten($color-utility-danger-default, 30%);
    cursor: not-allowed;
  }
}

.icon {
  margin-right: $space-scale-8;
  i {
    margin: 0;
    vertical-align: unset;
  }
}

.loading {
  padding: 0 $space-scale-16;
}

.loader {
  height: $space-scale-16 - $space-scale-4;
  width: $space-scale-16 - $space-scale-4;
}
</style>
