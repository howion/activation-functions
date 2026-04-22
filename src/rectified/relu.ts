/**
 * Rectified Linear Unit (ReLU).
 *
 * Computes `max(0, x)`. Negative inputs are clamped to 0, while positive
 * inputs pass through unchanged.
 *
 * One of the most widely used activation functions because of its
 * simplicity and piecewise-linear behavior.
 *
 * @param x - Input value.
 * @returns `0` for negative inputs, otherwise `x`.
 *
 * @see Nair, V. & Hinton, G. E. (2010). "Rectified linear units improve
 * restricted Boltzmann machines". ICML 2010.
 * {@link https://dl.acm.org/doi/10.5555/3104322.3104425}
 */
export function ReLU(x: number): number {
    return Math.max(0, x)
}
