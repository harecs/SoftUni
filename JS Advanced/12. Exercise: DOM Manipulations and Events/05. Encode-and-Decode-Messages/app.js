function encodeAndDecodeMessages() {
    const buttonElements = document.querySelectorAll('button');
    const textAreaElements = document.querySelectorAll('textarea');

    buttonElements[0].addEventListener('click', onEncode);
    buttonElements[1].addEventListener('click', onDecode);

    function onEncode(e) {
        const message = textAreaElements[0].value;
        const encodedMessage = message.split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
            .join('');

        textAreaElements[0].value = '';
        textAreaElements[1].value = encodedMessage;
    }

    function onDecode(e) {
        const message = textAreaElements[1].value;
        const decodedMessage = message.split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) - 1))
            .join('');

        textAreaElements[1].value = decodedMessage;
    }
}