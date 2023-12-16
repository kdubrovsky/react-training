import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  const progressPlugin = new webpack.ProgressPlugin();
  const HTMLWebpack = new HTMLWebpackPlugin({
    template: paths.html,
  });
  const miniCSS = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  });

  const plugins = [HTMLWebpack, progressPlugin, miniCSS];
  return plugins;
}
