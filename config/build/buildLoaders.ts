// non JS loaders rules (png, css, ts, jpeg...) files processing

import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  const typeScriptRules = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typeScriptRules];
}
