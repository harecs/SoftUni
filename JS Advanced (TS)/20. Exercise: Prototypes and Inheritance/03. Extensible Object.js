function extensibleObject() {
    const obj = {};
    obj.extend = function (template) {
        for (const property of Object.getOwnPropertyNames(template)) {
            if (typeof template[property] === 'function') {
                Object.getPrototypeOf(this)[property] = template[property];
            } else {
                this[property] = template[property];
            }
        }
    }

    return obj;
}