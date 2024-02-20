function validate() {
    const [usernameElement,
        emailElement,
        passwordElement,
        repeatedPasswordElement,
        isCompanyElement,
        companyNumberElement] = document.querySelectorAll('input');
    const companyInfoElement = document.querySelector('#companyInfo');
    const validDivElement = document.querySelector('#valid');
    const styleForValidElements = usernameElement.style;

    isCompanyElement.addEventListener('change', onIsCompanyChange);
    document.querySelector('#submit').addEventListener('click', onSubmit);

    function onIsCompanyChange(e) {
        companyInfoElement.style.display = e.target.checked ? 'block' : 'none';

        if (!e.target.checked) {
            companyNumberElement.style['border-color'] = '';
        }
    }

    function onSubmit(e) {
        e.preventDefault();

        const isValidUsername = validateUsername(usernameElement.value);
        const isValidEmail = validateEmail(emailElement.value);
        const areValidPasswords = validatePasswords(passwordElement.value, repeatedPasswordElement.value);
        const isValidCompanyNumber = validateCompanyNumber(companyNumberElement.value);
        const isValidInfoUserInfo = isValidUsername && isValidEmail && areValidPasswords;

        stylizeInputField(usernameElement, validateUsername(usernameElement.value));
        stylizeInputField(emailElement, validateEmail(emailElement.value));

        stylizeInputField(passwordElement, areValidPasswords);
        stylizeInputField(repeatedPasswordElement, areValidPasswords);

        if (isCompanyElement.checked) {
            stylizeInputField(companyNumberElement, validateCompanyNumber(companyNumberElement.value));
        }

        if (isValidInfoUserInfo && !isCompanyElement.checked) {
            validDivElement.style.display = 'block';
        } else if (isValidInfoUserInfo && isCompanyElement.checked && isValidCompanyNumber) {
            validDivElement.style.display = 'block';
        } else {
            validDivElement.style.display = 'none';
        }

        function stylizeInputField(inputField, isValid) {
            // inputField.style['border-color'] = isValid ? 'initial' : 'red';
            if (isValid) {
                // inputField.style['border-style'] = 'none';
                inputField.style['border-color'] = '';
            } else {
                // inputField.style['border-style'] = 'inset';
                // inputField.style.border = 'solid';
                inputField.style['border-color'] = 'red';
            }
            // inputField.style[''] = isValid ? 'border-color: initial' : 'border-color: red';
        }

        function validateUsername(username) {
            return /[a-zA-Z0-9]{3,20}/g.test(username);
        }

        function validateEmail(email) {
            // return /[a-z]+@[a-z]+[a-z.]+/g.test(email);
            // return /[\w]+@[\w]+[\w.]+/g.test(email);
            return /^.*@.*\..*$/g.test(email);
        }

        function validatePasswords(password, repeatedPassword) {
            const isValidPassword = /[\w]{5,15}/g.test(password);
            const isValidRepeatedPassword = /[a-zA-Z-0-9_]{5,15}/g.test(repeatedPassword);

            if (isValidPassword && isValidRepeatedPassword && password === repeatedPassword) {
                return true;
            } else {
                return false;
            }
        }

        function validateCompanyNumber(companyNumberInput) {
            const companyNumber = Number(companyNumberInput);

            if (companyNumber >= 1000 && companyNumber <= 9999) {
                return true;
            } else {
                return false;
            }
        }
    }
}