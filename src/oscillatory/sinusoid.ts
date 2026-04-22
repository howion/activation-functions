/**
 * Sine activation.
 *
 * Computes `sin(x)`. Unlike monotonic activations such as `ReLU` or
 * `Sigmoid`, this function is periodic and oscillates between -1 and 1.
 *
 * This is exactly `Math.sin(x)`.
 *
 * @param x - Input angle in radians.
 * @returns The sine of `x`.
 */
export function Sinusoid(x: number): number {
    return Math.sin(x)
}
