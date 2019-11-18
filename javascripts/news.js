localStorage = window.localStorage;
main = document.getElementById('main');
title = localStorage.getItem('news_title');

function getFromLocalStorage(i){
    let news_div = document.createElement('div');
    news_div.innerHTML=`
     <div class=" col-lg-4 col-md-6 col-sm-12">
        <div class="card embed-responsive-item">
            <img id="image" src=${localStorage.getItem('add_img' + i)} width="100%" alt="">
                <h6>${localStorage.getItem('news_title'  + i)}</h6>
                <p>${localStorage.getItem('news_body' + i)}</p>
        </div>
     </div>`;
    main.appendChild(news_div);
}

function isOnline() {
    return window.navigator.onLine;
}

if (isOnline){
    let len = localStorage.length;
    for (let i = 0; i < (len/3); i++) {
        getFromLocalStorage(i);
    }
}
