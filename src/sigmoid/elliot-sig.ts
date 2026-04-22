/**
 * Elliott sigmoid activation.
 *
 * Computes `0.5 * x / (1 + |x|) + 0.5`. This is the original sigmoid-shaped
 * output in (0, 1) proposed by Elliott as a cheap drop-in replacement for the
 * logistic function.
 *
 * For the symmetric (-1, 1) form commonly called "softsign", see
 * {@link SoftSign}.
 *
 * @param x - Input value.
 * @returns A smooth value strictly between 0 and 1.
 *
 * @see Elliott, D. L. (1993). "A better activation function for artificial
 * neural networks". ISR Technical Report TR 93-8, University of Maryland.
 * {@link https://drum.lib.umd.edu/handle/1903/5355}
 */
export function ElliotSig(x: number): number {
    return x / (1 + Math.abs(x))
}

/**
 * Positive Elliott sigmoid activation with output in (0, 1).
 *
 * Computes `0.5 * x / (1 + |x|) + 0.5`. This is a shifted and scaled version
 * of {@link ElliotSig} that produces outputs in the range (0, 1).
 *
 * @param x
 * @returns A smooth value strictly between 0 and 1.
 *
 * @see Elliott, D. L. (1993). "A better activation function for artificial
 * neural networks". ISR Technical Report TR 93-8, University of Maryland.
 * {@link https://drum.lib.umd.edu/handle/1903/5355}
 */
export function ElliotSigPositive(x: number): number {
    return 0.5 * ElliotSig(x) + 0.5
}
