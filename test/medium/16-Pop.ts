import type { Pop, Shift, Push, Unshift } from "medium/16-Pop";
import { Equal, Expect } from "@type-challenges/utils";

it("Pop", () => {
    type cases = [Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>, Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>];
    type cases2 = [Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>, Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>];
    type cases3 = [Expect<Equal<Push<[3, 2, 1], 0>, [3, 2, 1, 0]>>, Expect<Equal<Push<["a", "b", "c", "d"], "e">, ["a", "b", "c", "d", "e"]>>];
    type cases4 = [Expect<Equal<Unshift<[3, 2, 1], 4>, [4, 3, 2, 1]>>, Expect<Equal<Unshift<["a", "b", "c", "d"], "z">, ["z", "a", "b", "c", "d"]>>];
});
