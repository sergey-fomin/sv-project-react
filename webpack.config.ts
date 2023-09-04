import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './_config/build/build-webpack-config';
import { IBuildEnv, IBuildPaths, TBuildMode } from './_config/build/types/config';

export default (env: IBuildEnv) => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }
    const mode: TBuildMode = env.mode || 'development';
    const isDev: boolean = mode === 'development';
    const PORT: number = env.port || 4200;
    const config: webpack.Configuration = buildWebpackConfig({
        paths,
        mode,
        isDev,
        port: PORT,
    });

    return config;
};