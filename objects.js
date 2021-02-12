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

/**
 * pair method return array of arrays
 * @param {object} obj 
 */
function pairs(obj) {
    let pair = [];
    for (let i in obj) {
        pair.push([i, obj[i]]);
    }
    return pair;
}

/**
 * inverted method return value of key
 * @param {object} obj 
 */
function invert(obj) {
    let newObj = {}
    for (let i in obj) {
        newObj[obj[i]] = i;
    }
    return newObj;
}

/**
 * defaults return same object
 * @param {object} obj 
 * @param {object} defaultProps 
 */
function defaults(obj, defaultProps) {
    for (let i in defaultProps) {
        if (!(i in obj)) {
            obj[i] = defaultProps[i];
        }
    }
    return obj
}


module.exports = {keys,values,mapObject,pairs,invert,defaults}