/**
 * Key Method Return array of keys in object
 * @param {object} obj 
 */
function keys(obj) {
    let keys = [];
    for (let i in obj) {
        keys.push(i);
    }
    return keys;
}


