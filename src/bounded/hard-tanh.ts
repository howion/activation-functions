/**
 * Hard tanh activation.
 *
 * Clips the input to the closed interval [min, max]:
 * `max(min, min(max, x))`.
 *
 * With the default bounds it reproduces the classical hard-tanh as a cheap
 * piecewise-linear approximation of `Tanh`. Custom bounds turn it into a
 * generic clip / hard-clamp.
 *
 * @param x - Input value.
 * @param min - Lower bound. Default `-1`.
 * @param max - Upper bound. Default `1`.
 * @returns `x` when it is already inside [min, max], otherwise the nearest
 * boundary value.
 */
export function HardTanh(x: number, min: number = -1, max: number = 1): number {
    return Math.max(min, Math.min(max, x))
}
