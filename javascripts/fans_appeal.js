body = document.getElementById('body');
appeals = document.getElementById('appeals');
description = document.getElementById('description');
localStorage = window.localStorage;

function verifyInput(descriptionField) {
    return descriptionField.value.trim() !== '';
}

function addNewAppeal() {

    let divNew = document.createElement("div");
    let fansDiv = document.createElement("div");
    let cardDiv = document.createElement("div");
    let container = document.createElement('div');
    let hr = document.createElement('hr');

    fansDiv.setAttribute("class",'fan_time class col-2');

    let p1 = document.createElement('p');
    p1.appendChild(document.createTextNode("User"));

    let p2 = document.createElement('p');
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    p2.appendChild(document.createTextNode(dd + '.' + mm + '.' + yyyy));

    let p3 = document.createElement('p');
    let hh = today.getHours();
    let min = today.getMinutes();
    p3.appendChild(document.createTextNode(hh + ":" + min));

    fansDiv.appendChild(p1);
    fansDiv.appendChild(p2);
    fansDiv.appendChild(p3);

    let p4 = document.createElement('p');

    if (!verifyInput(description)) {
        alert('Print appeal please.');
        stop();
    } else {
        p4.appendChild(document.createTextNode(description.value));
        cardDiv.appendChild(p4);

        divNew.appendChild(fansDiv);
        divNew.appendChild(cardDiv);

        container.appendChild(hr);
        container.appendChild(divNew);

        container.className = 'container';
        divNew.className = 'row';
        fansDiv.className = 'card col-2';
        cardDiv.className = 'card col-8';
        hr.className = 'row';

        if (isOnline()){
            appeals.appendChild(container);
        }
        addToLocalStorage(p1, p2, p3, description);
        description.value = '';
    }

}

function addToLocalStorage(p1, p2, p3, description) {
    let len = localStorage.length;
    let i = len / 4;
    localStorage.setItem('user' + i, p1.innerText);
    localStorage.setItem('date' + i, p2.innerText);
    localStorage.setItem('time' + i, p3.innerText);
    localStorage.setItem('description' + i, description.value);
}

function getFromLocalStorage(i) {
    let container = document.createElement('div');
    container.innerHTML = `        
        <div class="container">
            <hr class="row">
            <div class="row">
                <div class="fan_time card col-2">
                    <p class="card-text">${localStorage.getItem('user' + i)}</p>
                    <p class="card-text">${localStorage.getItem('date' + i)}</p>
                    <p class="card-text">${localStorage.getItem('time' + i)}</p>
                </div>
                <div class="card col-8">
                    <p class="card-text">${localStorage.getItem('description' + i)}</p>
                </div>
            </div>
        </div>
    </div>`;
    appeals.appendChild(container);
}


function isOnline() {
    return window.navigator.onLine;
}

len = localStorage.length;
for (let i=0; i<(len/4 - 1); i++) {
    getFromLocalStorage(i);
}
if (isOnline() && len > 0){
    getFromLocalStorage(len/4 - 1);
}