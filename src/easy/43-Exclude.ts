/**
 * T extends K: check each of the left with each of the right
 * "a" extends "a" | "c" -> true -> never
 * "b" extends "a" | "c" -> false -> "b"
 * "c" extends "a" | "c" -> true -> never
 */
export type MyExclude<T, K> = T extends K ? never : T;

// try it out
type x = MyExclude<"a" | "b" | "c", "a" | "c">; // b
