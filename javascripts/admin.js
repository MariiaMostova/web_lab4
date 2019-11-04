const realFile = document.getElementById("real_file");
const customBtn = document.getElementById("custom_button");
const customImg = document.getElementById("add_img");

customBtn.addEventListener('click', function () {
    realFile.click();
});

realFile.addEventListener('change', function () {
    if (realFile) {
        customImg.src = URL.createObjectURL(this.files[0]);
    }
});


function verifyInput() {
    let titleField = document.getElementById('news_title');
    let bodyField = document.getElementById('news_body');

    if (titleField.value.trim() === ''){
       return false;
    }
    else if (bodyField.value.trim() === '') {
        return false;
    }
     else{
         return true;
    }
}

function new_news() {
    if (!verifyInput()){
        alert('Edit please :)');
    }
    if (customImg.src === '../images/picture.png'){
        alert('Image is not added :)');
    }
    else {
        alert('News is sent :)');
    }

}