/**
 * Tanh-shrinkage operator.
 *
 * Computes `x - tanh(x)`. Near zero the function behaves like `x^3 / 3`, so
 * small inputs are strongly attenuated; for large `|x|` it asymptotes to
 * `x - sign(x)`, i.e. a shifted identity.
 *
 * Smooth counterpart to `SoftShrink` / `HardShrink`.
 *
 * @param x - Input value.
 * @returns `x - tanh(x)`.
 */
export function TanhShrink(x: number): number {
    return x - Math.tanh(x)
}
