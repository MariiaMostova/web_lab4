let main = document.getElementById('main');

function verifyInput(descriptionField) {

    if (descriptionField.value.trim() === ''){
        return false;
    }
    else{
        return true;
    }
}

function addNewAppeal() {

    let body = document.getElementById('body');
    let appeals = document.getElementById('appeals');
    let divNew = document.createElement("div");
    let fansDiv = document.createElement("div");
    let cardDiv = document.createElement("div");
    let description = document.getElementById('description');
    let hr = document.createElement('hr');
    let container = document.createElement('div');

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
    if (verifyInput(description)){
        p4.appendChild(document.createTextNode(description.value));
    }
    else {
        alert('Print appeal please.');
    }

    cardDiv.appendChild(p4);

    divNew.appendChild(fansDiv);
    divNew.appendChild(cardDiv);

    container.appendChild(hr);
    container.appendChild(divNew);

    appeals.appendChild(container);

    container.className = 'container';
    divNew.className = 'row';
    fansDiv.className = 'card col-2';
    cardDiv.className = 'card col-8';
    hr.className = 'row'

    alert('All works :)');
}