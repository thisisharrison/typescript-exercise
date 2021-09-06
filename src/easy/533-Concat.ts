export type Concat<T extends any[], U extends any[]> = [...T, ...U];

let onetwo: Concat<[1], [2]>; // expected to be [1, 2]
let b: Concat<[], []>; // expected to be []
