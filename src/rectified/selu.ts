import { ELU } from './elu'

/**
 * SELU scale (`lambda`) from Klambauer et al. (2017)
 */
export const SELU_LAMBDA = 1.05070098

/**
 * SELU shape (`alpha`) from Klambauer et al. (2017)
 */
export const SELU_ALPHA = 1.67326324

/**
 * Scaled Exponential Linear Unit (SELU).
 *
 * Computes `lambda * ELU(x, alpha)` using the published constants
 * `lambda ~ 1.05070098` and `alpha ~ 1.67326324`, chosen to induce
 * self-normalizing behaviour in feed-forward networks. Uses the ELU function
 * defined in `rectified/elu`.
 *
 * @param x - Input value.
 * @returns The SELU-transformed value.
 *
 * @see Klambauer, G., Unterthiner, T., Mayr, A. & Hochreiter, S. (2017).
 * "Self-Normalizing Neural Networks". arXiv:1706.02515.
 * {@link https://arxiv.org/abs/1706.02515}
 */
export function SELU(x: number): number {
    return SELU_LAMBDA * ELU(x, SELU_ALPHA)
}
