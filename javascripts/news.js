news_div = document.createElement('div');
localStorage = window.localStorage;
main = document.getElementById('main');
title = localStorage.getItem('news_title');

function getFromLocalStorage(){
    news_div.innerHTML=`
     <div class=" col-lg-4 col-md-6 col-sm-12">
        <div class="card embed-responsive-item">
            <img id="image" src=${localStorage.getItem('add_img')} alt="">
                <h6>${localStorage.getItem('news_title')}</h6>
                <p>${localStorage.getItem('news_body')}</p>
        </div>
    </div>`;
    main.appendChild(news_div);
}

window.onload = function(){
    document.getElementById("image").src = localStorage.getItem('add_img');
};

function isOnline() {
    return window.navigator.onLine;
}

if (isOnline()){
    if(title.value !== ''){
        getFromLocalStorage();
    }
}