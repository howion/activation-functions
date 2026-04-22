/**
 * Complement, one-minus transform.
 *
 * Computes `1 - x`. This is not a standard neural-network activation, but it
 * is useful as a simple complement-style transform when inputs are already in
 * a range such as 0..1 (for example, fuzzy-logic style "NOT").
 *
 * @param x - Input value.
 * @returns `1 - x`.
 */
export function Inverse(x: number): number {
    return 1 - x
}
