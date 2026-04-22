import { ReLU6 } from './relu6'

/**
 * Hard swish activation.
 *
 * Computes `(x * ReLU6(x + 3)) / 6`, a piecewise-polynomial approximation of
 * `Swish`. Uses the `ReLU6` function defined in `rectified/relu6`.
 *
 * @param x - Input value.
 * @returns `0` when `x <= -3`, `x` when `x >= 3`, and a smooth
 * piecewise-quadratic interpolation between those bounds.
 *
 * @see Howard, A., Sandler, M., Chen, B., Wang, W., Chen, L.-C., Tan, M.,
 * Chu, G., Vasudevan, V., Zhu, Y., Pang, R., Le, Q. V. & Adam, H. (2019).
 * "Searching for MobileNetV3". ICCV 2019. arXiv:1905.02244.
 * {@link https://arxiv.org/abs/1905.02244}
 *
 * A similar version of hard-swish was also proposed in
 * {@link https://doi.org/10.5220/0007469604130420}
 */
export function HardSwish(x: number): number {
    return (x * ReLU6(x + 3)) / 6
}
