import { Sigmoid } from '../sigmoid/logistic'

/**
 * Swish activation (parameterized).
 *
 * Computes `x * Sigmoid(beta * x)`. The scalar `beta` interpolates between a
 * near-identity mapping (`beta -> 0`, approximately `x / 2`) and `ReLU`
 * (`beta -> infinity`). With `beta = 1` this reduces to `SiLU`.
 *
 * @param x - Input value.
 * @param beta - Gate sharpness. Default `1`.
 * @returns The Swish-transformed value.
 *
 * @see Ramachandran, P., Zoph, B. & Le, Q. V. (2017). "Searching for
 * Activation Functions". arXiv:1710.05941.
 * {@link https://arxiv.org/abs/1710.05941}
 */
export function Swish(x: number, beta: number = 1): number {
    return x * Sigmoid(beta * x)
}
