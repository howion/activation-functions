# activation-functions

Javascript **implementation** of some activation functions

# What is Activation Function

From [Wikipedia](https://en.wikipedia.org/wiki/Activation_function)

Logistic **activation function**
In artificial neural networks, the activation function of a node defines the output of that node given an input or set of inputs.

## Installation

From [NPM](npmjs.com/package/activation-functions)
```bash
$ npm install activation-functions
```

## Functions

| Name            | Equation | Range |
| :---:           | :------: | :---: |
| Identity        | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/f690285952308aa49e3c6aac892df31cad6d1b06) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/0c8c11c44279888c9e395eeb5f45d121348ae10a) |
| BinaryStep      | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/729e75e92835e4a6ec424921f3fcdbea050bb3a7) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/28de5781698336d21c9c560fb1cbb3fb406923eb) |
| Sigmoid         | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/36f792c44c0a7069ad01386452569d6e34fe95d7) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/c79c6838e423c1ed3c7ea532a56dc9f9dae8290b) |
| TanH            | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/84c428bf21e34ccc0be8becf3443b06a4b61f3ee) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/e120a3bd60fc89b495dd7ef6039465b7e6a703b1) |
| ArcTan          | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/068766282e38cec749b06698a55608f3a5821b19) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/05c407a8d430e4361ca9ff6f154740f8bf5bfc2e) |
| SoftSign        | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/4735c7d34e544299cbbfdb4f388391627f186658) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/e120a3bd60fc89b495dd7ef6039465b7e6a703b1) |
| ISRU            | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/4ae9806b66b572f79faad8a96638651dc0a3b226) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/e0e37e10d8a65bb3409d236bba45e8800972ccc6) |
| ReLU            | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/1d25c25758581789c97cdf80d52bf82bbfd0f237) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/8dc2d914c2df66bc0f7893bfb8da36766650fe47) |
| LReLU           | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/aaabce8985d074b5f4482f4efa327c7c61da3ca6) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/0c8c11c44279888c9e395eeb5f45d121348ae10a) |
| PReLU           | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/387a2af979ccc6a29b62950e1efb7c3a86209ad7) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/0c8c11c44279888c9e395eeb5f45d121348ae10a) |
| ELU             | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/baf8c2809f1eff813c6469ac92d6231cb08607e4) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/9a966cc9f5c4412bfc563ac9790d9ed43177bfdd) |
| SELU            | See [Wiki](https://en.wikipedia.org/wiki/Activation_function) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/e1357562409324a8c59d68435f87b4acb04d2045) |
| SoftPlus        | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/f21f3d1e2c67c5c2d2085e384512bc737c8e14af) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/da17102e4ed0886686094ee531df040d2e86352a) |
| BentIdentity    | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/c4365ebef6b1e8e4521ab1df8b640e27edf9557c) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/0c8c11c44279888c9e395eeb5f45d121348ae10a) |
| SiLU            | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/46d7c864da4842a98d2811dded41ded9600a8ea0) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/054f4a31fb768ee067840626b62ee2870dfebb9f) |
| SoftExponential | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/77a7febdaa2748fa1a0a09926e92a8e481633203) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/0c8c11c44279888c9e395eeb5f45d121348ae10a) |
| Sinusoid       | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fb1266b7f7718442e31e45eef3d81bef6a8b9af) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/51e3b7f14a6f70e614728c583409a0b9a8b9de01) |
| Sinc           | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a9b31f793b188ddd3e1fa48ccefe1bb1b97c0c6) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/7813b154f09cf5aa32f9fa13dc519fd85b1df60a) |
| Gaussian       | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bed0b77b34cab03996deb42d464becab2f05636) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/7e70f9c241f9faa8e9fdda2e8b238e288807d7a4) |

## Usage

> **$x** must be **Radian**

```js
import * as activation from 'activation-function'

activation.Identity($x)
activation.BinaryStep($x)
activation.Sigmoid($x)
activation.TanH($x)
activation.ArcTan($x)
activation.SoftSign($x)
activation.ISRU($a)($x) // COEFFICIENT IS PREDEFINED
activation.ReLU($x)
activation.LReLU($x)
activation.PReLU($a, $x)
activation.ELU($a, $x)
activation.SELU($x)
activation.SoftPlus($x)
activation.BentIdentity($x)
activation.SiLU($x)
activation.SoftExponential($a, $x)
activation.Sinusoid($x)
activation.Sinc($x)
activation.Gaussian($x)
```

## License

[**MIT**](https://github.com/howion/activation-functions/blob/master/LICENSE)
