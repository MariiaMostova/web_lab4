news_div = document.createElement('div');
localStorage = window.localStorage;
main = document.getElementById('main');
title = localStorage.getItem('news_title');
document.addEventListener("DOMContentLoaded", getInfo('news'));

function isOnline() {
    return window.navigator.onLine;
}

function init(){
    data_context.getAll(function (result){
        if (useLocalStorage) {
            let len = localStorage.length;
            for (let i = 0; i < (len / 3 - 1); i++) {
                getFromLocalStorage(i);
            }
            if (isOnline() && len > 0) {
                let len = localStorage.length;
                getFromLocalStorage(len / 3 - 1);
            }
        }
    });
}
function getFromLocalStorage(i){
    news_div.innerHTML=`
     <div class=" col-lg-4 col-md-6 col-sm-12">
        <div class="card embed-responsive-item">
            <img id="image" src=${localStorage.getItem('add_img' + i)} alt="">
                <h6>${localStorage.getItem('news_title'  + i)}</h6>
                <p>${localStorage.getItem('news_body' + i)}</p>
        </div>
    </div>`;
    main.appendChild(news_div);
}

function getNewsFromIndexedDB(elem) {
    news_div.innerHTML=`
     <div class=" col-lg-4 col-md-6 col-sm-12">
        <div class="card embed-responsive-item">
            <img id="image" src=${elem.image} alt="">
                <h6>${elem.title}</h6>
                <p>${elem.body}</p>
        </div>
    </div>`;
    main.appendChild(news_div);
}

let xhr_news = new XMLHttpRequest();
xhr_news.open('GET', 'http://localhost:8000/news');
xhr_news.setRequestHeader('Content-Type','application/json');
xhr_news.send();
xhr_news.onload = () => {
    let elements = JSON.parse(xhr_news.response);
    for (let elem of elements) {
        news_div.innerHTML = `
            <div class=" col-lg-4 col-md-6 col-sm-12">
        <div class="card embed-responsive-item">
        <img id="image" src=${elem.image} alt="">
        <h6>${elem.title}</h6>
        <p>${elem.body}</p>
        </div>
    </div>`;
        main.appendChild(news_div);
    }
};