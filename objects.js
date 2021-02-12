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
/**
 * Value Method return array of values in object
 * @param {object} obj 
 */
function values(obj) {
    let values = [];
    for (let i in obj) {
        values.push(obj[i]);
    }
    return values;
}

/**
 * mapObject return key and value object
 * @param {object} obj 
 * @param {function} cb 
 */
function mapObject(obj, cb) {
    for (let i in obj) {
        let newObj = cb(obj[i], i, obj);
        obj[i] = newObj;
    }
    return obj;
}
