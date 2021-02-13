/**
 * Return an object that has two methods called `increment` and `decrement`.
 */
function counterFactory() {
    var count=0
    var inc = function () {
        count++;
    }
    var dec = function() {
        count--;
    }
    return {
        
        increment: inc,
        decrement: dec
    }
}

/**
 * Return a function that invokes callback
 * @param {function} cb 
 * @param {number} n 
 */
function limitFunctionCallCount(cb, n) {
    let count = 0;
    function invoke() {
        if (count < n) {
            count++;
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
    function invoke(arg){
        if(arg in cache)  return cache[arg];
        else{
            let resultCache = cb(arg);
            cache[arg] = resultCache;
            return resultCache;
        }
    }
    return invoke
}

module.exports = {
    counterFactory,
    limitFunctionCallCount,
    cacheFunction
}
