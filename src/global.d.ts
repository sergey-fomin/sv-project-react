declare module '*.scss' {
    interface IClassNames {
        [ className: string ]: string
    }

    const classNames: IClassNames;
    export = classNames;
}

// Images Extentions
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.ico';