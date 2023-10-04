function calculator() {
    return {
        firstNumElement: null,
        secondNumElement: null,
        resultElement: null,
        init: (firstNumSelector, secondNumSelector, resultSelector) => {

            this.firstNumElement = document.querySelector(firstNumSelector);
            this.secondNumElement = document.querySelector(secondNumSelector);
            this.resultElement = document.querySelector(resultSelector);
        },
        add: () => {
            this.resultElement.value = Number(this.firstNumElement.value) + Number(this.secondNumElement.value);
        },
        subtract: () => {
            this.resultElement.value = Number(this.firstNumElement.value) - Number(this.secondNumElement.value);
        }
    }
}