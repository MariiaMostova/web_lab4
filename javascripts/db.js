let useLocalStorage = false;
let db;

function getInfo(formName) {
    let openRequest = indexedDB.open(formName, 4);
    openRequest.onupgradeneeded = function (event) {
        let db = event.target.result;
        console.log("Upgrading...");
        if (!db.objectStoreNames.contains(formName)) {
            let objectStore = db.createObjectStore(formName, {valuePath: 'id', autoIncrement: true});
            objectStore.createIndex("id", "id", {unique: true});
        }
    };

    openRequest.onsuccess = function (event) {
    db = event.target.result;
    if (db != null && window.navigator.onLine) {
        let tx = db.transaction(formName, 'readwrite');
        let objectStore = tx.objectStore(formName);
        objectStore.openCursor().onsuccess = function (evt) {
            let cursor = evt.target.result;
            if (cursor) {
                let value = cursor.value;
                if (formName === 'news') {
                    getNewsFromIndexedDB(value);
                } else {
                    getFromIndexedDB(value);
                }
                cursor.continue();
            }
            return tx.complete;
        }
    }
    }
}

function openIndexedDB(formName, item) {

    let openRequest = indexedDB.open(formName, 4);
    openRequest.onupgradeneeded = function (event) {
        let db = event.target.result;
        console.log("Upgrading...");
        if (!db.objectStoreNames.contains(formName)) {
            let objectStore = db.createObjectStore(formName, {valuePath: 'id', autoIncrement: true});
            objectStore.createIndex("id", "id", {unique: true});
        }
    };

    openRequest.onsuccess = function (event) {
        console.log("Success!");
        db = event.target.result;
        let tx = db.transaction(formName, "readwrite");
        let objectStore = tx.objectStore(formName);
        if ( item == null && db != null && window.navigator.onLine){
            objectStore.openCursor().onsuccess = function(evt){
                let cursor = evt.target.result;
                if (cursor) {
                    let value = cursor.value;
                    if (formName === 'news'){
                        getNewsFromIndexedDB(value);
                    }else {
                        getFromIndexedDB(value);
                    }
                    cursor.continue();
                }
            }
        }
        if (item != null) {
            objectStore.add(item);
        }
        return tx.complete;
    };

    openRequest.onerror = function (event) {
        console.log(event);
    }

}

