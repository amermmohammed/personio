/*Patterns Toggle*/
function colorOption1() {
    $(":root").css({
        '--personio-primary-dark': '#0b132b',
        '--personio-secondary-dark': '#1c2541',
        '--personio-primary-light': '#6fffe9',
        '--personio-outline': '#fb8f67',
        '--personio-darker-outline-transparent': 'rgba(251,143,103,0.1)',
        '--personio-gray': 'rgba(73,71,71,0.3)'
    });
    $('.light-logo').removeClass('d-none');
    $('.dark-logo').addClass('d-none');
    $('.features .container').css('background-image', 'url("../imgs/bg1b.svg")');
    $('.my-skills .container').css('background-image', 'url("../imgs/bg1b.svg")');

}
function colorOption2() {
    $(":root").css({
        '--personio-primary-dark': '#000',
        '--personio-secondary-dark': '#000',
        '--personio-primary-light': '#c2c3c4',
        '--personio-outline': '#ae2012',
        '--personio-darker-outline-transparent': 'rgba(174,32,18,0.1)',
        '--personio-gray': 'rgba(73,71,71,0.3)'
    });
    $('.light-logo').removeClass('d-none');
    $('.dark-logo').addClass('d-none');
    $('.features .container').css('background-image', 'url("../imgs/bg1c.svg")');
    $('.my-skills .container').css('background-image', 'url("../imgs/bg1c.svg")');

}
function colorOption3() {
    $(":root").css({
        '--personio-primary-dark': '#242423',
        '--personio-secondary-dark': '#333533',
        '--personio-primary-light': '#cfdbd5',
        '--personio-outline': '#f5cb5c',
        '--personio-darker-outline-transparent': 'rgba(254,109,115,0.1)',
        '--personio-gray': '#494747'
    });
    $('.light-logo').removeClass('d-none');
    $('.dark-logo').addClass('d-none');
    $('.features .container').css('background-image', 'url("../imgs/bg1a.svg")');
    $('.my-skills .container').css('background-image', 'url("../imgs/bg1a.svg")');
}
function colorOption4() {
    $(":root").css({
        '--personio-primary-dark': '#2b2a33',
        '--personio-secondary-dark': '#42414d',
        '--personio-primary-light': '#fff',
        '--personio-outline': '#ECAA61',
        '--personio-darker-outline-transparent': 'rgba(251,143,103,0.1)',
        '--personio-gray': '#494747'
    });
    $('.light-logo').removeClass('d-none');
    $('.dark-logo').addClass('d-none');
    $('.features .container').css('background-image', 'url("../imgs/bg1a.svg")');
    $('.my-skills .container').css('background-image', 'url("../imgs/bg1a.svg")');

}
function colorOption5() {
    $(":root").css({
        '--personio-primary-dark': '#f4f1de',
        '--personio-secondary-dark': '#d6ccc2',
        '--personio-primary-light': '#023047',
        '--personio-outline': '#f00',
        '--personio-darker-outline-transparent': 'rgba(255,0,0,0.1)',
        '--personio-gray': 'rgba(197, 196, 196, 0.3)'
    });
    $('.light-logo').addClass('d-none');
    $('.dark-logo').removeClass('d-none');
    $('.features .container').css('background-image', 'url("../imgs/bg1c.svg")');
    $('.my-skills .container').css('background-image', 'url("../imgs/bg1c.svg")');
}
function colorOption6() {
    $(":root").css({
        '--personio-primary-dark': '#fff',
        '--personio-secondary-dark': '#adb5bd',
        '--personio-primary-light': '#000',
        '--personio-outline': '#c22568',
        '--personio-darker-outline-transparent': 'rgba(251,143,103,0.1)',
        '--personio-gray': '#494747'
    });
    $('.light-logo').addClass('d-none');
    $('.dark-logo').removeClass('d-none');
    $('.features .container').css('background-image', 'url("../imgs/bg1d.svg")');
    $('.my-skills .container').css('background-image', 'url("../imgs/bg1d.svg")');
}
function colorOption7() {
    $(":root").css({
        '--personio-primary-dark': '#fff',
        '--personio-secondary-dark': '#adb5bd',
        '--personio-primary-light': '#000',
        '--personio-outline': '#0d6efd',
        '--personio-darker-outline-transparent': 'rgba(251,143,103,0.1)',
        '--personio-gray': '#494747'
    });
    $('.light-logo').addClass('d-none');
    $('.dark-logo').removeClass('d-none');
    $('.features .container').css('background-image', 'url("../imgs/bg1d.svg")');
    $('.my-skills .container').css('background-image', 'url("../imgs/bg1d.svg")');
}
function colorOption8() {
    $(":root").css({
        '--personio-primary-dark': '#000000',
        '--personio-secondary-dark': '#14213D',
        '--personio-primary-light': '#FFFFFF',
        '--personio-outline': '#FCA311',
        '--personio-darker-outline-transparent': '#FCA3117F',
        '--personio-gray': '#C5C4C419'
    });
    $('.light-logo').removeClass('d-none');
    $('.dark-logo').addClass('d-none');
    $('.features .container').css('background-image', 'url("../imgs/bg1.svg")');
    $('.my-skills .container').css('background-image', 'url("../imgs/bg1.svg")');
}
/*Load more and load less function Start*/
let countUp = 0;
let firstRow = document.querySelectorAll('div.hiddenGallery1');
let secondRow = document.querySelectorAll('div.hiddenGallery2');
let thirdRow = document.querySelectorAll('div.hiddenGallery3');
let loadMoreButton = document.getElementById('loadMore');
let loadLessButton = document.getElementById('loadLess');

function loadMore() {
    for (let i = 0; i < firstRow.length; i++) {
        firstRow[i].classList.replace('hidden', 'displayed');
    }
    countUp++;
    if (countUp === 2) {
        for (let i = 0; i < secondRow.length; i++) {
            secondRow[i].classList.replace('hidden', 'displayed');
        }
    }
    if (countUp === 3) {
        loadMoreButton.classList.replace('d-flex', 'd-none');
        for (let i = 0; i < thirdRow.length; i++) {
            thirdRow[i].classList.replace('hidden', 'displayed');
        }
        loadLessButton.classList.replace('d-none', 'd-flex');
    }
}

function loadLess() {
    for (let i = 0; i < thirdRow.length; i++) {
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
let circleColor = $('.progress-bar-color-control').css('color');


$('.skill').each(function (i) {
    let circle = new ProgressBar.Circle(this, {
        color: circleColor,
        easing: 'bounce',
        strokeWidth: 8,
        duration: 4000,
        text: {
            value: '0'
        }
    });
    let value = ($(this).attr('value') / 100);
    $(window).scroll(function () {
        if ($('#skills').is(':visible')) {
            circle.animate(value, {
                from: {
                    color: circleColor
                },
                to: {
                    color: circleColor
                },
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.setText(`<span class="d-none d-md-block fs-3">` + (circle.value() * 100).toFixed(0) + ' %' + `</span><div class="skill-des text-center text-uppercase fs-5">${skillList[i]}</div>`);
                }
            });
        }
    });
});
AOS.init({
    duration: 1000,
})
/*Skills Progress bars Settings End*/

/*Footer copy right content*/
$("#copy-right").text("Made with ❤ by Amer " + (new Date).getFullYear());
$("#copy-right-ar").text("صٌنع بـ❤ بواسطة عامر " + (new Date).getFullYear());

