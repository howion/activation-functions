/**
 * Logistic sigmoid activation.
 *
 * Maps real numbers into the open interval (0, 1) using `1 / (1 + exp(-x))`.
 *
 * Large negative values move close to 0, large positive values move close to
 * 1, and 0 maps to 0.5.
 *
 * @param x - Input value.
 * @returns A smooth value strictly between 0 and 1.
 *
 * @see Han, J. & Moraga, C. (1995). "The influence of the sigmoid function
 * parameters on the speed of backpropagation learning". IWANN 1995, LNCS
 * 930, pp. 195-201. {@link https://doi.org/10.1007/3-540-59497-3_175}
 */
export function Logistic(x: number): number {
    return 1 / (1 + Math.exp(-x))
}

/**
 * Alias of {@link Logistic}. `Sigmoid(x)` and `Logistic(x)` are the same
 * function.
 */
export const Sigmoid = Logistic

/**
 * Alias of {@link Logistic}. `SoftStep(x)` and `Logistic(x)` are the same
 * function.
 */
export const SoftStep = Logistic
