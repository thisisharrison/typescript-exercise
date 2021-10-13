export type CamelCase<S extends string> = S extends `${infer F}-${infer M}${infer E}`
    ? // Middle is uppercase so camel case the rest and keep the dash
      M extends Uppercase<M>
        ? `${F}-${CamelCase<`${M}${E}`>}`
        : // Middle is not uppercase, so uppercase it and remove the dash
          `${F}${CamelCase<`${Uppercase<M>}${E}`>}`
    : S;

let a: CamelCase<"foo-bar-baz">; // "fooBarBaz"
let b: CamelCase<"foo-Bar-Baz">; // "foo-Bar-Baz"

let x: CamelCase<"foo--bar----baz">; // "foo-Bar---Baz"
let y: CamelCase<"a-b-c">; // "aBC"
let z: CamelCase<"a-b-c-">; // "aBC-"
