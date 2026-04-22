/**
 * Inverse Square Root Linear Unit (ISRLU).
 *
 * Rectifier companion of `ISRU` from Carlile et al. (2017). Leaves positive
 * inputs untouched and smoothly saturates negative inputs using the inverse
 * square root:
 *
 * `x -> x` for `x >= 0`, and
 * `x -> x / sqrt(1 + a * x^2)` for `x < 0`.
 *
 * @param x - Input value.
 * @param a - Scale parameter for the saturating branch. Default `1`.
 * @returns `x` when `x >= 0`, otherwise `x / sqrt(1 + a * x^2)`.
 *
 * @see Carlile, B., Delamarter, G., Kinney, P., Marti, A. & Whitney, B.
 * (2017). "Improving Deep Learning by Inverse Square Root Linear Units
 * (ISRLUs)". arXiv:1710.09967.
 * {@link https://arxiv.org/abs/1710.09967}
 */
export function ISRLU(x: number, a: number = 1): number {
    return x >= 0 ? x : x / Math.sqrt(1 + a * x ** 2)
}
