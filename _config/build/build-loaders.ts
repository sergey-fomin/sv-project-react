import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { IBuildOptions } from './types/config';

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const stylesLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    }
                }
            },
            "sass-loader"
        ]
    }

    const fontsLoader = {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
    }


    const imagesLoader = {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: isDev ? 'asset/resource' : 'asset',
    }

    return [ typescriptLoader, stylesLoader, fontsLoader, imagesLoader ];
}