// non JS loaders rules (png, css, ts, jpeg...) files processing

import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  const cssRules = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  };

  const typeScriptRules = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typeScriptRules, cssRules];
}
