const board = document.querySelector('#board');
const colors = ['#C34271', '#F070A1', '#16FFBD', '#12C998', '#439F76'];
const CIRCLES_NUMBER = 600;

for (let i = 0; i < CIRCLES_NUMBER; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    circle.addEventListener('mouseover', () => {
        setColor(circle);
    })

    circle.addEventListener('mouseleave', () => {
        removeColor(circle);
    })

    board.append(circle);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}