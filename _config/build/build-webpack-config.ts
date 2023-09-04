import webpack from 'webpack';
import { buildDevServer } from './build-dev-server';
import { buildLoaders } from './build-loaders';
import { buildPlugins } from './build-plugins';
import { buildResolvers } from './build-resolvers';
import { IBuildOptions } from './types/config';

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: isDev ? '[name].js' : '[name].[contenthash].js',
            path: paths.build,
            assetModuleFilename: isDev ? 'assets/[name][ext][query]' : 'assets/[name].[contenthash][ext][query]',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}