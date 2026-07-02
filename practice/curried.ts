function curried<T extends (...args:any[]) => any>(fn: T):any {
    return function curriedFunction(...args:any[]):any {
        if(args.length >= fn.length) {
            return fn(...args);
        }else{
            return function(...otherArgs: any[]): any {
                return curriedFunction(...args, ...otherArgs);
            }
        }
    }
}

function add(a:number, b:number, c:number):number {
    return a+b+c;
}

const curriedAdd: (a:number) => any = curried(add);

console.log(add(1,2,3))
console.log(curriedAdd(1)(2)(3));