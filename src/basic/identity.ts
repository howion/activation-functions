/**
 * Identity activation.
 *
 * Maps the input directly to the output: `x -> x`.
 *
 * This does not squash, clip, or reshape the value in any way, so it is
 * useful when you want a layer or transformation to stay linear.
 *
 * @param x - Input value.
 * @returns The same value that was passed in.
 */
export function Identity(x: number): number {
    return x
}
