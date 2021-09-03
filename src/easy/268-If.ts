export type If<C extends boolean, T, F> = C extends true ? T : F;

const a: If<true, "a", "b"> = "a";
const b: If<false, "a", "b"> = "b";
