const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    // minimize: false
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          keep_fnames: true,
        },
      })
    ],
  },
  plugins: [
      new webpack.NormalModuleReplacementPlugin(/(.*)environments\/environment(\.*)/, function(resource) {
          resource.request = resource.request.replace(/environments\/environment/, `environments/environment.test`);
        }),
  ],
});