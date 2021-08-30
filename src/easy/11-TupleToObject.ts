// satisfy test case, string[]
export type TupleToObject<T extends readonly string[]> = { [P in T[number]]: P };
