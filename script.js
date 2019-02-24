var arrowRight = document.getElementById('arrow-right');
var arrowLeft = document.getElementById('arrow-left');

var rightCar = document.querySelector('.right');
var leftCar = document.querySelector('.left');

var car1 = document.getElementById('c1');
var car2 = document.getElementById('c2');
var car3 = document.getElementById('c3');

var cars = [car1, car2, car3];
console.log(rightCar);
arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);

rightCar.addEventListener('click', nextSlide);
leftCar.addEventListener('click', prevSlide);


function prevSlide() {
    
    for (car of cars) {
        if (car.className === 'show') {
            car.className = 'right';
        } else if (car.className === 'left') {
            car.className = 'show';
        } else {
            car.className = 'left';
        }
    }
}
    
function nextSlide() {
    setTimeout(function() {
        for (car of cars) {
            if (car.className === 'show') {
                car.className = 'left';
            } else if (car.className === 'right') {
                car.className = 'show';
            }else {
                car.className = 'right';
            }
        }
    });
    
}