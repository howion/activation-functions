/**
 * Inverse Square Root Unit (ISRU).
 *
 * Computes `x / sqrt(1 + a * x^2)`. The parameter `a` controls how
 * quickly the function bends and saturates; larger positive values make
 * the curve flatten sooner.
 *
 * This is the bounded sigmoidal building block from Carlile et al. (2017),
 * not the rectified variant `ISRLU` (which is not implemented by this
 * library).
 *
 * @param x - Input value.
 * @param a - Scale parameter. Default `1`.
 * @returns A smoothed, bounded version of the input in
 * `(-1/sqrt(a), 1/sqrt(a))`.
 *
 * @see Carlile, B., Delamarter, G., Kinney, P., Marti, A. & Whitney, B.
 * (2017). "Improving Deep Learning by Inverse Square Root Linear Units
 * (ISRLUs)". arXiv:1710.09967.
 * {@link https://arxiv.org/abs/1710.09967}
 */
export function ISRU(x: number, a: number = 1): number {
    return x / Math.sqrt(1 + a * x ** 2)
}
