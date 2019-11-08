const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  title: "Constellation Design System",
  defaultExample: true,
  theme: {
    maxWidth: "100%",
    sidebarWidth: 240,
    fontFamily: {
      base: ["'Fira Sans'", "Helvetica", "Arial", "sans-serif"],
      monospace: ["Consolas", "'Liberation Mono'", "Menlo", "monospace"]
    }
  },
  editorConfig: {
    theme: "night"
  },
  require: [
    path.resolve(__dirname, "docs/docs.styles.scss"),
    path.resolve(__dirname, "src/styles/marketing-app/_base.scss"),
    path.resolve(__dirname, "src/utils/webFontLoader.js")
  ],
  pagePerSection: true,
  assetsDir: path.resolve(__dirname, "src/assets"),
  sections: [
    {
      name: "Brand Guidelines",
      content: "docs/brand-guidelines.md",
      sectionDepth: 1,
      exampleMode: "hide",
      usageMode: "hide"
    },
    {
      name: "Voice & Tone",
      content: "docs/voice-and-tone.md",
      sectionDepth: 1,
      exampleMode: "hide",
      usageMode: "hide"
    },
    {
      name: "Design Tokens",
      content: "docs/tokens.md",
      sectionDepth: 1,
      exampleMode: "hide",
      usageMode: "hide",
      components: () => [
        "docs/components/Color.vue",
        "docs/components/FontSize.vue",
        "docs/components/Spacing.vue",
        "docs/components/All.vue",
      ],
    },
    {
      name: "UI Components",
      components: "src/components/**/[A-Z]*.vue",
      content: "docs/elements.md",
      sectionDepth: 2
    }
  ],
  webpackConfig: {
    resolve: {
      extensions: [".js", ".json", ".vue", ".ts", ".css", ".scss"],
      alias: {
        "~": path.resolve(__dirname, "src"),
        "@": path.resolve(__dirname, "src")
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader"
        },
        {
          test: /\.css(\?.*)?$/,
          use: [
            { loader: "vue-style-loader" },
            { loader: "css-loader", options: { sourceMap: true } }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            { loader: "vue-style-loader" },
            {
              loader: "css-loader",
              options: { sourceMap: true, modules: true, importLoaders: 1 }
            },
            { loader: "sass-loader", options: { sourceMap: true } },
            {
              loader: "sass-resources-loader",
              options: {
                sourceMap: true,
                resources: [
                  path.resolve(__dirname, "src/assets/tokens/tokens.scss"),
                  path.resolve(
                    __dirname,
                    "src/styles/marketing-app/mixins/_fonts.scss"
                  )
                ]
              }
            }
          ]
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: "url-loader",
          options: {
            limit: 10000,
            name: path.resolve(
              __dirname,
              "src/styles/marketing-app/fonts/[name].[hash:7].[ext]"
            )
          }
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  },
  usageMode: "expand",
  exampleMode: "expand"
};
