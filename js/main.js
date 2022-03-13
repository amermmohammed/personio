/*Patterns Toggle*/
document.getElementById('theme-select').addEventListener('change', function() {
    setTheme(this.value);
    $(function () {
        if (localStorage.getItem("theme") === "light1" || localStorage.getItem("theme") === "light2") {
            $('.light-logo').addClass('d-none');
            $('.dark-logo').removeClass('d-none');
        } else {
            $('.light-logo').removeClass('d-none');
            $('.dark-logo').addClass('d-none');
        }
    });
});
const setTheme = (theme) => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
}
const getTheme = () => {
    const theme = localStorage.getItem('theme');
    theme && setTheme(theme);
}
getTheme();
/*Patterns Toggle End*/

/*Animate on Scroll Start*/
AOS.init({
    duration: 1000,
})
/*Animate on Scroll End*/

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
/*Skills Progress bars Settings End*/

/*Footer copy right content*/
$("#copy-right").text("Made with ❤ by Amer " + (new Date).getFullYear());
$("#copy-right-ar").text("صٌنع بـ❤ بواسطة عامر " + (new Date).getFullYear());

