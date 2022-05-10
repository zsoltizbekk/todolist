import activeBtn from "../functions/activeBtn";
import footer from "../functions/footer";

function main(){
    const container = document.querySelector(".container");
    
    //HEADER
    const header = document.createElement("div");
    header.className = "header";
    header.innerHTML = "Todo List";
    container.appendChild(header);

    //CONTENT (CONTAINS SIDEBAR + INTERFACE)
    const content = document.createElement("div");
    content.className = "content";
    container.appendChild(content);

    //SIDEBAR
    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    sidebar.innerHTML = `
    <button class="active-folderBtn">All</button>
    <button class="folderBtn">Done</button>
    <button class="folderBtn">Prio</button>
    <div class="sidebarElement">Folders:</div>
    <div class="sidebarElement" id="folder">
    <button class="addfolder">new folder</button>
    </div>
    `
    content.appendChild(sidebar);

    //INTERFACE
    const rightPanel = document.createElement("div");
    rightPanel.className = "right-panel";
    content.appendChild(rightPanel);

    const activeFolder = document.createElement("div");
    activeFolder.className = "active-folder";
    rightPanel.appendChild(activeFolder);
    
    activeBtn();

    const interF = document.createElement("div");
    interF.className = "interF";
    rightPanel.appendChild(interF);
    
    const tasks = document.createElement("div");
    tasks.className = "tasks";
    interF.appendChild(tasks);

    //task button
    const addTask = document.createElement("button");
    addTask.innerHTML = "Add new task";
    addTask.className = "addTask";
    interF.appendChild(addTask);

    footer();
}


export default main;