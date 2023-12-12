import webpack from 'webpack';
import path from 'path';

// ---------------------------------------------------------- plugins imports

import HTMLWebpackPlugin from 'html-webpack-plugin';

// ---------------------------------------------------------- pathes

const entryPoint = path.resolve(__dirname, 'src', 'index.ts');
const outputFolder = path.resolve(__dirname, 'build');
const outputFilename = '[name].[contenthash].js';

const defaultExtensions = ['.tsx', '.ts', '.js'];

// ---------------------------------------------------------- plugins settings
const progressPluginSettings = new webpack.ProgressPlugin();
const HTMLWebpackSettings = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, 'public', 'index.html'),
});

// ---------------------------------------------------------- enable plugins

const plugins = [HTMLWebpackSettings, progressPluginSettings];

// ---------------------------------------------------------- loaders rules

const typeScriptRules = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
};

// ---------------------------------------------------------- global configuration

const config: webpack.Configuration = {
  mode: 'production', // development | production
  entry: entryPoint,
  output: {
    filename: outputFilename,
    path: outputFolder,
    clean: true, // clear target folder before build
  },
  plugins: plugins,
  module: {
    // non JS loaders rules (png, css, ts, jpeg...) files processing:
    rules: [typeScriptRules],
  },
  resolve: {
    extensions: defaultExtensions,
    // allows imports without extensions: import Component from './component'
  },
};

export default config;
