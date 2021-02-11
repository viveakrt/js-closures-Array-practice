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
module.exports = map
module.exports = each
