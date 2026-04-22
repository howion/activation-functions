/**
 * Cardinal sine activation.
 *
 * Computes `sin(x) / x`, with the removable singularity at 0 filled in as 1.
 * This function oscillates and decays in magnitude as `|x|` grows.
 *
 * @param x - Input angle in radians.
 * @returns `1` when `x === 0`, otherwise `sin(x) / x`.
 */
export function Sinc(x: number): number {
    return x === 0 ? 1 : Math.sin(x) / x
}
