/**
 * Softplus activation.
 *
 * Computes `(1 / beta) * log(1 + exp(beta * x))`. For numerical stability,
 * inputs above `threshold / beta` are mapped to `x`.
 *
 * @param x - Input value.
 * @param beta - Sharpness of the bend at zero. Default `1`.
 * @param threshold - Values of `beta * x` above this use the linear
 * asymptote. Default `20`.
 * @returns A smooth positive output that approaches `max(0, x)` as `beta`
 * grows.
 *
 * @see Dugas, C., Bengio, Y., Belisle, F., Nadeau, C. & Garcia, R. (2001).
 * "Incorporating Second-Order Functional Knowledge for Better Option
 * Pricing". NeurIPS 2001.
 * {@link https://papers.nips.cc/paper/2000/hash/44968aece94f667e4095002d140b5896-Abstract.html}
 */
export function SoftPlus(
    x: number,
    beta: number = 1,
    threshold: number = 20
): number {
    const z = beta * x
    if (z > threshold) return x
    return Math.log1p(Math.exp(z)) / beta
}
