import type { Chainable } from "medium/12-ChainableOptions";
import { Alike, Expect } from "@type-challenges/utils";

declare const a: Chainable;
it("Chainable", () => {
    const result = a.option("foo", 123).option("bar", { value: "Hello World" }).option("name", "type-challenges").get();
    type cases = [Expect<Alike<typeof result, Expected>>];

    type Expected = {
        foo: number;
        bar: {
            value: string;
        };
        name: string;
    };
});
