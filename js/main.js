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

/*scroll*/

let scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#NavBar'
});

/*Animate on Scroll Start*/
AOS.init({
    duration: 1000,
})
/*Animate on Scroll End*/

/*Portfolio setting Start*/
$('.work-type-list li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).text() === 'Apps' || $(this).text() === 'تطبيقات') {
        $('#gallery-container div img').each( function (i) {
            let attr = $(this).parent().attr('data-work');
            if (typeof attr !== 'undefined' && attr !== false) {
                if (attr === 'Apps' || attr === 'تطبيقات') {
                    $(this).parent().css('transform', 'scale(1.05)')
                    $(this).parent().css('opacity', '1')
                } else {
                    $(this).parent().css('opacity', '.1')
                }
            }
        });
    } else if ($(this).text() === 'Development' || $(this).text() === 'تطوير') {
        $('#gallery-container div img').each( function (i) {
            let attr = $(this).parent().attr('data-work');
            if (typeof attr !== 'undefined' && attr !== false) {
                if (attr === 'Development' || attr === 'تطوير') {
                    $(this).parent().css('transform', 'scale(1.05)')
                    $(this).parent().css('opacity', '1')
                } else {
                    $(this).parent().css('opacity', '.1')
                }
            }
        });
    } else if ($(this).text() === 'Design' || $(this).text() === 'تصميم') {
        $('#gallery-container div img').each( function (i) {
            let attr = $(this).parent().attr('data-work');
            if (typeof attr !== 'undefined' && attr !== false) {
                if (attr === 'Design' || attr === 'تصميم') {
                    $(this).parent().css('transform', 'scale(1.05)')
                    $(this).parent().css('opacity', '1')
                } else {
                    $(this).parent().css('opacity', '.1')
                }
            }
        });
    } else if ($(this).text() === 'Photography' || $(this).text() === 'تصوير') {
        $('#gallery-container div img').each( function (i) {
            let attr = $(this).parent().attr('data-work');
            if (typeof attr !== 'undefined' && attr !== false) {
                if (attr === 'Photography' || attr === 'تصوير') {
                    $(this).parent().css('transform', 'scale(1.05)')
                    $(this).parent().css('opacity', '1')
                } else {
                    $(this).parent().css('opacity', '.1')
                }
            }
        });
    } else {
        $('#gallery-container div img').each( function (i) {
            let attr = $(this).parent().attr('data-work');
            if (typeof attr !== 'undefined' && attr !== false) {
                $(this).parent().css('transform', 'scale(1)')
                $(this).parent().css('opacity', '1')
            }
        });
    }
});
/*Portfolio setting Start*/

$('#Whatsapp').attr('href', 'https://api.whatsapp.com/send?phone=0000000000&amp;text=Hi, I got this phone number from you website');


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
    let value = ($(this).attr('data-value') / 100);
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

