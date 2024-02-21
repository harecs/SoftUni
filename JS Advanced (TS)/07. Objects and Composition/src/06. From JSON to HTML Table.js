function jsonToTable(json) {
    const array = JSON.parse(json);
    const result = [];

    let headerString = '    <tr>';

    Object.keys(array[0]).forEach(key => {
        headerString += `<th>${key}</th>`;
    });

    headerString += '</tr>';
    result.push(headerString);

    for (const obj of array) {
        const values = Object.values(obj);
        let rowString =  '    <tr>';

        values.forEach(value => {
            rowString += `<td>${value}</td>`;
        })

        rowString += '</tr>';
        result.push(rowString);
    }

    result.unshift('<table>');
    result.push('</table>');
    console.log(result.join('\n'));
}

// 50 / 100