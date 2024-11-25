const folderStructure = [
    {
        name: "Films",
        type: "folder",
        content: [
            { name: "Iron Man.avi", type: "file" },
            {
                name: "Fantasy",
                type: "folder",
                content: [
                    { name: "The Lord of the Rings.avi", type: "file" },
                    {
                        name: "New folder 1",
                        type: "folder",
                        content: []  
                    }
                ]
            }
        ]
    },
    {
        name: "Documents",
        type: "folder",
        content: []  
    }
];

function clearSelection() {
    document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
}

function createFileElement(fileName) {
    const li = document.createElement('li');
    li.classList.add('file');
    li.textContent = fileName;
    li.addEventListener('click', function (event) {
        clearSelection();
        li.classList.add('selected');
        event.stopPropagation();
    });
    return li;
}

function createFolderElement(folder) {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = folder.name;
    details.appendChild(summary);

    if (folder.content.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = "Folder is empty";
        emptyMessage.style.color = "red"; 
        details.appendChild(emptyMessage);
    } else {
        const ul = document.createElement('ul');
        folder.content.forEach(item => {
            if (item.type === "file") {
                ul.appendChild(createFileElement(item.name));
            } else if (item.type === "folder") {
                ul.appendChild(createFolderElement(item));
            }
        });
        details.appendChild(ul);
    }

    return details;
}

function createFolderTree(structure, parent) {
    structure.forEach(item => {
        if (item.type === "folder") {
            parent.appendChild(createFolderElement(item));
        } else if (item.type === "file") {
            parent.appendChild(createFileElement(item.name));
        }
    });
}

const fileExplorer = document.getElementById('file-explorer');
createFolderTree(folderStructure, fileExplorer);
