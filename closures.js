/**
 * Return an object that has two methods called `increment` and `decrement`.
 */
function counterFactory() {
    return {
        count: 0,
        increment: function () {
            this.count++;
        },
        decrement: function() {
            this.count--;
        }
    }
}
/**
 * Return a function that invokes callback
 * @param {function} cb 
 * @param {number} n 
 */
function limitFunctionCallCount(cb, n) {
    let count = counterFactory();
    function invoke() {
        if (count.count < n) {
            count.increment();
            return cb();
        }else {
            return null;
        }
    }
    return invoke;
}
/**
 * 
 * @param {function} cb 
 */
function cacheFunction(cb) {
    let cache = {};
    let counter = counterFactory();
    function invoke() {
        for( let key in cache) {
            if (cache[key] === [...arguments].sort().join(","))
            {
                return cache[key+'r'];
            }
        }
        cache[counter.count] = [...arguments].sort().join(",");
        cache[counter.count + 'r'] = cb(...arguments);
        result = cache[counter.count + 'r'];
        counter.increment();
        return result;
        
    }
    return invoke;
}

module.exports = {counterFactory,limitFunctionCallCount,cacheFunction}
