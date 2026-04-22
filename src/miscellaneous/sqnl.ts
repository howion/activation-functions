/**
 * The key to the effectiveness of this function is a faster convergence when
 * used in Multilayer Perceptron Artificial Neural Network architectural
 * problems.
 *
 * - `x > 2` -> `1`
 * - `0 <= x <= 2` -> `x - x^2 / 4`
 * - `-2 <= x < 0` -> `x + x^2 / 4`
 * - `x < -2` -> `-1`
 *
 * @param x - Input value.
 * @returns The SQNL-transformed value in `[-1, 1]`.
 *
 * @see Wuraola, A. & Patel, N. (2018). "SQNL: A New Computationally
 * Efficient Activation Function". IJCNN 2018.
 * {@link https://doi.org/10.1109/IJCNN.2018.8489043}
 */
export function SQNL(x: number): number {
    if (x > 2) return 1
    if (x < -2) return -1
    if (x >= 0) return x - (x * x) / 4
    return x + (x * x) / 4
}
