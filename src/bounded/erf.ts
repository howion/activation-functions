/**
 * Error function approximation.
 *
 * Approximates `erf(x)` using the Abramowitz & Stegun rational
 * approximation (formula 7.1.26), with a maximum absolute error of about
 * `1.5e-7` over the real line. The exact error function appears in
 * probability, statistics, and in other activations such as `GELU`.
 *
 * Maximum error for this approximation is about `1.5e-7`.
 *
 * @param x - Input value.
 * @returns An approximate `erf(x)` value in the range (-1, 1).
 *
 * @see Abramowitz, M. & Stegun, I. A. (1964). Handbook of Mathematical
 * Functions. National Bureau of Standards Applied Mathematics Series 55,
 * formula 7.1.26.
 * {@link https://personal.math.ubc.ca/~cbm/aands/page_299.htm}
 */
export function Erf(x: number): number {
    const p = 0.3275911

    const a1 = 0.254829592
    const a2 = -0.284496736
    const a3 = 1.421413741
    const a4 = -1.453152027
    const a5 = 1.061405429

    const sign = x < 0 ? -1 : 1
    const ax = Math.abs(x)

    const t = 1 / (1 + p * ax)
    const y =
        1 -
        ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) *
            t *
            Math.exp(-(ax ** 2))

    return sign * y
}
