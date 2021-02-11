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

module.exports = each
