//// [tests/cases/compiler/unusedTypeParameters_infer.ts] ////

//// [unusedTypeParameters_infer.ts]
type LengthCheck<T> = T extends ArrayLike<infer U> ? number : never;


//// [unusedTypeParameters_infer.js]
