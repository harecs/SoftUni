function attachGradientEvents() {
    const resultEle = document.querySelector('#result');

    document.querySelector('#gradient').addEventListener('mousemove', (e) => {
        resultEle.textContent = Math.trunc(e.offsetX / e.target.clientWidth * 100) + '%';
    });
}