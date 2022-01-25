const picture = document.querySelector('.svg-picture');
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu__icon');
const menuColors = document.querySelector('.menu__colors');
const selectedClrTile = document.querySelector('.selected__clr');

// console.log(menuColors.clientHeight);

// const activateMenu = function() {

//     menu.style.transform = !menuIcon.classList.contains('menu__icon--active') ? 'translateY(0)' : `translateY(${menuColors.clientHeight}px)`;
//     menuIcon.classList.toggle('menu__icon--active');
// }

// menuIcon.addEventListener('click', activateMenu);

// SLIDE UP MENU

if (screen.width < 1000) {
    
    menu.style.transform = `translateY(${menuColors.clientHeight}px)`;

    const touchStart = function() {
        return function(ev) {
            isDragging = true;
            startPosition = ev.touches[0].clientY;
        }
    };
    
    const touchEnd = function() {
    
        return function(ev) {
            isDragging = false;
            nextPosition = ev.changedTouches[0].clientY;
    
            if (nextPosition < startPosition) {
                menu.style.transform = 'translateY(0)';
                menuIcon.classList.add('menu__icon--active');
            } else {
                menu.style.transform = `translateY(${menuColors.clientHeight}px)`;
                menuIcon.classList.remove('menu__icon--active');
            };
        };
    };
    
    const touchMove = function() {
    
        return function(ev) {
    
            curPosition = ev.touches[0].clientY;
    
            if (isDragging && curPosition > startPosition) {
    
                menu.style.transform = `translateY(${startPosition++}px)`;
            } else if (isDragging && curPosition < startPosition) {
                menu.style.transform = `translateY(${-curPosition}px)`;
            }
        };
    };
    
    let isDragging = false,
        startPosition,
        curPosition,
        nextPosition;
    
    menu.addEventListener('touchstart', touchStart());
    menu.addEventListener('touchend', touchEnd());
    menu.addEventListener('touchmove', touchMove());
} else {
    menu.style.height = `${menuColors.clientHeight}px`;
}
// else {
//     menu.style.transform = `translateY(0)`;
//     menu.style.height = `${menuColors.clientHeight}px`;
// }

// COLORS

const blue = 'blue-clr';
const lightBlue = 'light-blue-clr';
const sand = 'sand-clr';
const lightSand = 'light-sand-clr';
const red = 'red-clr';
const lightRed = 'light-red-clr';
const green = 'green-clr';
const lightGreen = 'light-green-clr';
const magenta = 'magenta-clr';
const lightMagenta = 'light-magenta-clr';
const white = 'white-clr';
const black = 'black-clr';

const colors = [blue, lightBlue, sand, lightSand, red, lightRed, green, lightGreen, magenta, lightMagenta, white, black];

// COLORS SELECT TILES

colors.forEach(function(clr) {

    const selectTile = `<div class="colors__select colors__select--${clr}" style="background: var(--${clr})"></div>`;
    menuColors.insertAdjacentHTML('beforeend', selectTile);
});

// SELECT COLOR

let colorSelected;

menuColors.addEventListener('click', function(ev) {

    const clickedClr = ev.target.style.background;
    console.log(clickedClr);
    menu.style.transform = 'translateY(0)';
    !menuIcon.classList.contains('menu__icon--active') ? menuIcon.classList = 'menu__icon menu__icon--active' : menuIcon.classList = 'menu__icon';

    selectedClrTile.style.background = clickedClr;
    colorSelected = clickedClr;
});

// COLOR UP PATH

picture.addEventListener('click', function(ev) {

    const clicked = ev.target;
    clicked.style.fill = colorSelected;
});


