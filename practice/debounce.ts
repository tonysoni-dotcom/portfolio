function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void{
    let timer:ReturnType<typeof setTimeout> | undefined;
    return function newFn(...args: Parameters<T>):void {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn(...args);
        }, delay)
    };
}

const logHello:(name: string) => void = (name: string) => console.log("hello", name);
const debouncedLog:(name: string) => void = debounce(logHello, 500);

debouncedLog("first");   // schedules
debouncedLog("second");  // cancels first, schedules
debouncedLog("third");   // cancels second, schedules