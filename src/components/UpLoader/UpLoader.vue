<template>
  <div :class="cssClasses">
    <svg :class="[$style.circle, 'vueLoaderCircle']" viewBox="25 25 50 50">
      <circle
        :class="[$style.path, 'vueLoaderPath']"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke-width="2"
        stroke-miterlimit="10"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "UpLoader",
  props: {
    medium: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    warning: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cssClasses() {
      const classes = [this.$style.loader];

      if (this.medium) {
        classes.push(this.$style.medium);
      }
      if (this.large) {
        classes.push(this.$style.large);
      }
      if (this.primary) {
        classes.push(this.$style.primary);
      }
      if (this.secondary) {
        classes.push(this.$style.secondary);
      }
      if (this.danger) {
        classes.push(this.$style.danger);
      }
      if (this.warning) {
        classes.push(this.$style.warning);
      }
      if (this.success) {
        classes.push(this.$style.success);
      }

      return classes;
    }
  }
};
</script>

<style lang="scss" module>
$loader-size: $space-scale-32;
$loader-medium-size: $space-scale-64;
$loader-large-size: $space-scale-120;

$loader-primary-color: $color-brand-dark-matter;
$loader-secondary-color: $color-brand-titan-pink;
$loader-danger-color: $color-utility-danger-default;
$loader-warning-color: $color-utility-info-default;
$loader-success-color: $color-utility-success-default;

.loader {
  display: inline-block;
  position: relative;
  width: $loader-size;
  height: $loader-size;

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
}

.circle {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
  stroke: currentColor;

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }
}

.medium {
  width: $loader-medium-size;
  height: $loader-medium-size;
}

.large {
  width: $loader-large-size;
  height: $loader-large-size;
}

.primary {
  .path {
    stroke: $loader-primary-color;
  }
}

.secondary {
  .path {
    stroke: $loader-secondary-color;
  }
}

.danger {
  .path {
    stroke: $loader-danger-color;
  }
}

.warning {
  .path {
    stroke: $loader-warning-color;
  }
}

.success {
  .path {
    stroke: $loader-success-color;
  }
}
</style>
