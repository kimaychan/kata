/**
 * Implement some basic arithmetic for Church Numbers, namely adding, 
 * multiplying, and exponentiation. Performance is part of this kata; 
 * if you're timing out (and Codewars isn't under load), you'll need 
 * to come up with more efficient functions.
 */

var churchAdd = (c1) => (c2) => (f) => (x) => c1(f)(c2(f)(x)); 
var churchMul = (c1) => (c2) => (f) => (x) => c1(c2(f))(x);
var churchPow = (cb) => (ce) => (f) => (x) => ce(cb)(f)(x);

//04-04-2019