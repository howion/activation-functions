# activation-functions

![GitHub package.json version](https://img.shields.io/github/package-json/v/howion/activation-functions)
![npm](https://img.shields.io/npm/dt/activation-functions?label=npm%20downloads)
[![GitHub issues](https://img.shields.io/github/issues/howion/activation-functions)](https://github.com/howion/activation-functions/issues)
[![GitHub license](https://img.shields.io/github/license/howion/activation-functions)](https://github.com/howion/activation-functions/blob/master/LICENSE)


## Installation

From [NPM](https://www.npmjs.com/package/activation-functions)
```bash
$ npm install activation-functions
```

## Available Functions

```js
// x is always considered to be in radians
.Identity(x)
.Inverse(x)
.BinaryStep(x)
.Bipolar(x)
.Logistic(x) | .Sigmoid(x) | .SoftStep(x)
.BipolarSigmoid(x)
.Tanh(x)
.HardTanh(x)
.ArcTan(x)
.ElliotSig(x) | .SoftSign(x)
.Erf(x)
.Sinc(x)
.Sinusoid(x)
.Gaussian(x)
.ISRU(x, a)
.ReLU(x)
.GELU(x)
.PReLU(x, a)
.ELU(x, a)
.SELU(x)
.SoftPlus(x)
.Mish(x)
.SQNL(x)
.BentIdentity(x)
.SiLU(x) | .Swish1(x)
```

Mish: [Official Repsoitory](https://github.com/digantamisra98/Mish)

## License

[**MIT**](https://github.com/howion/activation-functions/blob/master/LICENSE)
