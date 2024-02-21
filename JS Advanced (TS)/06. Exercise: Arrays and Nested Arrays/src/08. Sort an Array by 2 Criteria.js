function sortByTwoCriteria(array) {
    array.sort((a, b) => {
        if (a.length - b.length > 0) {
            return 1;
        } else if (a.length - b.length < 0) {
            return -1;
        }

        return a.localeCompare(b);
    });

    console.log(array.join('\n'));
}