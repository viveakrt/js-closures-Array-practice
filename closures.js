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

module.exports = {counterFactory,limitFunctionCallCount}
