import { Erf } from '../bounded/erf'

/**
 * Gaussian Error Linear Unit (GELU).
 *
 * Computes `(x / 2) * (1 + erf(x / sqrt(2)))`, the exact GELU formula derived
 * from the standard normal CDF. Unlike `ReLU`, which hard-gates negative
 * values, `GELU` applies a smooth input-dependent weighting and keeps a soft
 * transition around zero.
 *
 * Uses the error function defined in `bounded/erf`.
 *
 * @param x - Input value.
 * @returns The GELU-transformed value.
 *
 * @see Hendrycks, D. & Gimpel, K. (2016). "Gaussian Error Linear Units
 * (GELUs)". arXiv:1606.08415. {@link https://arxiv.org/abs/1606.08415}
 */
export function GELU(x: number): number {
    return (x / 2) * (1 + Erf(x / Math.SQRT2))
}
