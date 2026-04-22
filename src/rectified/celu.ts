/**
 * Continuously Differentiable Exponential Linear Unit (CELU).
 *
 * Computes `max(0, x) + min(0, alpha * (exp(x / alpha) - 1))`. A
 * reparameterization of `ELU` that remains continuously differentiable at the
 * origin for any positive `alpha`. At `alpha === 1` it reduces exactly to
 * `ELU`.
 *
 * @param x - Input value.
 * @param alpha - Saturation magnitude. Must be positive. Default `1`.
 * @returns The CELU-transformed value.
 *
 * @see Barron, J. T. (2017). "Continuously Differentiable Exponential
 * Linear Units". arXiv:1704.07483.
 * {@link https://arxiv.org/abs/1704.07483}
 */
export function CELU(x: number, alpha: number = 1): number {
    return x >= 0 ? x : alpha * (Math.exp(x / alpha) - 1)
}
