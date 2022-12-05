const { merge } = require("webpack-merge");
const config = require("./webpack.dev");

module.exports = merge(config, {
   devServer: {
      host: 'localhost',

      open: true,

      hot: true,

      port: 3000
   }
})