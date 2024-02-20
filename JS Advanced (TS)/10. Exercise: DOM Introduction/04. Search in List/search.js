function search() {
    const searchText = document.querySelector('#searchText').value;
    const listElements = document.querySelectorAll('#towns li');
    let matchesCount = 0;

    for (const element of listElements) {
        if (element.textContent.includes(searchText)) {
            element.style.textDecoration = 'underline';
            element.style.fontWeight = 'bold';

            matchesCount++;
        } else {
            element.style.textDecoration = 'none';
            element.style.fontWeight = 'normal';
        }
    }

    document.querySelector('#result').textContent = `${matchesCount} matches found`
}