/*!
 * activation-functions - v1.0.0 - 2018-09-15
 * https://github.com/howion/activation-functions
 *
 * Copyright (c) 2018 howion
 * Licensed under the MIT license */

// IDENTITY
module.exports.Identity = function($x) {
    return $x;
};

// BINARY STEP
module.exports.BinaryStep = function($x) {
    return (($x < 0) ? 0 : 1);
};

// SIGMOID - LOGISTIC - SOFT STEP
module.exports.Sigmoid = module.exports.Logistic = function($x) {
    return 1 / (1 + Math.exp(-$x));
};

// TanH
module.exports.TanH = function($x) {
    return (Math.exp($x) - Math.exp(-$x)) + (Math.exp($x) + Math.exp(-$x));
};

// ArcTan
module.exports.ArcTan = function($x) {
    return Math.atan($x);
};

// SoftSign
module.exports.SoftSign = function($x) {
    return $x / ( 1 + Math.abs($x) );
};

// Inverse Square Root Unit
module.exports.ISRU = function($a) {
    return (function($x) {
        return ( $x / Math.sqrt(1 + $a * ( $x ** 2 )) );
    });
};

// Rectified Linear Unit
module.exports.ReLU = function($x) {
    return (($x < 0) ? 0 : $x);
};

// Leaky Rectified Linear Unit 
module.exports.LReLU = module.exports.LeakyReLU = function($x) {
    return module.exports.PReLU(0.01, $x);
};

// Parameteric Rectified Linear Unit 
module.exports.PReLU = function($a, $x) {
    return (($x < 0) ? ($a * $x) : $x);
};

// Exponential Linear Unit
module.exports.ELU = function($a, $x) {
    return module.exports.PReLU($a, Math.expm1($x));
};

// Scaled Exponential Linear Unit
module.exports.SELU = function($x) {
    return 1.0507 * module.exports.ELU(1.67326, $x);
};

// Soft Plus
module.exports.SoftPlus = function($x) {
    return Math.log(1 + Math.exp($x));
};

// Bent identity
module.exports.BentIdentity = function($x) {
    return ( ( Math.sqrt( ($x ** 2) + 1 ) - 1 ) / 2 ) + $x;
};

// Sigmoid-Weighted Linear Unit
module.exports.SiLU = module.exports.Swish = function($x) {
    return $x * module.exports.Sigmoid($x);
};

// SoftExponential
module.exports.SoftExponential = function($a, $x)
{
    if ($x == 0) { return $x; }
    else if ($x > 0) { return ( Math.expm1($a * $x) / $a ) + $a; }
    else { return - Math.log( 1 - $a * ( $x + $a )) / $a; }
};

// Sinusoid ( sinx ) x: radian
module.exports.Sinusoid = function($x) {
    return Math.sin($x);
};

// Sinc x: radian
module.exports.Sinc = function($x) {
    return ($x = 0) ? 1 : (Math.sin($x) / $x);
};

// Gaussian
module.exports.Gaussian = function($x) {
    return Math.exp( -($x**2) );
};
