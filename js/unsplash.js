const bgImage = document.querySelector(".bgImage");

const ACCESS_KEY = "7773786ae57711d0312f9e3a9322151e78eaabe16f311ed46ea8953c141bfcd8";

const IMG_NUMBER = 10;

function getImage(number) {
    fetch(
        `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`
    ).then(function(response) {
        return response.json();
    }).then(function(json) {
        const url= json[`${number}`].urls.regular;
        bgImage.style.background = `url('${url}') no-repeat center center / cover`;
    })
}

function getRandom() {
    const number =  Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNum = getRandom();
    getImage(randomNum);
}

init();