function validate() {
    document.querySelector('#email')
        .addEventListener('change', (e) => {
            e.target.className =
                /[a-z]+@[a-z]+\.[a-z]+/g.test(e.target.value)
                    ? '' : 'error';
        });
}