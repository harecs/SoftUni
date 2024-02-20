function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const searchFieldElement = document.querySelector('#searchField');
        const textForSearch = searchFieldElement.value;
        searchFieldElement.value = '';

        const trElements = Array.from(document.querySelectorAll('tbody tr'));

        for (const tr of trElements) {
            tr.classList.remove('select');
        }

        for (const tr of trElements) {
            for (const td of Array.from(tr.children)) {
                if (td.textContent.includes(textForSearch)) {
                    tr.classList.add('select');
                }
            }
        }
    }
}