/**
 * This method executes a provided function once for each array element.
 * @param {array} elements 
 * @param {function} cb 
 */
function each(elements, cb){
    for(let i=0;i < elements.length ; i++){
        cb(elements[i],i,elements);    
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
    for(let i=0;i < elements.length ; i++){
        let value = cb(elements[i], i, elements);
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
    if (startingValue) {
        for (let i=0; i<elements.length; i++) {
            result = cb(result, elements[i], i, elements)
        }
    }else {
        for (let i=1; i<elements.length; i++) {
            result = cb(result, elements[i], i, elements)
        }
    }
    return result;
}
/**
 * This method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.
 * @param {array} elements 
 * @param {function} cb 
 */
function find(elements, cb) {
    for(let i=0;i < elements.length ; i++){
        if (cb(elements[i],i ,elements)) {
            return elements[i];
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
    for(let i=0;i < elements.length ; i++){
        if (cb(elements[i], i , elements)) {
            newArray.push(elements[i]);
        }
    }
    return newArray;
}
/**
 * Flattens a nested array (the nesting can be to any depth).
 * @param {array} elements 
 */
function flatten(elements) {
    let newArray = [];
    for (let item of elements) {
        if (Array.isArray(item)) {
            newArray = newArray.concat(flatten(item));
        }else {
            newArray.push(item);
        }
    }
    return newArray;
}


module.exports = {each,map,reduce,find,filter,flatten}

