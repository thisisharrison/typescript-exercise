// Does S extend a string which starts with space and continues with R?
// If yes, trim R
// If no, return S
export type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer R}` ? TrimLeft<R> : S;
