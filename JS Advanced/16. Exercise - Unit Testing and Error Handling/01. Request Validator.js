function requestValidator(requestObj) {
    const validate = {
        method: validateMethod,
        uri: validateUri,
        version: validateVersion,
        message: validateMessage
    };

    const properties = ['Method', 'URI', 'Version', 'Message'];

    properties.forEach(property => {
        try {
            const propertyLowerCase = property.toLowerCase();

            if (!requestObj.hasOwnProperty(propertyLowerCase)) {
                throw new Error(property);
            }

            validate[propertyLowerCase](requestObj[propertyLowerCase]);
        } catch (error) {
            throw new Error(`Invalid request header: Invalid ${error.message}`);
        }
    });

    return requestObj;

    function validateMethod(method) {
        const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];

        if (!validMethods.includes(method)) {
            throw new Error('Method');
        }
    }

    function validateUri(uri) {
        const uriRegExp = new RegExp(/[a-zA-Z0-9.]+/, 'g');
        const isAsterisk = uri === '*';
        const execResult = uri.match(uriRegExp);
        const isValidUri = execResult[0] === uri;

        if (isAsterisk) return;

        if (!uri || !isValidUri) {
            throw new Error('URI');
        }
    }

    function validateVersion(version) {
        const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

        if (!validVersions.includes(version)) {
            throw new Error('Version');
        }
    }

    function validateMessage(message) {
        const messageRegExp = new RegExp(/[\<\>\\\&\'\"]/, 'g');
        const matches = message.match(messageRegExp);

        if (matches) {
            throw new Error('Message');
        }
    }
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));

console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));