import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { IBuildOptions } from './types/config';

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const stylesLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: isDev ? '[name]__[local]_[hash:base64:5]' : '[hash:base64:8]',
                    }
                }
            },
            "sass-loader"
        ]
    }

    const fontsLoader: webpack.RuleSetRule = {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: isDev ? 'assets/fonts/[name][ext][query]' : 'assets/fonts/[name].[contenthash][ext][query]'
        }
    }

    const imagesLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset/resource',
    }

    return [ typescriptLoader, stylesLoader, fontsLoader, imagesLoader ];
}