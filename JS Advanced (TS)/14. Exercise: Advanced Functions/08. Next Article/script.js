function getArticleGenerator(inputArray) {
    const articles = inputArray.slice();

    return function () {
        if (articles.length > 0) {
            const articleElement = document.createElement('article');
            articleElement.textContent = articles.shift();
            document.querySelector('#content').appendChild(articleElement);
        }
    }
}