import type { MyReadonly } from "easy/7-readonly";
import { Equal, Expect } from "@type-challenges/utils";

it("MyReadonly", () => {
  type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

  interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
    meta: {
      author: string;
    };
  }
});
