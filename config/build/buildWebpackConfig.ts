import webpack from 'webpack';

import { BuildOptions } from './types/config';

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode } = options;
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
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}
