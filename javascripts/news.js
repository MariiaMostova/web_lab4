news_div = document.createElement('div');
localStorage = window.localStorage;
main = document.getElementById('main');
title = localStorage.getItem('news_title');

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

function isOnline() {
    return window.navigator.onLine;
}


let len = localStorage.length;
for (let i=0; i<(len/3 - 1); i++) {
    getFromLocalStorage(i);
}
if (isOnline() && len > 0){
    let len = localStorage.length;
    getFromLocalStorage(len/3 - 1);
}

// if (isOnline()){
//     len = localStorage.length;
//     for (let i=0; i<len/3; i++) {
//         getFromLocalStorage(i);
//     }
// }