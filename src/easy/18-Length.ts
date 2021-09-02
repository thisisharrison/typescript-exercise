export type Length<T extends readonly any[]> = T extends ArrayLike<any> ? T["length"] : never;

// why readonly is necessary?
// because tesla as const
// if we remove tesla as const, tesla is a string[] and x will be a number instead of 4
const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
let x: Length<typeof tesla>;
