export type Merge<F, S> = { [P in keyof F | keyof S]: P extends keyof S ? S[P] : P extends keyof F ? F[P] : never };

type Foo = {
    a: number;
    b: string;
};
type Bar = {
    b: number;
};

type Merged = Merge<Foo, Bar>;
// type Merged = {
//     a: number;
//     b: number;
// };
