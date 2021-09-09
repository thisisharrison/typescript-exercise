// readonly keyof T (P) if P extends K otherwise never
// intersect (&) combined rest of the types to this
export type MyReadonly2<T, K = keyof T> = { readonly [P in keyof T as P extends K ? P : never]: T[P] } & T;

/**
Before & T: 
{
  readonly title: string;
  description: never;
  completed: never;
};

Merge with T, 
{
  readonly title: string; // does not override the readonly field
  description: string;
  completed: boolean;
};
 */

interface Todo {
  title: string;
  description?: string;
  completed: boolean;
}

let x: MyReadonly2<Todo, "title">; // makes title readonly
x = {
  title: "hello",
  description: "hello",
  completed: false,
};
// x.title = "bye"; // error
x.description = "bye";

let y: MyReadonly2<Todo>; // makes all readonly
// y.title = "not allowed"; // error
