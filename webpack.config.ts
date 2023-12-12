import webpack from 'webpack';
import path from 'path';

import { BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

// ---------------------------------------------------------- pathes

const entryPath = path.resolve(__dirname, 'src', 'index.ts');
const buildPath = path.resolve(__dirname, 'build');
const htmlPath = path.resolve(__dirname, 'public', 'index.html');

const paths: BuildPaths = {
  entry: entryPath,
  build: buildPath,
  html: htmlPath,
};

// ---------------------------------------------------------- global configuration

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
  mode: 'development',
  paths: paths,
  isDev: isDev,
});

export default config;
