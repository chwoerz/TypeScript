// @noUnusedParameters: true

type LengthCheck<T> = T extends ArrayLike<infer U> ? number : never;
