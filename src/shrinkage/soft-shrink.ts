/**
 * Soft-thresholding (shrinkage) operator.
 *
 * Returns `x - lambda` if `x > lambda`, `x + lambda` if `x < -lambda`, and
 * `0` otherwise.
 *
 * @param x - Input value.
 * @param lambda - Non-negative shrinkage amount. Default `0.5`.
 * @returns The soft-thresholded value.
 *
 * @see Donoho, D. L. (1995). "De-noising by soft-thresholding". IEEE
 * Transactions on Information Theory 41(3), pp. 613-627.
 * {@link https://doi.org/10.1109/18.382009}
 */
export function SoftShrink(x: number, lambda: number = 0.5): number {
    if (x > lambda) return x - lambda
    if (x < -lambda) return x + lambda
    return 0
}
