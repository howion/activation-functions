/**
 * Logarithm of the logistic sigmoid.
 *
 * Computes `log(sigmoid(x)) = -log(1 + exp(-x))`. The implementation uses the
 * identity `log(sigmoid(x)) = -softplus(-x) = min(x, 0) - log(1 + exp(-|x|))`,
 * which avoids overflow for large negative inputs and underflow for large
 * positive ones.
 *
 * Commonly used inside numerically stable log-likelihood and binary
 * cross-entropy computations.
 *
 * @param x - Input value.
 * @returns A non-positive value; approaches `0` for large positive inputs and
 * `x` for large negative inputs.
 *
 * @see Dugas, C., Bengio, Y., Belisle, F., Nadeau, C. & Garcia, R. (2001).
 * "Incorporating Second-Order Functional Knowledge for Better Option
 * Pricing". NeurIPS 2001. (Numerically stable softplus; this function uses
 * the identity `log(sigmoid(x)) = -softplus(-x)`.)
 * {@link https://papers.nips.cc/paper/2000/hash/44968aece94f667e4095002d140b5896-Abstract.html}
 */
export function LogSigmoid(x: number): number {
    return Math.min(x, 0) - Math.log1p(Math.exp(-Math.abs(x)))
}
