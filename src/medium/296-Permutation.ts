// Ref: https://github.com/type-challenges/type-challenges/issues/614
export type Permutation<T, R = T> = [T] extends [never] ? [] : R extends R ? [R, ...Permutation<Exclude<T, R>>] : never;

let x: Permutation<"A">; // ["A"]
let y: Permutation<"A" | "B" | "C">; // ["A", "B", "C"] | ["A", "C", "B"] | ["B", "A", "C"] | ["B", "C", "A"] | ["C", "A", "B"] | ["C", "B", "A"]
