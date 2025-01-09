import webpack from "webpack";
import path from "path";
// Config
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
// Types
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  return {
    entry: options.paths.entry,
    mode: options.mode,
    module: {
      rules: buildLoaders(options),
    },
    devtool: options.isDev ? "inline-source-map" : undefined,
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    output: {
      path: options.paths.build,
      filename: "[name].[contenthash:6].js",
      clean: true,
    },
    devServer: options.isDev ? buildDevServer(options) : undefined,
  };
}
