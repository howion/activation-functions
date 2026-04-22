/**
 * Hyperbolic tangent activation.
 *
 * Maps real numbers into the open interval (-1, 1). Behaves like a
 * zero-centered sigmoid, which often makes it easier to work with than a
 * 0..1 sigmoid when signed activations are preferred.
 *
 * This is exactly `Math.tanh(x)`.
 *
 * @param x - Input value.
 * @returns A smooth value strictly between -1 and 1.
 */
export function Tanh(x: number): number {
    return Math.tanh(x)
}
