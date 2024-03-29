export type TBuildMode = 'development' | 'production';

export interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface IBuildOptions {
    mode: TBuildMode;
    paths: IBuildPaths;
    isDev: boolean;
    port: number;
}

export interface IBuildEnv {
    mode: TBuildMode;
    port: number;
}