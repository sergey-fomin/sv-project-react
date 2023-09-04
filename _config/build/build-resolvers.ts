import path from 'path';
import webpack from 'webpack';

export function buildResolvers(): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@assets": path.resolve(__dirname, '../../src/assets'),
            "@components": path.resolve(__dirname, '../../src/components/index.ts'),
            "@helpers": path.resolve(__dirname, '../../src/helpers/index.ts'),
            "@mocks": path.resolve(__dirname, '../../src/mock-data/index.ts'),
            "@pages": path.resolve(__dirname, '../../src/pages/index.ts'),
            "@types": path.resolve(__dirname, '../../src/types/index.ts'),
            "@context": path.resolve(__dirname, '../../src/context.ts'),
        }
    }
}