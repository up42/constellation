const path = require("path");

module.exports = {
  output: {
    base: path.resolve(__dirname, "./dist"),
    styles: path.resolve(__dirname, "./dist/styles"),
    compiledCss: path.resolve(__dirname, "./dist/css"),
    assets: path.resolve(__dirname, "./dist/assets"),
    components: path.resolve(__dirname, "./dist/components")
  },
  assets: path.resolve(__dirname, "./src/assets"),
  styles: path.resolve(__dirname, "./src/styles"),
  components: path.resolve(__dirname, "./src/components")
};
