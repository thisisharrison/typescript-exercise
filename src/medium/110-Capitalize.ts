export type Capitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : S;
export type Uncapitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Lowercase<F>}${R}` : S;

export type Myuppercase<S extends string> = S extends `${infer F}${infer R}` ? `${Capitalize<F>}${Myuppercase<R>}` : `${Capitalize<S>}`;
export type Mylowercase<S extends string> = S extends `${infer F}${infer R}` ? `${Uncapitalize<F>}${Mylowercase<R>}` : `${Uncapitalize<S>}`;

let sample1: Capitalize<"foobar">;
let sample2: Capitalize<"foo bar">;
let sample3: Uncapitalize<"Foobar">;
let sample4: Uncapitalize<"Foo bar">;
let sample5: Myuppercase<"foobarbaz">;
let sample6: Myuppercase<"foo bar baz">;
let sample7: Mylowercase<"FOOBARBAZ">;
let sample8: Mylowercase<"FOO BAR BAZ">;
