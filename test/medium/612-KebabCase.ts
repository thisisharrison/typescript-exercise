import { KebabCase } from "medium/612-KebabCase";
import { Equal, Expect } from "@type-challenges/utils";

it("KebabCase", () => {
    type cases = [
        Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
        Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
        Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
        Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
        Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
        Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
        Expect<Equal<KebabCase<"-">, "-">>,
        Expect<Equal<KebabCase<"">, "">>,
        Expect<Equal<KebabCase<"😎">, "😎">>
    ];
});
