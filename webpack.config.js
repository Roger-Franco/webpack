const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'estilo.css',
    })
  ],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        // 'style-loader', // Adicona CSS a DOM injetando a tag <style>
        'css-loader', // interpreta @import, url() ...
        'sass-loader'
      ]
    }]
  }
}