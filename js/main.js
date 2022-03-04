let countUp = 0;
let firstRow = document.querySelectorAll('div.hiddenGallery1');
let secondRow = document.querySelectorAll('div.hiddenGallery2');;
let thirdRow = document.querySelectorAll('div.hiddenGallery3');;
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

