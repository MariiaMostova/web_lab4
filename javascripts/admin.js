realFile = document.getElementById("real_file");
customBtn = document.getElementById("custom_button");
customImg = document.getElementById("add_img");
titleField = document.getElementById('news_title');
bodyField = document.getElementById('news_body');

customBtn.addEventListener('click', function () {
    realFile.click();
});

realFile.addEventListener('change', function () {
    if (realFile) {
        customImg.src = URL.createObjectURL(this.files[0]);
    }
});

function verifyInput(titleField, bodyField) {
    if (titleField.value.trim() === ''){
        return false;
    }
    else return bodyField.value.trim() !== '';
}

function new_news() {
    if (!verifyInput(titleField,bodyField)){
        alert('Edit please :)');
    }
    if (customImg.src === '../images/picture.png'){
        alert('Image is not added :)');
    }
    else {
        alert('News is sent :)');
        addToLocalStorage();
    }

}

function addToLocalStorage() {
    let len = localStorage.length;
    let i = len/3;
    localStorage.setItem('news_title'  + i, titleField.value);
    localStorage.setItem('news_body'  + i, bodyField.value);
    localStorage.setItem('add_img'  + i, getBase64Image(customImg));
}

function getBase64Image(img) {
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);
    let dataURL = canvas.toDataURL("image/png");
    return dataURL
}
