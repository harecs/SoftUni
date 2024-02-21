function factory(library, orders) {
    const result = [];

    for (const order of orders) {
        const readyOrder = Object.assign({}, order.template);
        
        order.parts.forEach(part => {
            readyOrder[part] = library[part];
        });

        result.push(readyOrder);
    }

    return result;
}