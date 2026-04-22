/**
 * Hard sigmoid activation (MobileNetV3 form).
 *
 * Piecewise-linear approximation of the logistic sigmoid:
 * `max(0, min(1, (x + 3) / 6))`.
 *
 * Constant (0 or 1) for `|x| >= 3` and linear in between, with no exponentials.
 * Useful on hardware without fast transcendentals and in quantized networks.
 *
 * @param x - Input value.
 * @returns `0` when `x <= -3`, `1` when `x >= 3`, linearly interpolated
 * otherwise. The output always lies in `[0, 1]`.
 *
 * @see Howard, A., Sandler, M., Chen, B., Wang, W., Chen, L.-C., Tan, M.,
 * Chu, G., Vasudevan, V., Zhu, Y., Pang, R., Le, Q. V. & Adam, H. (2019).
 * "Searching for MobileNetV3". ICCV 2019. arXiv:1905.02244.
 * {@link https://arxiv.org/abs/1905.02244}
 */
export function HardSigmoid(x: number): number {
    return Math.max(0, Math.min(1, (x + 3) / 6))
}
