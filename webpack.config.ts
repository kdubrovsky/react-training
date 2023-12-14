import webpack from 'webpack';
import path from 'path';

import { BuildEnv, BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  //
  // ---------------------------------------------------------- pathes
  const entryPath = path.resolve(__dirname, 'src', 'index.tsx');
  const buildPath = path.resolve(__dirname, 'build');
  const htmlPath = path.resolve(__dirname, 'public', 'index.html');

  const paths: BuildPaths = {
    entry: entryPath,
    build: buildPath,
    html: htmlPath,
  };

  // ---------------------------------------------------------- global configuration

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    paths: paths,
    isDev: isDev,
    port: PORT,
  });

  return config;
};
