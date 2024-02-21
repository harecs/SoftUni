function joinArray(array: string[], delimiter: string): void {
    console.log(array.join(delimiter));
}

joinArray(['One', 'Two', 'Three', 'Four', 'Five'], '-');
joinArray(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');