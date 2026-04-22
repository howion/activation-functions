/**
 * Hard-thresholding (shrinkage) operator.
 *
 * Computes `x` when `|x| > lambda` and `0` otherwise.
 *
 * @param x - Input value.
 * @param lambda - Non-negative threshold. Default `0.5`.
 * @returns `x` when `|x| > lambda`, otherwise `0`.
 *
 * @see Donoho, D. L. & Johnstone, I. M. (1994). "Ideal spatial adaptation
 * by wavelet shrinkage". Biometrika 81(3), pp. 425-455.
 * {@link https://doi.org/10.1093/biomet/81.3.425}
 */
export function HardShrink(x: number, lambda: number = 0.5): number {
    return Math.abs(x) > lambda ? x : 0
}
