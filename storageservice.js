//storageservice.js 
//This will store the files in the browser, using indexedDB as this can handle more files, and is more secure.

var FILES_KEY = "cloudvault_files";
var FOLDERS_KEY = "cloudvault_folders";

function saveFiles(filesArray) {
    localStorage.setItem(FILES_KEY, JSON.stringify(filesArray));
}

function loadFiles() {
    var stored = localStorage.getItem(FILES_KEY);
    if (stored === null) {return [];
}
    return JSON.parse(stored);
}

function saveFolders(foldersArray) { 
    localStorage.setItem(FOLDERS_KEY, JSON.stringify(foldersArray));
}

function loadFolders() {
    var stored = localStorage.getItem(FOLDERS_KEY);
    if (stored === null) {
         return [];
    }
    return JSON.parse(stored);
}

function deleteFileById(id) {
    var files = loadFiles();
    var updated = files.filter(function(f) {
        return f.id !== id;
    });
    saveFiles(updated);
}

function getTotalSize() {
    var files = loadFiles();
    var total = 0;
    for (var i = 0; i < files.length; i++) {
        total += files[i].size;
    }
    return total;
}

    