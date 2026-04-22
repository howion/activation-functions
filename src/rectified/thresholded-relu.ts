/**
 * Thresholded Rectified Linear Unit (Thresholded ReLU).
 *
 * Computes `x -> x` when `x > theta` and `0` otherwise. A generalization
 * of `ReLU` that zeroes out inputs below an arbitrary threshold `theta`
 * rather than below zero, encouraging sparser activations.
 *
 * @param x - Input value.
 * @param theta - Threshold below which the output is clamped to zero.
 * Default `1`.
 * @returns `x` when `x > theta`, otherwise `0`.
 *
 * @see Konda, K., Memisevic, R. & Krueger, D. (2014). "Zero-bias
 * autoencoders and the benefits of co-adapting features". arXiv:1402.3337.
 * {@link https://arxiv.org/abs/1402.3337}
 */
export function ThresholdedReLU(x: number, theta: number = 1): number {
    return x > theta ? x : 0
}

/**
 * Thresholded Linear Unit (Thresholded Linear).
 *
 * Computes `x -> x` when `|x| > theta` and `0` otherwise.
 *
 * @param x - Input value.
 * @param theta - Threshold below which the output is clamped to zero. Default `1`.
 * @returns `x` when `|x| > theta`, otherwise `0`.
 *
 * @see Konda, K., Memisevic, R. & Krueger, D. (2014). "Zero-bias
 * autoencoders and the benefits of co-adapting features". arXiv:1402.3337.
 * {@link https://arxiv.org/abs/1402.3337}
 */
export function ThresholdedLinear(x: number, theta: number = 1): number {
    return Math.abs(x) > theta ? x : 0
}
