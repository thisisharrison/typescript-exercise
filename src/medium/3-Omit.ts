// Does A contains B? Yes, never (excluded), else A (include)
type NewExclude<A, B> = A extends B ? never : A;
export type MyOmit<T, K> = { [P in NewExclude<keyof T, K>]: T[P] };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

let completed: MyOmit<Todo, "title" | "description">;
completed = { completed: false };
