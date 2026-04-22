/**
 * Gaussian activation (radial basis function).
 *
 * Computes `exp(-x^2 / (2 * sigma^2))`.
 *
 * The output peaks at 1 when `x === 0` and falls off symmetrically toward 0 as
 * `|x|` grows. The width parameter `sigma` controls how wide the bell is.
 *
 * This is the Gaussian-shaped bump function, although similar, not the
 * normalized Gaussian probability density function.
 *
 * @param x - Input value.
 * @param sigma - Width of the bell. Default `1`.
 * @returns A value in (0, 1], with the maximum at `x === 0`.
 */
export function Gaussian(x: number, sigma: number = 1): number {
    return Math.exp(-(x ** 2) / (2 * sigma ** 2))
}
