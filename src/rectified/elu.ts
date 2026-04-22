/**
 * Exponential Linear Unit (ELU).
 *
 * Computes `x > 0 ? x : a * (exp(x) - 1)`. Positive values stay linear, while
 * negative values bend smoothly toward a negative saturation level controlled
 * by `a`.
 *
 * `Math.expm1` is used for numerical accuracy when `x` is close to zero.
 *
 * @param x - Input value.
 * @param a - Shape parameter. Positive. Default `1`.
 * @returns `x` when `x > 0`, otherwise `a * (exp(x) - 1)`.
 *
 * @see Clevert, D.-A., Unterthiner, T. & Hochreiter, S. (2015). "Fast and
 * Accurate Deep Network Learning by Exponential Linear Units (ELUs)".
 * arXiv:1511.07289. {@link https://arxiv.org/abs/1511.07289}
 */
export function ELU(x: number, a: number = 1): number {
    return x > 0 ? x : a * Math.expm1(x)
}

/**
 * Derivative of the Exponential Linear Unit (ELU) for positive `a`. Equals to:
 * `x > 0 ? 1 : a + ELU(x, a)`.
 *
 * @see Clevert, D.-A., Unterthiner, T. & Hochreiter, S. (2015). "Fast and
 * Accurate Deep Network Learning by Exponential Linear Units (ELUs)".
 * arXiv:1511.07289. {@link https://arxiv.org/abs/1511.07289}
 */
export function dELU(x: number, a: number = 1): number {
    return x > 0 ? 1 : a + ELU(x, a)
}
