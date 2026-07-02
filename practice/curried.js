"use strict";
function curried(fn) {
    return function curriedFunction(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        else {
            return function (...otherArgs) {
                return curriedFunction(...args, ...otherArgs);
            };
        }
    };
}
function add(a, b, c) {
    return a + b + c;
}
const curriedAdd = curried(add);
console.log(add(1, 2, 3));
console.log(curriedAdd(1)(2)(3));
