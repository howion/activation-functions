import { SoftPlus } from './softplus'

/**
 * Mish activation.
 *
 * Computes `x * tanh(SoftPlus(x))`. Combines the smooth growth of `SoftPlus`
 * with a `tanh` gate, producing a smooth non-monotonic activation.
 *
 * @param x - Input value.
 * @returns The Mish-transformed value.
 *
 * @see Misra, D. (2019). "Mish: A Self Regularized Non-Monotonic Activation
 * Function". arXiv:1908.08681. {@link https://arxiv.org/abs/1908.08681}
 */
export function Mish(x: number): number {
    return x * Math.tanh(SoftPlus(x))
}
