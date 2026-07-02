function throttle<T extends (...args: any[])=>void>(fn:T, delay: number): (...args: any[]) => void {
    let timer:ReturnType<typeof setTimeout> | undefined;
    return function newFn(...args:any[]):void {
        if(timer){

        }else{
            fn(...args);
            timer = setTimeout(() => {
                timer = undefined;
            }, delay)
        }
    }
}

const logger:(...args : any[]) => void = (str) => console.log(str);

const throttledLogger: (...args:any[]) => void = throttle(logger, 500);

throttledLogger("A");  // fires immediately
throttledLogger("B");  // ignored (within 500ms)
throttledLogger("C");  // ignored (within 500ms)

// Wait ~500ms
setTimeout(() => throttledLogger("D"), 600);  // fires (past 500ms window)
setTimeout(() => throttledLogger("E"), 700);  // ignored (D just fired)