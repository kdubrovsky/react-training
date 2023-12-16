import webpack from 'webpack';

import { BuildOptions } from './types/config';

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;
  const outputFilename = '[name].[contenthash].js';

  return {
    mode: mode, // development | production
    entry: paths.entry,
    output: {
      filename: outputFilename,
      path: paths.build,
      clean: true, // clear target folder before build
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devServer: buildDevServer(options),
    devtool: isDev ? 'inline-source-map' : false,
  };
}
