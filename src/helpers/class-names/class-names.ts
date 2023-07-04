type TMods = Record<string, boolean | string>;

export function classNames(className: string, mods: TMods, additional: string[]): string {
    // console.log(arguments)

    return [
        className,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => value)
            .map(([className, value]) => className)
    ].join(' ');
}