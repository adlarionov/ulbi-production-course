import webpack from 'webpack';
// Plugins
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// Types
import { type BuildOptions } from './types/config';

export function buildPlugins({
  paths,
  isDev
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      title: 'bundle'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css',
      chunkFilename: 'css/[name].[contenthash:6].css'
    }),
    new webpack.DefinePlugin({
      IS_DEV: isDev
    }),
    new webpack.HotModuleReplacementPlugin()
  ];
}
