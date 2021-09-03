import type { Awaited } from "easy/189-Awaited";
import { Equal, Expect } from "@type-challenges/utils";

it("Awaited", () => {
    type X = Promise<string>;
    type Y = Promise<{ field: number }>;

    type cases = [Expect<Equal<Awaited<X>, string>>, Expect<Equal<Awaited<Y>, { field: number }>>];

    // @ts-expect-error
    type error = Awaited<number>;
})
