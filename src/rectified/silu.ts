import { Sigmoid } from '../sigmoid/logistic'

/**
 * Sigmoid Linear Unit (SiLU).
 *
 * Computes `x * Sigmoid(x)`, the `beta = 1` specialization of the
 * parameterized `Swish`.
 *
 * @param x - Input value.
 * @returns The SiLU-transformed value.
 *
 * @see Elfwing, S., Uchibe, E. & Doya, K. (2018). "Sigmoid-Weighted Linear
 * Units for Neural Network Function Approximation in Reinforcement
 * Learning". Neural Networks 107, pp. 3-11. arXiv:1702.03118.
 * {@link https://arxiv.org/abs/1702.03118}
 */
export function SiLU(x: number): number {
    return x * Sigmoid(x)
}

/**
 * Derivative of the Sigmoid Linear Unit (SiLU) activation function.
 *
 * Computes the derivative of `x * Sigmoid(x)` with respect to `x`.
 *
 * @param x - Input value.
 * @returns The derivative of SiLU at the input value `x`.
 *
 * @see Elfwing, S., Uchibe, E. & Doya, K. (2018). "Sigmoid-Weighted Linear
 * Units for Neural Network Function Approximation in Reinforcement
 * Learning". Neural Networks 107, pp. 3-11. arXiv:1702.03118.
 * {@link https://arxiv.org/abs/1702.03118}
 */
export function dSiLU(x: number): number {
    const s = Sigmoid(x)
    return s + x * s * (1 - s)
}

/**
 * Alias of {@link SiLU}. `Swish1(x)` and `SiLU(x)` are the same function:
 * the fixed `beta = 1` specialization of the parameterized `Swish`.
 */
export const Swish1 = SiLU
