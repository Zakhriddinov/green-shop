const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { merge } = require("webpack-merge");
const { config } = require("./webpack.base");

module.exports = merge(config, {
   mode: "production",
   devtool:"source-map",
   optimization: {
      splitChunks: {
         chunks: 'all',
         cacheGroups: {
            vender: {
               chunks: 'all',
               name: 'verder',
               test: /[\\/]node_modules[\\/]/
            }
         }
      },
      minimize: true
      ,
      minimizer: [new TerserPlugin({
         extractComments: false
      })]
   },
   plugins: [
      new BundleAnalyzerPlugin(),
      new CleanWebpackPlugin({
         cleanOnceBeforeBuildPatterns: ['./build']
      })
   ]
})