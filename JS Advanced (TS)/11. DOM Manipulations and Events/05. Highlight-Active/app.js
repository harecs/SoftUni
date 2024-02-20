function focused() {
    const inputElements = Array.from(document.querySelectorAll('input'));
    
    inputElements.forEach(ele => ele.addEventListener('focus', onFocus));
    inputElements.forEach(ele => ele.addEventListener('blur', onBlur));

    function onFocus(e) {
        e.target.parentElement.className = 'focused';
    }

    function onBlur(e) {
        e.target.parentElement.className = '';
    }
}