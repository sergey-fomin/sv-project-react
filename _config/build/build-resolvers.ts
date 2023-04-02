import webpack from 'webpack';
import path from 'path';

export function buildResolvers(): webpack.ResolveOptions {
    return {
        extensions: [ '.tsx', '.ts', '.js' ],
        // roots: [ path.resolve(__dirname, "src/assets") ],
    }
}