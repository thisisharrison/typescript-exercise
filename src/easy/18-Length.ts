export type Length<T extends readonly any[]> = T extends ArrayLike<any> ? T["length"] : never;

// why readonly is necessary?
