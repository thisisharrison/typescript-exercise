// Does R's length extend 0? F is the last of the array. Otherwise, recursively call Last on R if length is not 0.
export type Last<T extends any[]> = T extends [first: infer F, ...rest: infer R] ? (R["length"] extends 0 ? F : Last<R>) : never;

let x: Last<[3, 2, 1]>;
