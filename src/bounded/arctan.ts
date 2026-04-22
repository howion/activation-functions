/**
 * Arctangent activation.
 *
 * Computes `atan(x)`, a smooth bounded curve that approaches `-pi / 2` for
 * negative inputs and `pi / 2` for positive inputs.
 *
 * This is exactly `Math.atan(x)`.
 *
 * @param x - Input value.
 * @returns The arctangent of `x`, in radians.
 */
export function ArcTan(x: number): number {
    return Math.atan(x)
}
