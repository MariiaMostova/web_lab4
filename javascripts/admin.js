// function photo_from_pc() {
//     let img = document.getElementById()
// }

function verifyInput() {
    var titleField = document.getElementById('news_title');
    var bodyField = document.getElementById('news_body');

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
    if (verifyInput()){
        alert('News is sent :)');
    }
    // if (!photo_from_pc()){
    //     alert('Image is not added :)');
    // }
    else {
        alert('Edit please :)');
    }

};