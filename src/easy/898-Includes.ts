// export type Includes<T extends readonly any[], U> = U extends T[number] ? true : false; // did not satisfy all
export type Includes<T extends readonly any[], U> = { [K in T[number]]: true }[U] extends true
  ? true
  : false;

let isPillarMen: Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
let shouldBeFalse: Includes<[boolean, 2, 3, 5, 6, 7], false>;

// Construct this object to see if key U exists
// {
//   boolean: true,
//   2: true
// }
