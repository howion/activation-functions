/*!
 * activation-functions - v2.0.0 - 2020
 * https://github.com/howion/activation-functions
 *
 * Copyright (c) 2018 howion
 * Licensed under the MIT license */

/**
 * Identity function: x -> x
 * @param {number} $x 
 */
module.exports.Identity = function($x) {
    return $x;
};

/**
 * Inverse function: x -> 1-x
 * @param {number} $x 
 */
module.exports.Inverse = function($x) {
    return (1 - $x);
};

/**
 * BinaryStep function: x -> (x<0 ? 0 : 1)
 * @param {number} $x 
 */
module.exports.BinaryStep = function($x) {
    return (($x < 0) ? 0 : 1);
};

/**
 * Bipolar function: x -> (x>0 ? 1 : 0)
 * @param {number} $x 
 */
module.exports.Bipolar = function($x) {
    return (($x>0) ? 1 : -1);
};

/**
 * Logistic, Sigmoid, or SoftStep function: x -> (1/(1+e^-x))
 * @param {number} $x 
 */
module.exports.Logistic = module.exports.Sigmoid = module.exports.SoftStep = function($x) {
    return 1 / (1 + Math.exp(-$x));
};

/**
 * BipolarSigmoid function: x -> (x>0 ? 1 : 0)
 * @param {number} $x 
 */
module.exports.BipolarSigmoid = function($x) {
    return (2*module.exports.Sigmoid($x) - 1);
};

/**
 * Same as Math.tanh
 * @param {number} $x (in radians)
 */
module.exports.Tanh = function($x) {
    return Math.tanh($x);
};

/**
 * HardTanh function: x-> max(-1, min(1, x))
 * @param {number} $x (in radians)
 */
module.exports.HardTanh = function($x) {
    return Math.max(-1, Math.min(1, $x));
};

/**
 * Same as Math.atan
 * @param {number} $x (in radians)
 */
module.exports.ArcTan = function($x) {
    return Math.atan($x);
};

/**
 * ElliotSig, or SoftSign function: x -> (x/(1+|x|))
 * @param {number} $x 
 */
module.exports.ElliotSig = module.exports.SoftSign = function($x) {
    return $x / ( 1 + Math.abs($x) );
};

/**
 * Erf (Error) function: x -> erf(x)
 * @param {number} $x (in radians)
 */
module.exports.Erf = function($x) {
    var a1 =  0.254829592;
    var a2 = -0.284496736;
    var a3 =  1.421413741;
    var a4 = -1.453152027;
    var a5 =  1.061405429;
    var p  =  0.3275911;

    var sign = (($x < 0) ? -1: 1);
    $x = Math.abs($x);

    var t = 1.0/(1.0 + p*$x);
    var y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-($x**2));

    return sign*y;
};

/**
 * Sinc function: x -> (sinx/x)
 * @param {number} $x (in radians)
 */
module.exports.Sinc = function($x) {
    return (($x == 0) ? 1 : (Math.sin($x) / $x));
};

/**
 * Same as Math.sin
 * @param {number} $x (in radians)
 */
module.exports.Sinusoid = function($x) {
    return Math.sin($x);
};

/**
 * Gaussian function: x -> e^(-x^2)
 * @param {number} $x 
 */
module.exports.Gaussian = function($x) {
    return Math.exp(-($x**2));
};

/**
 * ISRU (Inverse Square Root Unit) function: x -> x/sqrt(1+x^2)
 * @param {number} $x 
 */
module.exports.ISRU = function($x, $a) {
    return ( $x / Math.sqrt(1 + $a*($x**2)) );
};

/**
 * ReLU (Rectified linear unit) function: x -> max(0, x)
 * @param {number} $x 
 */
module.exports.ReLU = function($x) {
    return Math.max(0, $x);
};

/**
 * GELU (Gaussian error linear unit) function: x -> (x/2){1+erf[x/sqrt(2)]}
 * 
 * See: https://arxiv.org/abs/1606.08415
 * @param {number} $x 
 */
module.exports.GELU = function($x) {
    return ($x/2)*(1+ module.exports.Erf($x/Math.SQRT2));
};

/**
 * PReLU (Parameteric rectified linear unit) function: x -> ((x<0) ? ax : x)
 * 
 * See: https://arxiv.org/abs/1502.01852
 * @param {number} $x 
 */
module.exports.PReLU = function($x, $a) {
    return (($x < 0) ? ($a * $x) : $x);
};

/**
 * ELU (Exponential Linear Unit) function: x -> ((x>0) ? x : (a*(e^x -1)))
 * 
 * See: https://arxiv.org/abs/1511.07289
 * @param {number} $x 
 */
module.exports.ELU = function($x, $a) {
    return (($x > 0) ? $x : ($a*Math.expm1($x)));
};

/**
 * SELU (Scaled Exponential Linear Unit) function: x -> 1.0507*ELU(1.67326, x)
 * 
 * See: https://arxiv.org/abs/1706.02515
 * @param {number} $x 
 */
module.exports.SELU = function($x) {
    return 1.0507 * module.exports.ELU($x, 1.67326);
};

/**
 * SoftPlus function: x -> ln(1+e^x)
 * @param {number} $x 
 */
module.exports.SoftPlus = function($x) {
    return Math.log(1 + Math.exp($x));
};

/**
 * Mish function: x -> x*tanh(SoftPlus(x)=ln(1+e^x))
 * 
 * See: https://github.com/digantamisra98/Mish
 * @param {number} $x (in radians)
 */
module.exports.Mish = function($x) {
    return $x*Math.tanh(module.exports.SoftPlus($x));
};

/**
 * SQNL (Square nonlinearity) function: x -> ...
 * @param {number} $x 
 */
module.exports.SQNL = function($x) {
    if ($x > +2) { return +1; }
    if ($x < -2) { return -1; }
    if ($x < 0)  { return $x + ($x**2)/4; }
    /* -2=<x<0: */ return $x + ($x**2)/4;
};

/**
 * BentIdentity function: x -> [{sqrt(x^2 + 1) - 1}/2 + x]
 * @param {number} $x 
 */
module.exports.BentIdentity = function($x) {
    return ((Math.sqrt(($x**2) + 1) - 1)/2) + $x;
};

/**
 * (Sigmoid linear unit) SiLU, or Swish1 function: x -> (x/(1+e^-x))
 * @param {number} $x 
 */
module.exports.SiLU = module.exports.Swish1 = function($x) {
    return $x * module.exports.Sigmoid($x);
};
