/**
 * ReLU6 activation.
 *
 * Clipped rectified linear unit defined as `min(max(0, x), 6)`. Behaves like
 * `ReLU` for inputs in `[0, 6]` and saturates at 6 for larger positive inputs,
 * which keeps activations in a narrow range that is especially friendly to
 * low-precision inference and mobile hardware.
 *
 * Introduced by Krizhevsky as part of a convolutional deep belief network for
 * CIFAR-10 and later adopted as a default in the MobileNet family.
 *
 * @param x - Input value.
 * @returns `0` when `x <= 0`, `6` when `x >= 6`, otherwise `x`.
 *
 * @see Krizhevsky, A. (2010). "Convolutional Deep Belief Networks on
 * CIFAR-10". Technical report, University of Toronto.
 * {@link https://www.cs.toronto.edu/~kriz/conv-cifar10-aug2010.pdf}
 */
export function ReLU6(x: number): number {
    return Math.min(Math.max(0, x), 6)
}
