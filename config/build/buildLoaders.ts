// non JS loaders rules (png, css, ts, jpeg...) files processing

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssRules = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module'),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:4]' : '[hash:base64:4]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const typeScriptRules = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typeScriptRules, cssRules];
}
