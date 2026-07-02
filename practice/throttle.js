"use strict";
function throttle(fn, delay) {
    let timer;
    return function newFn(...args) {
        if (timer) {
        }
        else {
            fn(...args);
            timer = setTimeout(() => {
                timer = undefined;
            }, delay);
        }
    };
}
const logger = (str) => console.log(str);
const throttledLogger = throttle(logger, 500);
throttledLogger("A"); // fires immediately
throttledLogger("B"); // ignored (within 500ms)
throttledLogger("C"); // ignored (within 500ms)
// Wait ~500ms
setTimeout(() => throttledLogger("D"), 600); // fires (past 500ms window)
setTimeout(() => throttledLogger("E"), 700); // ignored (D just fired)
