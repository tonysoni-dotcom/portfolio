"use strict";
function debounce(fn, delay) {
    let timer;
    return function newFn(...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
const logHello = (name) => console.log("hello", name);
const debouncedLog = debounce(logHello, 500);
debouncedLog("first"); // schedules
debouncedLog("second"); // cancels first, schedules
debouncedLog("third"); // cancels second, schedules
