import type { MyOmit } from "medium/3-Omit";
import { Equal, Expect } from "@type-challenges/utils";

it("MyOmit", () => {
  type cases = [
    Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
    Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
  ];

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  interface Expected1 {
    title: string;
    completed: boolean;
  }

  interface Expected2 {
    title: string;
  }
});
