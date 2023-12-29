const path = require('path');
const PugPlugin = require('pug-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    path: path.join(__dirname, 'public/'),
    publicPath: '/',
    clean: true,
  },

  resolve: {
    // aliases used in sources of pug, scss, js
    alias: {
      // App: path.join(__dirname, 'src/app/'),
      // Views: path.join(__dirname, 'src/views/'),
      // Fonts: path.join(__dirname, 'src/assets/fonts/'),
      images: path.join(__dirname, 'src/assets/images'),
      css: path.join(__dirname, 'src/assets/css'),
      js: path.join(__dirname, 'src/assets/js'),
      data: path.join(__dirname, 'src/assets/data'),
    },
  },

  entry: {
    // The Pug file is the entry-point for all scripts and styles.
    // Source scripts and styles must be specified directly in Pug.
    // Do not need to define JS and SCSS in the webpack entry.

    index: './src/views/index.pug', // output public/index.html

    // ...
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    open: true,
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    // enable processing of Pug files defined in webpack entry
    new PugPlugin({
      js: {
        // output filename of extracted JS file from source script defined in Pug
        filename: 'assets/js/[name].[contenthash:8].js',
      },
      css: {
        // output filename of extracted CSS file from source style defined in Pug
        filename: 'assets/css/[name].[contenthash:8].css',
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader, // PugPlugin already contain the pug-loader
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'postcss-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff2?|fnt|ico|webp)$/,
        type: 'asset/resource',
      },
    ],
  },
};
