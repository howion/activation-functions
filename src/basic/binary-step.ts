/**
 * Binary (Heaviside) step activation.
 *
 * Maps negative values to 0 and zero or positive values to 1:
 * `x < 0 ? 0 : 1`.
 *
 * This acts as a hard threshold at 0, so the output is always one of two
 * discrete states.
 *
 * @param x - Input value.
 * @returns `0` when `x < 0`, otherwise `1`.
 *
 */
export function BinaryStep(x: number): 0 | 1 {
    return x < 0 ? 0 : 1
}

/**
 * Heaviside step activation with the value 0.5 at zero.
 *
 * Maps negative values to 0, zero to 0.5, and positive values to 1:
 * `x < 0 ? 0 : x > 0 ? 1 : 0.5`.
 *
 * This acts as a soft threshold at 0, so the output is always one of three
 * discrete states.
 *
 * @param x - Input value.
 * @returns `0` when `x < 0`, `0.5` when `x === 0`, otherwise `1`.
 */
export function HeavisideMidpoint(x: number): 0 | 1 | 0.5 {
    return x < 0 ? 0 : x > 0 ? 1 : 0.5
}
