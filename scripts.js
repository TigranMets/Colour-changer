const red = document.querySelector('.red');
const cyan = document.querySelector('.cyan');
const orange = document.querySelector('.orange');
const violet = document.querySelector('.violet');
const pink = document.querySelector('.pink');

const center = document.querySelector('.center');

const getElementColor = (color) => {
    return window.getComputedStyle(color).backgroundColor;
}

console.log(getElementColor(cyan));

const magicColorChanger = (element, color) => {
    element.addEventListener('mouseenter', () => {
        center.style.background = color;
    });
}

magicColorChanger(red, getElementColor(red));
magicColorChanger(cyan, getElementColor(cyan));
magicColorChanger(orange, getElementColor(orange));
magicColorChanger(violet, getElementColor(violet));
magicColorChanger(pink, getElementColor(pink));