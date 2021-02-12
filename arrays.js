/**
 * This method executes a provided function once for each array element.
 * @param {array} elements 
 * @param {function} cb 
 */
function each(elements, cb) {

    for (let index = 0; index < elements.length; index++) {
        cb(elements[index], index, elements);
    }

    return undefined
}
/**
 * This method creates a new array populated with the results of calling a provided function on every element in the calling array.
 * @param {array} elements 
 * @param {function} cb 
 */
function map(elements, cb) {

    let array = [];

    for (let index = 0; index < elements.length; index++) {
        let value = cb(elements[index], index, elements);
        array.push(value);
    }

    return array;
}
/**
 * This method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
 * @param {array} elements 
 * @param {function} cb 
 * @param {number} startingValue 
 */
function reduce(elements, cb, startingValue) {

    let result = startingValue ? startingValue : elements[0]
    let index = 1
    if (startingValue) {
        index = 0
    }
    for (; index < elements.length; index++) {
        result = cb(result, elements[index], index, elements)
    }
    return result;
}


/**
 * This method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.
 * @param {array} elements 
 * @param {function} cb 
 */
function find(elements, cb) {

    for (let index = 0; index < elements.length; index++) {
        if (cb(elements[index], index, elements)) {
            return elements[index];
        }
    }

    return undefined;
}
/**
 * This method creates a new array with all elements that pass the test implemented by the provided function.
 * @param {array} elements 
 * @param {function} cb 
 */

function filter(elements, cb) {

    let newArray = [];

    for (let index = 0; index < elements.length; index++) {
        if (cb(elements[index], index, elements)) {
            newArray.push(elements[index]);
        }
    }
    return newArray;
}
/**
 * Flattens a nested array (the nesting can be to any depth).
 * 
 * @param {array} elements 
 */
function flatten(elements) {

    let newArray = [];
    for (let item of elements) {

        if (Array.isArray(item)) {
            newArray = newArray.concat(flatten(item));
        } else {
            newArray.push(item);
        }
    }

    return newArray;
}


module.exports = {
    each,
    map,
    reduce,
    find,
    filter,
    flatten
}