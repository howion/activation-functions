/**
 * Bent identity activation.
 *
 * Computes `x + (sqrt(x^2 + 1) - 1) / 2`. Keeps the identity function's
 * overall shape but adds a gentle bend, making the curve slightly nonlinear
 * while still growing roughly linearly.
 *
 * @param x - Input value.
 * @returns A softly bent version of the input.
 */
export function BentIdentity(x: number): number {
    return (Math.sqrt(x ** 2 + 1) - 1) / 2 + x
}
