export type Awaited<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

// infer: deduce a type (R) from another type (Promise<>) within a conditional type (T)
// when T is extendable to a Promise<>, deduce type of Promise (U) and return U

type X = Promise<string>;
let x: X = Promise.resolve("1"); // Try changing to number

type Y = Promise<number>;
let y: Y = Promise.resolve(1); // Try changing to string

type Z = Promise<{ a: 1 }>;
let z: Z = Promise.resolve({ a: 1 }); // Try changing key or value
