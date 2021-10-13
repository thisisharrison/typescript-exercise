import { Diff } from "medium/645-Diff";
import { Equal, Expect } from "@type-challenges/utils";

it("Diff", () => {
    type Foo = {
        name: string;
        age: string;
    };
    type Bar = {
        name: string;
        age: string;
        gender: number;
    };

    type cases = [Expect<Equal<Diff<Foo, Bar>, { gender: number }>>];
});
