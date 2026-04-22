/**
 * Quick GELU approximation.
 *
 * Computes `x * sigmoid(1.702 * x)`, the sigmoid-based approximation of `GELU`
 * proposed in the original Hendrycks & Gimpel paper. Cheaper than the exact
 * error-function form and used in OpenAI's CLIP and several other transformer
 * implementations.
 *
 * @param x - Input value.
 * @returns `x * sigmoid(1.702 * x)`, close to but not equal to `GELU(x)`.
 *
 * @see Hendrycks, D. & Gimpel, K. (2016). "Gaussian Error Linear Units
 * (GELUs)". arXiv:1606.08415. (Section 2 proposes the sigmoid
 * approximation as a faster alternative to the exact form.)
 * {@link https://arxiv.org/abs/1606.08415}
 */
export function QuickGELU(x: number): number {
    return x / (1 + Math.exp(-1.702 * x))
}
