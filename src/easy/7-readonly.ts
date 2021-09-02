// add optional
// { [P in keyof T]+?: T[P] }
// remove optional
// { [P in keyof T]-?: T[P] }
export type MyReadonly<T> = { readonly [P in keyof T]: T[P] };
