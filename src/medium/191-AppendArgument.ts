export type AppendArgument0<Fn, A> = Fn extends (...args: infer T) => infer R ? (...args: [...T, A]) => R : never;
// Using ReturnType
export type AppendArgument<Fn, A> = Fn extends (...args: infer T) => any ? (...args: [...T, A]) => ReturnType<Fn> : never;

let fn: AppendArgument<(a: number, b: string) => number, boolean>; // (args_0: number, args_1: string, args_2: boolean) => number
let fn2: AppendArgument<(a: number[], b: number) => void, string>; // (args_0: number[], args_1: number, args_2: string) => void;
