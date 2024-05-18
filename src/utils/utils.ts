export const getBemClassName = <T extends string, Base extends string>(
  baseClassName: Base,
  classNames: T[]
) => {
  const bemClasses = {} as {
    [k in T]: `${Base}__${k}`;
  };

  for (const className of classNames) {
    bemClasses[className] = `${baseClassName}__${className}`;
  }
  return bemClasses;
};
