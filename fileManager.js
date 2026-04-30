var currentView = "grid"; // Default view

var currentFilter = "all"; // Default filter

var openFileId = null; // Track currently open file for editing

function getFileIcon(type) {
    if (type.startsWith("image/")) return "icons/image.png";
    if (type.startsWith("video/")) return "icons/video.png";
    if (type.startsWith("audio/")) return "icons/audio.png";
    if (type === "application/pdf") return "icons/pdf.png";
    if (type === "application/zip" || type === "application/x-zip-compressed") return "icons/zip.png";
    if (type.startsWith("word") || type.includes("document")) return "icons/word.png";
    if (type.includes("spreadsheet") || type.includes("excel")) return "icons/excel.png";
    if (type.includes("zip") || type.includes("compressed")) return "icons/zip.png";

    return "icons/file.png"; // Default icon
}

function getFileCategory(type) {
    if (type.startsWith("image/")) return "image";
    if (type.startsWith("video/")) return "video";
    if (type.startsWith("audio/")) return "audio";
    if (type === "application/pdf") return "document";
    return "other";
}

function formatSize(bytes) {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

function addFile(file, base64data) {
    var newFile = {
        id: Date.now() + "-" + Math.random().toString(36).slice(2),
        name: file.name,
        type: file.type,
        size: file.size,
        data: base64data,
        category: getFileCategory(file.type),
        tags: []
    };

    var files = loadFiles();
    files.push(newFile);
    saveFiles(files);

    return newFile;
}


function renderFiles(searchTerm) {
    var files = loadFiles();
    var display = document.getElementById("fileDisplay");

    if (currentView === "grid") {
     display.className = "file-grid";
    } else {
        display.className = "file-list";
    }
    var filtered = files;
    if (currentFilter !== "all") {
        filtered = files.filter(function(f) {
            return getFileCategory(f.type) === currentFilter;
        });
    }

    if (searchTerm && searchTerm.trim() !== "") {
        var term = searchTerm.trim().toLowerCase();
        filtered = filtered.filter(function(f) {

            var inName = f.name.toLowerCase().includes(term);
            var inCategory = getFileCategory(f.type).toLowerCase().includes(term);
            var inTags = f.tags.some(function(t) {
                return t.toLowerCase().includes(term);
            });
            return inName || inCategory || inTags;
        });
    }

    if (filtered.length === 0) {
        display.innerHTML = "<p style='text-align:center; color:rgba(255, 255, 255, 0.7);'>No files found.</p>";
        return;
    }

    display.innerHTML = "";
    for (var i = 0; i < filtered.length; i++) {
        display.appendChild(createFileCard(filtered[i]));
    }
}

function createFileCard(file0bj) {
    var card = document.createElement("div");
    card.className = "file-item";
    card.setAttribute("data-id", file0bj.id);


    if (file0bj.type.startsWith("image/") && file0bj.data) {
        var img = document.createElement("img");
        img.src = file0bj.data;
        img.style.width = "100%";
        img.style.height = "80px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "6px 6px 0 0";
        img.style.marginBottom = "8px";
        card.appendChild(img);
    } else {

        var iconDiv = document.createElement("div");
        iconDiv.className = "file-icon";
        iconDiv.textContent = getFileIcon(file0bj.type);
        card.appendChild(iconDiv);
    }

    var nameDiv = document.createElement("div");
    nameDiv.className = "file-name";
    nameDiv.textContent = file0bj.name;
    card.appendChild(nameDiv);

    var sizeDiv = document.createElement("div");
    sizeDiv.className = "file-size";
    sizeDiv.textContent = formatSize(file0bj.size);
    card.appendChild(sizeDiv);  

    if (file0bj.tags && file0bj.tags.length > 0) {
        var tagsDiv = document.createElement("div");
        tagsDiv.className = "file-tags";
        for (var j = 0; j < file0bj.tags.length; j++) {
            var pill = document.createElement("span");
            pill.className = "tag-pill";
            pill.textContent = file0bj.tags[j];
            tagsDiv.appendChild(pill);
        }
        card.appendChild(tagsDiv);
    }

    card.onclick = function() {
        openFileModal(file0bj.id);
    };

    return card;
}
    function openFileModal(fileId) {
        var files = loadFiles();
        var file = null;

        for (var i = 0; i < files.length; i++) {
            if (files[i].id === fileId) {
                file = files[i];
                break;
            }
        }
        if (!file) return;


        openFileId = fileId;
        document.getElementById("fileModalTitle").textContent = file.name;
        document.getElementById("fileModalName").textContent = file.name;
        document.getElementById("fileModalSize").textContent = formatSize(file.size);
        document.getElementById("fileModalType").textContent = file.type || "Unknown";
        document.getElementById("fileModalDate").textContent = new Date(parseInt(file.id.split("-")[0])).toLocaleString();
        document.getElementById("fileModalCategory").value = file.category;
        document.getElementById("fileModalTags").value = file.tags.join(", ");

       var folderSelect = document.getElementById("fileModalFolder");
       folderSelect.innerHTML = "<option value=''>-- Select Folder --</option>";
         var folders = loadFolders();
        for (var j = 0; j < folders.length; j++) {
            var option = document.createElement("option");
            option.value = folders[j];
            option.textContent = folders[j];
            if (file.folder === folders[j]) option.selected = true;
            folderSelect.appendChild(option);
        }
        
        document.getElementById("fileModal").classList.add("show");


    }

    function renderFolders() {
        var folders = loadFolders();
        var folderList = document.getElementById("folderList");
        folderList.innerHTML = "";

        if (folders.length === 0) {
            folderList.innerHTML = "<p style='text-align:center; color:rgba(255, 255, 255, 0.7);'>No folders created yet.</p>";
            return;
        }
        for (var i = 0; i < folders.length; i++) {
            var btn = document.createElement("button");
            btn.className = "folder-btn";
            btn.textContent = folders[i];
            btn.onclick = (function(folderName) {
                return function() { filterByFolder(folderName); };
            })(folders[i]);

            var editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.className = "edit-folder-btn";
            editBtn.onclick = (function(folderName) {
                return function() { openEditFolderModal(folderName); };
            })(folders[i]);

            var wrapper = document.createElement("div");
            wrapper.className = "folder-row";
            wrapper.appendChild(btn);
            wrapper.appendChild(editBtn);
            folderList.appendChild(wrapper);
        }
    }


    function filterFiles(type) {
        var folderBtns = document.querySelectorAll(".folder-btn");
        for (var i = 0; i < folderBtns.length; i++) {
            folderBtns[i].classList.remove("active");
        }
        currentFilter = type;

        var navBtns = document.querySelectorAll(".nav-btn");
        for (var i = 0; i < navBtns.length; i++) {
            navBtns[i].classList.remove("active");
            if (navBtns[i].getAttribute("data-filter") === type) {
                navBtns[i].classList.add("active");
            }
        }
        renderFiles(document.getElementById("searchBox").value);

    }

    function filterByFolder(folderName) {

        var navBtns = document.querySelectorAll(".nav-btn");
        for (var i = 0; i < navBtns.length; i++) {
            navBtns[i].classList.remove("active");
        }
        var folderBtns = document.querySelectorAll(".folder-btn");
        for (var j = 0; j < folderBtns.length; j++) {
            folderBtns[j].classList.remove("active");
        }

        var allFolderBtns = document.querySelectorAll(".folder-btn");
        for (var i = 0; i < allFolderBtns.length; i++) {
            if (allFolderBtns[i].textContent === folderName) {
                allFolderBtns[i].classList.add("active");
            }
        }

        var files = loadFiles();
        var display = document.getElementById("fileDisplay");
        display.className = "file-grid";

        var filtered = files.filter(function(f) {
            return f.folder === folderName;
        });

        if (filtered.length === 0) {
            display.innerHTML = "<p style='text-align:center; color:rgba(255, 255, 255, 0.7);'>No files found in this folder.</p>";
            return;
        }

        display.innerHTML = "";
        for (var i = 0; i < filtered.length; i++) {
            display.appendChild(createFileCard(filtered[i]));
        }
    }

    function editFolder(name) {
        var choice = prompt("Edit folder name:" + name);

        if (choice === "rename") {
            var newName = prompt("Enter new folder name:");
            if (!newName || newName.trim() === "") 
                alert("Folder name cannot be empty.");
                return;

                var folders = loadFolders();
                var index = folders.indexOf(name);
                if (index !== -1) 
                    folders[index] = newName.trim();
                    saveFolders(folders);

                    var files = loadFiles();
                    for (var i = 0; i < files.length; i++) {
                        if (files[i].folder === name) 
                            files[i].folder = newName.trim();
                        }
                        saveFiles(files);
                        renderFolders();

                    } else if (choice === "delete") {
                        var confirmed = confirm("Are you sure you want to delete this folder? This will not delete the files inside, but will remove their folder association.");   
                        if (!confirmed) {
                            return;

                            var folders = loadFolders();
                            folders = folders.filter(function(f) {
                                return f !== name;
                            });
                            saveFolders(folders);
                            renderFolders();

        }
    }
}