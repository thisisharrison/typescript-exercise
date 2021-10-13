// FooBarBaz -> for-bar-baz
// If letter starts with Uppercase and Not beginning, Lowercase and add -

export type KebabCase<S extends string, First extends boolean = true> = S extends `${infer F}${infer R}`
    ? F extends Lowercase<F>
        ? // Maybe start, but it's lowercase, so move to R
          `${F}${KebabCase<R, false>}`
        : // F is uppercase
        First extends true
        ? // F is uppercase & at beginning
          `${Lowercase<F>}${KebabCase<R, false>}`
        : // F is uppercase & not at beginning
          `-${Lowercase<F>}${KebabCase<R, false>}`
    : // Base case
      S;

type FastKebabCase<S extends string> = S extends `${infer F}${infer R}` ? (R extends Uncapitalize<R> ? Uncapitalize<`${F}${FastKebabCase<R>}`> : Uncapitalize<`${F}-${FastKebabCase<R>}`>) : S;

type OldKebabCase<S extends string, Start extends boolean = true> = S extends `${infer F}${infer R}`
    ? Start extends true
        ? F extends Lowercase<F>
            ? // Start & lowercase
              `${F}${OldKebabCase<`${R}`, false>}`
            : // Start & uppercase
              `${Lowercase<F>}${OldKebabCase<R, false>}`
        : F extends Lowercase<F>
        ? // Not Start and lowercase
          `${F}${OldKebabCase<`${R}`, false>}`
        : // Not Start and uppercase
          `-${Lowercase<F>}${OldKebabCase<R, false>}`
    : S;
