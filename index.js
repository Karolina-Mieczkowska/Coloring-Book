const picture = document.querySelector('.svg-picture');
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu__icon');
const menuColors = document.querySelector('.menu__colors');

picture.addEventListener('click', function(ev) {

    const clicked = ev.target;

    clicked.style.fill = 'pink';
});

// console.log(menuColors.clientHeight);

menu.style.transform = `translateY(${menuColors.clientHeight}px)`;

// const activateMenu = function() {

//     menu.style.transform = !menuIcon.classList.contains('menu__icon--active') ? 'translateY(0)' : `translateY(${menuColors.clientHeight}px)`;
//     menuIcon.classList.toggle('menu__icon--active');
// }

// menuIcon.addEventListener('click', activateMenu);

// SLIDE UP MENU

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
        console.log(`next ${nextPosition}`)

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
        console.log(`current ${curPosition}`);

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



