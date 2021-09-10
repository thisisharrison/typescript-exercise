import type { TupleToUnion } from "medium/10-TupleToUnion";
import { Equal, Expect } from "@type-challenges/utils";

it("TupleToUnion", () => {
    type cases = [Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>, Expect<Equal<TupleToUnion<[123]>, 123>>];
});
