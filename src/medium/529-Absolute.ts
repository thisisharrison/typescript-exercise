// We wrap T in string. Does it equal to a string with -R?
// If yes, return R
// If no, return T in string
export type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? R : `${T}`;
