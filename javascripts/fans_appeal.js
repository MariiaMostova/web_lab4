main = document.getElementById('main');
body = document.getElementById('body');
appeals = document.getElementById('appeals');
container = document.createElement('div');
description = document.getElementById('description');
localStorage = window.localStorage;

function verifyInput(descriptionField) {
    return descriptionField.value.trim() !== '';
}

function addNewAppeal() {

    let divNew = document.createElement("div");
    let fansDiv = document.createElement("div");
    let cardDiv = document.createElement("div");
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

        localStorage.setItem('p1', p1.innerText);
        localStorage.setItem('p2', p2.innerText);
        localStorage.setItem('p3', p3.innerText);
        localStorage.setItem('description', description.value);
        description.value = '';

    }

}

function getFromLocalStorage() {
    container.innerHTML = `        
        <div class="container">
            <hr class="row">
            <div class="row">
                <div class="fan_time card col-2">
                    <p class="card-text">${localStorage.getItem('p1')}</p>
                    <p class="card-text">${localStorage.getItem('p2')}</p>
                    <p class="card-text">${localStorage.getItem('p3')}</p>
                </div>
                <div class="card col-8">
                    <p class="card-text">${localStorage.getItem('description')}</p>
                </div>
            </div>
        </div>
    </div>`;
    appeals.appendChild(container);
}


function isOnline() {
    return window.navigator.onLine;
}

if (description.value != null){
    if (isOnline()){
        getFromLocalStorage();
    }
}