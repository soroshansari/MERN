const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_fnames: true
        }
      })
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /(.*)environments\/environment(\.*)/,
      function(resource) {
        resource.request = resource.request.replace(
          /environments\/environment/,
          `environments/environment.prod`
        );
      }
    )
  ]
});
