function createCardObject(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cardSuitMapper = {
        'S': '\u2660',
        'C': '\u2663',
        'H': '\u2665',
        'D': '\u2666'
    };

    const isValidFace = validFaces.includes(face);
    const isValidSuit = cardSuitMapper.hasOwnProperty(suit);

    if (isValidFace && isValidSuit) {
        return {
            face,
            suit,
            toString: function () {
                return `${this.face}${cardSuitMapper[this.suit]}`
            }
        }
    } else {
        throw new Error('Error');
    }
}