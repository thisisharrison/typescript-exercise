// Readonly keyof T (P)
// if T[P] is an object, check if it's a function. If true, return T[P]
// if false, recursively call DeepReadonly

export type DeepReadonly<T extends {}> = { readonly [P in keyof T]: T[P] extends {} ? (T[P] extends Function ? T[P] : DeepReadonly<T[P]>) : T[P] };
