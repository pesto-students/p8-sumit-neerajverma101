function memoize(reducer) {
    const cache = {};
    return function () {
        const key = JSON.stringify(arguments);
        if (key in cache) {
            console.log('from cache=>');
            return cache[key];
        } else {
            console.log('calculating...');
            const result = reducer.apply(this, arguments);
            cache[key] = result;
            return result;
        }
    }
}

const add = (...arguments) => arguments.reduce((acc, curr) => acc + curr);

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(1, 2));

console.log(memoizedAdd(100, 100));
console.log(memoizedAdd(100))
console.log(memoizedAdd(100, 200))
console.log(memoizedAdd(100, 100, 400))
console.log(memoizedAdd(100, 100, 500))
console.log(memoizedAdd(100, 100, 400))
