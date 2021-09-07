export type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types

let x: MyReturnType<() => "this string">;
x = "this string"; // must be this string
let y: MyReturnType<() => Promise<"1">>;
y = Promise.resolve("1"); // must be 1
