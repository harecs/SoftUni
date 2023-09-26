function solve() {
    const cases = {
        'Camel Case': 'camelCase',
        'Pascal Case': 'PascalCase'
    };

    const namingConvention = document.querySelector('#naming-convention').value;

    document.querySelector('#result').textContent = document.querySelector('#text').value
        .split(' ')
        .reduce((acc, value, i) => {
            if (!cases[namingConvention]) {
                return 'Error!';
            }

            value = value.toLowerCase();

            if (i === 0) {
                if (namingConvention == 'Camel Case') {
                    return acc += value;
                } else {
                    return acc += value.replace(value[0], value[0].toUpperCase());
                }
            } else {
                return acc += value.replace(value[0], value[0].toUpperCase());
            }
        }, '');
}