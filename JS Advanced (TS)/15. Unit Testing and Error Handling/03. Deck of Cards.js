function printDeckOfCards(cards) {
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

    let deckOfCardsString = '';

    try {
        for (const card of cards) {
            if (card.length < 2 || card.length > 3) {
                throw new Error(card);
            }

            const cardFace = card.substring(0, card.length - 1);
            const cardSuit = card.substring(card.length - 1);

            try {
                const cardObj = createCardObject(cardFace, cardSuit);
                deckOfCardsString += cardObj.toString() + ' ';
            } catch (error) {
                throw new Error(card);
            }
        }

        console.log(deckOfCardsString.trim());
    } catch (error) {
        return console.log(`Invalid card: ${error.message}`);
    }
}