import type webpack from 'webpack';
// Config
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
// Types
import { type BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  return {
    entry: options.paths.entry,
    mode: options.mode,
    module: {
      rules: buildLoaders(options)
    },
    devtool: options.isDev ? 'eval-cheap-source-map' : undefined,
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    output: {
      path: options.paths.build,
      filename: '[name].[contenthash:6].js',
      clean: true
    },
    devServer: options.isDev ? buildDevServer(options) : undefined
  };
}
