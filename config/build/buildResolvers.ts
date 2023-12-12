import webpack from 'webpack';

export function buildResolvers(): webpack.ResolveOptions {
  const defaultExtensions = ['.tsx', '.ts', '.js'];

  const resolveOptions = {
    extensions: defaultExtensions,
    // allows imports without extensions: import Component from './component'
  };

  return resolveOptions;
}
