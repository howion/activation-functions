/**
 * Bipolar step activation.
 *
 * Produces `1` for positive inputs and `-1` for zero or negative inputs:
 * `x > 0 ? 1 : -1`.
 *
 * Compared with `BinaryStep`, this keeps the two output states centered
 * around zero.
 *
 * @param x - Input value.
 * @returns `1` when `x > 0`, otherwise `-1`. Narrowed to the literal union
 * `-1 | 1`, so downstream code that discriminates on the exact output gets
 * full type inference.
 */
export function Bipolar(x: number): -1 | 1 {
    return x > 0 ? 1 : -1
}
