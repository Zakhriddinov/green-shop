const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
// const FriendlyWebpackErrors = require("friendly-errors-webpack-plugin");
const SimpleWebpackProgress = require("simple-progress-webpack-plugin");
const CircularWebpackDependencies = require("circular-dependency-plugin");
const StylelintWebpackPlugin = require("stylelint-webpack-plugin");

const entry = ['./src/index.js']

const output = {
   publicPath: '/',

   filename: 'js/[name].js',
   path: path.resolve(__dirname, '../build')
}

const rules = [
   {
      test: /\.(js|jsx)$/,

      use: 'babel-loader',

      exclude: /node_modules/
   },
   {
      test: /\.(woff|woff2)$/,
      use: {
         loader: 'file-loader',
         options: {
            name: 'fonts/[name].[ext]'
         }
      }
   },
   {
      test: /\.(jpg|jpeg|png|gif)$/i,

      use: [
         {
            loader: 'file-loader',
            options: {
               name: 'images/[name].[ext]'
            }
         },
         'image-webpack-loader'
      ]
   },
   {
      test: /\.svg$/,
      use: [
         {
            loader: "babel-loader"
         },
         {
            loader: "react-svg-loader",
            options: {
               jsx: true // true outputs JSX tags
            }
         }
      ]
   },
   {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
   },
   {
      test: /\.s[ac]ss$/i,
      use: [
         "style-loader",
         "css-loader",
         {
            loader: "sass-loader",
            options: {
               // Prefer `dart-sass`
               implementation: require("sass")
            },
         },
      ],
   },
]

const resolve = {
   extensions: ['.js', '.jsx', '.json', '.wasm'],
   alias: {
      '@assets': path.resolve(__dirname, '../src/assets')
   }
}

const plugins = [

   new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './public/index.html',

      minify: {
         removeComments: true,
         minifyCSS: true,
         removeEmptyAttributes: true
      }
   }),
   // new FriendlyWebpackErrors(),
   new SimpleWebpackProgress(),
   new CircularWebpackDependencies({
      exclude: /node_modules/,
      failOnError: true,
      allowAsyncCycles: false
   }),
   new ESLintPlugin(),
   new StylelintWebpackPlugin({
      files: '**/*.js'
   })
]

const config = {
   entry,
   output,

   resolve,

   plugins,

   module: {
      rules
   },
   devServer: {
      historyApiFallback: true,
      static: {
         directory: path.resolve(__dirname, "../build")
      },
      hot: true,
   },
}
module.exports = {
   config
}