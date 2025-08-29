function flattenArray(obj) {
    return obj.map(e => flatten(e));
}

function flattenData(obj) {
    return flatten(obj.data);
}

function flattenAttrs(obj) {
    let attrs = {};
    for (var key in obj.attributes) {
        attrs[key] = flatten(obj.attributes[key]);
    }
    return {
        id: obj.id,
        ...attrs
    };
}

const flatten = (obj) => {
    if(Array.isArray(obj)) {
        return flattenArray(obj);
    }
    if(obj && obj.data) {
        return flattenData(obj);
    }
    if(obj && obj.attributes) {
        return flattenAttrs(obj);
    }
    return obj;
}

export {
    flatten
}