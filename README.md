# activation-functions

![GitHub package.json version](https://img.shields.io/github/package-json/v/howion/activation-functions)
![npm](https://img.shields.io/npm/dt/activation-functions?label=npm%20downloads)
[![GitHub issues](https://img.shields.io/github/issues/howion/activation-functions)](https://github.com/howion/activation-functions/issues)
[![GitHub license](https://img.shields.io/github/license/howion/activation-functions)](https://github.com/howion/activation-functions/blob/master/LICENSE)

A small, dependency-free collection of common neural-network activation functions, most of them with references to the (best-effort) original papers. Written in TypeScript.

## Installation

From [npm](https://www.npmjs.com/package/activation-functions) via either

```bash
npm add activation-functions
pnpm add activation-functions
yarn add activation-functions
bun add activation-functions
```

## Usage

```js
import { ReLU, Sigmoid, Swish, ... } from "activation-functions"
```

All functions accept any real number as `x`. A few are angle-based and expect input in radians: `Sinusoid`, `Sinc`, and `ArcTan` (which returns an angle in radians).

## Constant Reference

* **`SELU_LAMBDA`** ~ `1.05070098`
* **`SELU_ALPHA`** ~ `1.67326324`

## Function Reference

### Basic Functions

#### **`BinaryStep(x)`**

Classical perceptron activation. Hard threshold at zero that returns one of two discrete states: `0` for `x < 0` and `1` otherwise.

#### **`HeavisideMidpoint(x)`**

Variant of `BinaryStep` that disambiguates the value at the origin. Returns `0` for `x < 0`, `1` for `x > 0`, and `0.5` when `x === 0`, matching the conventional Heaviside step function's midpoint definition.

#### **`Bipolar(x)`**

Zero-centered variant of `BinaryStep` whose two discrete outputs are symmetric around zero.

#### **`Identity(x)`**

Returns the input unchanged. Useful when a layer should stay linear.

#### **`Inverse(x)`**

Simple complement transform that subtracts the input from `1`. Handy for fuzzy-logic style negation on inputs that are already in a unit interval.

### Bounded Smooth Functions

#### **`ArcTan(x)`**

Arctangent. A smoothly bounded curve that returns an angle in radians.

#### **`Erf(x)`**

Rational approximation of the error function with maximum absolute error of about `1.5e-7` [[4]](#references). Used internally by `GELU`.

#### **`HardTanh(x, min = -1, max = 1)`**

Cheap piecewise-linear clamp that clips the input to the given interval. With the default bounds it approximates `Tanh`; with custom bounds it behaves as a generic hard clamp

#### **`Tanh(x)`**

Hyperbolic tangent. A zero-centered, smoothly bounded sigmoid that is often easier to train with than `Logistic`.

### Oscillatory Functions

#### **`Sinc(x)`**

Unnormalized cardinal sine with the removable singularity at zero filled in. Oscillates and decays in magnitude as the input grows.

#### **`Sinusoid(x)`**

Plain sine function. Unlike most activations it is periodic rather than monotonic.

### Rectified and Modern Activations

#### **`CELU(x, alpha = 1)`**

Continuously differentiable exponential linear unit. A reparameterization of `ELU` that stays smooth at the origin for any positive `alpha`; coincides with `ELU` when `alpha = 1`. [[18]](#references)

#### **`ELU(x, a = 1)`**

Exponential linear unit. Positive values stay linear; negative values bend smoothly toward a negative saturation level controlled by `a`. Uses `Math.expm1` internally for accuracy near zero. [[6]](#references)

#### **`dELU(x, a = 1)`**

Derivative of `ELU`. Equal to `1` for positive inputs and `a + ELU(x, a)` for non-positive inputs, so the same `a` should be passed as was used on the forward pass. [[6]](#references)

#### **`GELU(x)`**

Gaussian error linear unit, exact formulation via the error function (no tanh approximation). Smoothly weights the input by the standard normal CDF. [[8]](#references)

#### **`HardSwish(x)`**

Piecewise-polynomial approximation of `Swish` / `SiLU` using the MobileNetV3 form `x * ReLU6(x + 3) / 6`. Pairs with `HardSigmoid` so that `HardSwish(x) = x * HardSigmoid(x)` holds exactly. [[17]](#references) [[22]](#references)

#### **`ISRLU(x, a = 1)`**

Inverse square root linear unit. Rectifier companion to `ISRU`: positive inputs pass through unchanged while negatives are smoothly saturated via `x / sqrt(1 + a * x^2)`. [[14]](#references)

#### **`Mish(x)`**

Smooth non-monotonic activation defined as `x * tanh(SoftPlus(x))`. [[10]](#references) [[11]](#references)

#### **`QuickGELU(x)`**

Cheap sigmoid-based approximation of `GELU`, computed as `x * sigmoid(1.702 * x)`. Proposed alongside the exact form and used by OpenAI's CLIP among others. [[8]](#references)

#### **`ReLU(x)`**

Rectified linear unit. Zeroes negative inputs and passes positives through unchanged. [[5]](#references)

#### **`ReLU6(x)`**

Clipped `ReLU` that also saturates at six, defined as `min(max(0, x), 6)`. Originally introduced for CIFAR-10 training and popularized later as a mobile-inference default. [[16]](#references)

#### **`SELU(x)`**

Scaled ELU that multiplies `ELU(x, SELU_ALPHA)` by `SELU_LAMBDA`, using the published self-normalizing constants from Klambauer et al. [[7]](#references)

#### **`SiLU(x)`**

Sigmoid linear unit; computes `x * Sigmoid(x)`, the fixed `beta = 1` specialization of `Swish` [[13]](#references). Also exported as the alias `Swish1`.

#### **`dSiLU(x)`**

Derivative of `SiLU` at `x`, equal to `sigmoid(x) + x * sigmoid(x) * (1 - sigmoid(x))`. [[13]](#references)

#### **`SoftPlus(x, beta = 1, threshold = 20)`**

Smooth alternative to `ReLU`, numerically stable for large positive inputs. The sharpness parameter `beta` controls how abruptly the curve bends at zero, and inputs with `beta * x > threshold` fall back to the linear asymptote `x` to avoid overflow. [[9]](#references)

#### **`Swish(x, beta = 1)`**

Self-gated activation `x * Sigmoid(beta * x)`. Interpolates between a near-identity mapping (small `beta`) and a `ReLU`-like curve (large `beta`) [[12]](#references). At `beta = 1` it coincides with `SiLU`.

#### **`ThresholdedReLU(x, theta = 1)`**

Generalization of `ReLU` that zeroes out inputs at or below `theta` rather than at or below zero, encouraging sparser activations. [[21]](#references)

#### **`ThresholdedLinear(x, theta = 1)`**

Signed variant of `ThresholdedReLU`. Passes `x` through unchanged when `|x| > theta` and zeroes it out otherwise, so negative magnitudes above the threshold are preserved instead of being clipped to zero. [[21]](#references)

### Shrinkage Operators

#### **`HardShrink(x, lambda = 0.5)`**

Hard-thresholding operator. Zeroes inputs inside the `[-lambda, lambda]` band and passes the rest through unchanged. [[20]](#references)

#### **`SoftShrink(x, lambda = 0.5)`**

Soft-thresholding operator. Returns `x - lambda` for `x > lambda`, `x + lambda` for `x < -lambda`, and `0` otherwise, so small inputs collapse to zero and larger ones are pulled toward zero by `lambda`. A classic sparse-coding and wavelet-denoising nonlinearity. [[19]](#references)

#### **`TanhShrink(x)`**

Subtracts `tanh(x)` from `x`. Strongly attenuates small inputs and asymptotes to a shifted identity for large inputs.

### Sigmoid Family

#### **`ElliotSig(x)`**

Elliott's zero-centered sigmoidal squash, computed as `x / (1 + |x|)`. A cheap drop-in alternative to `Tanh` that avoids exponentials and returns values in `(-1, 1)` [[3]](#references). For the shifted `(0, 1)` form, use `ElliotSigPositive`. Functionally identical to `SoftSign`.

#### **`ElliotSigPositive(x)`**

Positive `(0, 1)` variant of `ElliotSig`, equal to `0.5 * ElliotSig(x) + 0.5`. A cheap drop-in replacement for `Logistic` when outputs must live in the positive unit interval. [[3]](#references)

#### **`HardSigmoid(x)`**

Piecewise-linear approximation of `Logistic` with no exponentials, using the MobileNetV3 form `max(0, min(1, (x + 3) / 6))`. Constant outside `[-3, 3]` and linear inside it. [[17]](#references)

#### **`ISRU(x, a = 1)`**

Inverse square root unit. Smooth zero-centered bounded squasher `x / sqrt(1 + a * x^2)` without exponentials; the scale `a` controls how quickly the curve saturates, with output in `(-1/sqrt(a), 1/sqrt(a))` [[14]](#references). This is the bounded sigmoidal building block; for the rectifier variant use `ISRLU`.

#### **`LogSigmoid(x)`**

Numerically stable logarithm of the logistic sigmoid, implemented as `min(x, 0) - log1p(exp(-|x|))` (equivalently `-SoftPlus(-x)`), so it neither overflows for large negative inputs nor underflows for large positive ones. Common inside log-likelihood and binary cross-entropy losses. [[9]](#references)

#### **`Logistic(x)`**

The classical smooth sigmoid `1 / (1 + exp(-x))`. Squashes real numbers into `(0, 1)` and maps zero to one half. [[1]](#references)

#### **`Sigmoid(x)`**

Alias of `Logistic`.

#### **`SoftStep(x)`**

Alias of `Logistic`.

#### **`SoftSign(x)`**

Smooth bounded squashing function `x / (1 + |x|)` without exponentials. A lightweight alternative to `Tanh`. [[2]](#references)

### Miscellaneous

#### **`BentIdentity(x)`**

Near-identity activation with a gentle nonlinear bend. Keeps the overall shape of the identity while still providing some curvature.

#### **`Gaussian(x, sigma = 1)`**

Gaussian radial basis bump `exp(-x^2 / (2 * sigma^2))` centered at zero, peaking at one and falling off symmetrically. The width parameter `sigma` controls how wide the bell is.

#### **`SQNL(x)`**

Square nonlinearity. Cheap piecewise-quadratic curve that saturates at `-1` for `x < -2` and at `1` for `x > 2`, with a quadratic blend in between. [[15]](#references)

## Implementation Notes

* `Erf(x)` is a rational approximation with maximum absolute error of about `1.5e-7` over the real line (Abramowitz and Stegun 7.1.26)
* `SoftPlus` uses a numerically stable formulation internally and switches to the linear asymptote once the input exceeds `threshold`, so it never overflows for large positive inputs
* `LogSigmoid` is implemented as `min(x, 0) - log1p(exp(-|x|))`, i.e. `-softplus(-x)`, so it is stable across the whole real line
* `SELU` uses the published `lambda` and `alpha` constants from Klambauer et al., rounded to the precision representable by an IEEE-754 double
* `Swish(x, beta)` generalizes `SiLU`; calling `Swish(x, 1)` is numerically identical to `SiLU(x)`
* `HardSigmoid` and `HardSwish` use the MobileNetV3 forms, so `HardSwish(x) = x * HardSigmoid(x)` holds exactly
* `BinaryStep(x)`, `HeavisideMidpoint(x)` and `Bipolar(x)` narrow their return types to the literal unions `0 | 1`, `0 | 0.5 | 1` and `-1 | 1` respectively
* Alias exports (`Sigmoid`, `SoftStep`, `Swish1`) are the same function object as their base implementation.

## References

1. **[Han, J. and Moraga, C. (1995)](https://doi.org/10.1007/3-540-59497-3_175)**. "The influence of the sigmoid function parameters on the speed of backpropagation learning". *IWANN 1995*, LNCS 930, pp. 195-201. `Logistic`, `Sigmoid`, `SoftStep`
2. **[Glorot, X. and Bengio, Y. (2010)](https://proceedings.mlr.press/v9/glorot10a.html)**. "Understanding the difficulty of training deep feedforward neural networks". *AISTATS 2010*. `SoftSign`
3. **[Elliott, D. L. (1993)](https://drum.lib.umd.edu/handle/1903/5355)**. "A better activation function for artificial neural networks". ISR Technical Report TR 93-8, University of Maryland. `ElliotSig`, `ElliotSigPositive`
4. **[Abramowitz, M. and Stegun, I. A. (1964)](https://personal.math.ubc.ca/~cbm/aands/page_299.htm)**. *Handbook of Mathematical Functions*. National Bureau of Standards Applied Mathematics Series 55, formula 7.1.26. `Erf`
5. **[Nair, V. and Hinton, G. E. (2010)](https://dl.acm.org/doi/10.5555/3104322.3104425)**. "Rectified linear units improve restricted Boltzmann machines". *ICML 2010*. `ReLU`
6. **[Clevert, D.-A., Unterthiner, T. and Hochreiter, S. (2015)](https://arxiv.org/abs/1511.07289)**. "Fast and Accurate Deep Network Learning by Exponential Linear Units (ELUs)". arXiv:1511.07289. `ELU`, `dELU`
7. **[Klambauer, G., Unterthiner, T., Mayr, A. and Hochreiter, S. (2017)](https://arxiv.org/abs/1706.02515)**. "Self-Normalizing Neural Networks". arXiv:1706.02515. `SELU`
8. **[Hendrycks, D. and Gimpel, K. (2016)](https://arxiv.org/abs/1606.08415)**. "Gaussian Error Linear Units (GELUs)". arXiv:1606.08415. `GELU`, `QuickGELU`
9. **[Dugas, C., Bengio, Y., Belisle, F., Nadeau, C. and Garcia, R. (2001)](https://papers.nips.cc/paper/2000/hash/44968aece94f667e4095002d140b5896-Abstract.html)**. "Incorporating Second-Order Functional Knowledge for Better Option Pricing". *NeurIPS 2001*. `SoftPlus`, `LogSigmoid` (via the identity `log(sigmoid(x)) = -softplus(-x)`)
10. **[Misra, D. (2019)](https://arxiv.org/abs/1908.08681)**. "Mish: A Self Regularized Non-Monotonic Activation Function". arXiv:1908.08681. `Mish`
11. **[Misra, D. — `digantamisra98/Mish` (GitHub)](https://github.com/digantamisra98/Mish)**. Official repository for "Mish: A Self Regularized Non-Monotonic Activation Function" [BMVC 2020], with reference implementations, benchmarks and downstream integrations. `Mish`
12. **[Ramachandran, P., Zoph, B. and Le, Q. V. (2017)](https://arxiv.org/abs/1710.05941)**. "Searching for Activation Functions". arXiv:1710.05941. `Swish`
13. **[Elfwing, S., Uchibe, E. and Doya, K. (2018)](https://arxiv.org/abs/1702.03118)**. "Sigmoid-Weighted Linear Units for Neural Network Function Approximation in Reinforcement Learning". *Neural Networks* 107, pp. 3-11. arXiv:1702.03118. `SiLU`, `dSiLU`
14. **[Carlile, B., Delamarter, G., Kinney, P., Marti, A. and Whitney, B. (2017)](https://arxiv.org/abs/1710.09967)**. "Improving Deep Learning by Inverse Square Root Linear Units (ISRLUs)". arXiv:1710.09967. `ISRU`, `ISRLU`
15. **[Wuraola, A. and Patel, N. (2018)](https://doi.org/10.1109/IJCNN.2018.8489043)**. "SQNL: A New Computationally Efficient Activation Function". *IJCNN 2018*. `SQNL`
16. **[Krizhevsky, A. (2010)](https://www.cs.toronto.edu/~kriz/conv-cifar10-aug2010.pdf)**. "Convolutional Deep Belief Networks on CIFAR-10". Technical report, University of Toronto. `ReLU6`
17. **[Howard, A., Sandler, M., Chen, B., Wang, W., Chen, L.-C., Tan, M., Chu, G., Vasudevan, V., Zhu, Y., Pang, R., Le, Q. V. and Adam, H. (2019)](https://arxiv.org/abs/1905.02244)**. "Searching for MobileNetV3". *ICCV 2019*. arXiv:1905.02244. `HardSigmoid`, `HardSwish`
18. **[Barron, J. T. (2017)](https://arxiv.org/abs/1704.07483)**. "Continuously Differentiable Exponential Linear Units". arXiv:1704.07483. `CELU`
19. **[Donoho, D. L. (1995)](https://doi.org/10.1109/18.382009)**. "De-noising by soft-thresholding". *IEEE Transactions on Information Theory* 41(3), pp. 613-627. `SoftShrink`
20. **[Donoho, D. L. and Johnstone, I. M. (1994)](https://doi.org/10.1093/biomet/81.3.425)**. "Ideal spatial adaptation by wavelet shrinkage". *Biometrika* 81(3), pp. 425-455. `HardShrink`
21. **[Konda, K., Memisevic, R. and Krueger, D. (2014)](https://arxiv.org/abs/1402.3337)**. "Zero-bias autoencoders and the benefits of co-adapting features". arXiv:1402.3337. `ThresholdedReLU`, `ThresholdedLinear`
22. **[Avenash, R. and Viswanath, P. (2019)](https://doi.org/10.5220/0007469604130420)**. "Semantic Segmentation of Satellite Images using a Modified CNN with Hard-Swish Activation Function". *VISIGRAPP/VISAPP 2019*. A similar variant of hard-swish proposed independently of MobileNetV3. `HardSwish`

## License

This project is licensed under [MIT](./LICENSE) allowing you to use, modify, and distribute.
