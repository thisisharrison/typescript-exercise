// P in keyof T -> looking at object T
// | U -> union of P keys and U key
// If P is keyof T, then T[P], otherwise it would be U key, so V is the value
export type AppendToObject<T extends object, U extends string, V extends any> = { [P in keyof T | U]: P extends keyof T ? T[P] : V };

type Test = { id: "1" };
type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }
