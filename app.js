// app.js is the main file connecting the HTML UI to the fileManager logic
// It uses the users actions and then updates the page accordingly

// import { loadFiles } from "./fileManager";

// fileManager.js import 



console.log("Cloud Vault JS");

window.onload= function() {
    renderFiles();
    renderFolders();
    updateStorageDisplay();
    setupButtons();
};

function setupButtons() {
    document.getElementById("uploadBtn").onclick = function() {
        document.getElementById("fileInput").click();
    };

    // File Input Change

    document.getElementById("fileInput").onchange = function(e) {
        handleFiles(e.target.files);

        e.target.value = "";
    };

    // Grid View
    document.getElementById("gridViewBtn").onclick = function() {
        currentView = "grid";
        renderFiles(document.getElementById("searchBox").value);
    };  
 // List View
    document.getElementById("listViewBtn").onclick = function() {
        currentView = "list";
        renderFiles(document.getElementById("searchBox").value);
    };

    // Search Box
    document.getElementById("searchBox").oninput = function(e) {
        renderFiles(e.target.value);
    };

    // New Folder Button
    document.getElementById("newFolderBtn").onclick = function() {
        document.getElementById("folderModal").classList.add("show");
        document.getElementById("folderNameInput").value = "";
        document.getElementById("folderNameInput").focus();
    };

    // Cancel Folder Creation
    document.getElementById("cancelFolderBtn").onclick = function() {
        document.getElementById("folderModal").classList.remove("show");
    };  

    // Create Folder inside Modal
    document.getElementById("createFolderBtn").onclick = function() {
        var name = document.getElementById("folderNameInput").value.trim();
        if (name === "") {
            alert("Folder name cannot be empty.");
            return;
        }   

        var folders = loadFolders();

        if (folders.includes(name)) {
            alert("A folder with this name already exists.");
            return;
        }

        folders.push(name);
        saveFolders(folders);
        renderFolders();
        document.getElementById("folderModal").classList.remove("show");
    };

    // Close modal when clicking outside of it
    document.getElementById("cancelFileBtn").onclick = function() {
        document.getElementById("fileModal").classList.remove("show");
        openFileId = null;
    };

    // Save file changes in modal
    document.getElementById("saveFileBtn").onclick = function() {
        if (openFileId === null) return;

        var category = document.getElementById("fileModalCategory").value;
        var tagsRaw = document.getElementById("fileModalTags").value.trim();

        var tags = [];
        if (tagsRaw !== "") {
            tags = tagsRaw.split(",").map(function(t) {
                return t.trim();
            });

            tags = tags.filter(function(t) {
                return t !== "";
            });
        }

        var files = loadFiles();
        for (var i = 0; i < files.length; i++) {
            if (files[i].id === openFileId) {
                files[i].category = category;
                files[i].tags = tags;
                files[i].folder = document.getElementById("fileModalFolder").value;
                saveFiles(files);
                break;
            }
        }


        document.getElementById("fileModal").classList.remove("show");
        openFileId = null;
        renderFiles(document.getElementById("searchBox").value);
    };

    document.getElementById("deleteFileBtn").onclick = function() {
        if (openFileId === null) return;

        var confirmed = confirm("Are you sure you want to delete this file?");
        if (!confirmed) return;

        deleteFileById(openFileId);
        document.getElementById("fileModal").classList.remove("show");
        openFileId = null;
        renderFiles(document.getElementById("searchBox").value);
        updateStorageDisplay();
    };

    setupDragAndDrop();
}

function setupDragAndDrop() {
    var dropArea = document.getElementById("dropArea");

    dropArea.onclick = function() {
        document.getElementById("fileInput").click();
    };

    dropArea.ondragover = function(e) {
        e.preventDefault();
        dropArea.classList.add("drag-over");
    };

    dropArea.ondragleave = function() {
        dropArea.classList.remove("drag-over");
    };

    dropArea.ondrop = function(e) {
        e.preventDefault();
        dropArea.classList.remove("drag-over");
        handleFiles(e.dataTransfer.files);
    };
}
    function handleFiles(fileList) {
        console.log("handleFiles called with " + fileList.length + " files");
        if (fileList.length === 0) return;

        var count = 0;
        var total = fileList.length;
        console.log("Total files to process: " + total);

        for (var i = 0; i < fileList.length; i++) {
            (function(file) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    addFile(file, e.target.result);
                    count++;
                    console.log("File added, count is " + count);
                    if (count === total) {

                        filterFiles("all");
                        updateStorageDisplay();
                    }
                };

                reader.readAsDataURL(file);
            })(fileList[i]);
        }
    }

    function updateStorageDisplay() {
        var total = getTotalSize();
        var text = document.getElementById("storageText");

        if (total < 1024) {
            text.textContent = "Storage Used: " + total.toFixed(2) + " B";
        } else if (total < 1024 * 1024) {
            text.textContent = "Storage Used: " + (total / 1024).toFixed(2) + " KB";
        } else {
            text.textContent = "Storage Used: " + (total / (1024 * 1024)).toFixed(2) + " MB";
        }
    }
