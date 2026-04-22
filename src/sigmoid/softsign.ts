/**
 * Softsign activation.
 *
 * Computes `x / (1 + |x|)`. Produces a smooth output in (-1, 1) without using
 * `exp`, so it is often treated as a lightweight alternative to `Tanh`.
 *
 * @param x - Input value.
 * @returns A smooth value strictly between -1 and 1.
 *
 * @see Glorot, X. & Bengio, Y. (2010). "Understanding the difficulty of
 * training deep feedforward neural networks". AISTATS 2010.
 * {@link https://proceedings.mlr.press/v9/glorot10a.html}
 */
export function SoftSign(x: number): number {
    return x / (1 + Math.abs(x))
}
