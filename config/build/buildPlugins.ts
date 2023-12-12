import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

import { BuildOptions } from './types/config';

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  const progressPluginSettings = new webpack.ProgressPlugin();
  const HTMLWebpackSettings = new HTMLWebpackPlugin({
    template: paths.html,
  });

  const plugins = [HTMLWebpackSettings, progressPluginSettings];
  return plugins;
}
