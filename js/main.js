/*Load more and load less function Start*/
let countUp = 0;
let firstRow = document.querySelectorAll('div.hiddenGallery1');
let secondRow = document.querySelectorAll('div.hiddenGallery2');
let thirdRow = document.querySelectorAll('div.hiddenGallery3');
let loadMoreButton = document.getElementById('loadMore');
let loadLessButton = document.getElementById('loadLess');

function loadMore() {
    for (let i = 0; i < firstRow.length; i++){
        firstRow[i].classList.replace('hidden', 'displayed');
    }
    countUp++;
    if (countUp === 2) {
        for (let i = 0; i < secondRow.length; i++){
            secondRow[i].classList.replace('hidden', 'displayed');
        }
    }
    if (countUp === 3) {
        loadMoreButton.classList.replace('d-flex', 'd-none');
        for (let i = 0; i < thirdRow.length; i++){
            thirdRow[i].classList.replace('hidden', 'displayed');
        }
        loadLessButton.classList.replace('d-none', 'd-flex');
    }
}

function loadLess() {
    for (let i = 0; i < thirdRow.length; i++){
        firstRow[i].classList.replace('displayed', 'hidden');
        secondRow[i].classList.replace('displayed', 'hidden');
        thirdRow[i].classList.replace('displayed', 'hidden');
    }
    loadMoreButton.classList.replace('d-none', 'd-flex');
    loadLessButton.classList.replace('d-flex', 'd-none');
    countUp = 0;
}
/*Load more and load less function End*/

/*Skills Progress bars Settings Start*/
let skillList = ['Html', 'Css', 'js', 'Saas', 'NodeJS', 'PHP'];
let barColorSource = $('.progress-bar-color-control');
let startColor = barColorSource.css('background-color');
let endColor = barColorSource.css('color');

$('.skill').each(function(i) {
    let circle = new ProgressBar.Circle(this, {
        color: startColor,
        easing: 'bounce',
        strokeWidth: 8,
        duration: 8000,
        text: {
            value: '0'
        }
    });
    let value = ($(this).attr('value') / 100);
    circle.text.style.fontSize = '2rem';
    $(window).scroll(function() {
        if ($('#skills').is(':visible')) {
            circle.animate(value, {
                from: {
                    color: startColor
                },
                to: {
                    color: endColor
                },
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.setText((circle.value() * 100).toFixed(0) + ' %' + `<div class="skill-des text-center text-uppercase fs-4">${skillList[i]}</div>`);
                }
            });
            AOS.init({
                duration: 2000,
            })
        }
    });
});
/*Skills Progress bars Settings End*/
