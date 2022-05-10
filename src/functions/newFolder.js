import activeBtn from "./activeBtn";
import deleteFolder from "./deleteFolder";
import clearTask from "./clearTask";
import newTask, { createTasks } from "./newTask";
import { tasks } from "./newTask";
import displayTasks from "./displayTasks";
export let folderElements = [];

export function newFolder(addFolder){
    
    //LOCAL STORAGE check
    console.log(localStorage);
    if (localStorage.getItem("folders") !== null){
        console.log("json: " + JSON.parse(localStorage.getItem("folders")).length)
        if (JSON.parse(localStorage.getItem("folders")).length > 0){
            for (let i = 0; i < JSON.parse(localStorage.getItem("folders")).length; i++){
                folderElements[i] = JSON.parse(localStorage.getItem("folders"))[i]; 
            }
        }
    }
    //---


    let folder = document.querySelector("#folder");
    folder.removeChild(addFolder);

    const inputDiv = document.createElement("div");
    inputDiv.className = "input-div";
    
    folder.appendChild(inputDiv);

    const inputField = document.createElement("input");
    inputField.className = "input-field";
    inputDiv.appendChild(inputField);
    const confirmBtn = document.createElement("button");
    confirmBtn.innerText = "ok";
    inputDiv.appendChild(confirmBtn);
    confirmBtn.addEventListener("click", function(){
        if (inputField.value !== ""){

            //save input value into variable
            let folderName = inputField.value;
            folderElements.push(folderName);

            //localstorage
            //empty localstorage folder
            console.log(localStorage);
            localStorage.removeItem("folders");
            let tempObj = [];
            //fill up local storage with folderElements
            for (let i = 0; i < folderElements.length; i++){
                tempObj.push(folderElements[i]);
            }
            localStorage.setItem("folders", JSON.stringify(tempObj));
            console.log(localStorage);
            let value = JSON.parse(localStorage.getItem("folders"));
            console.log(value[0]);

            //del input and btn
            inputDiv.removeChild(inputField);
            inputDiv.removeChild(confirmBtn);

            //create new folder
            createFolders(folder, folderElements);    
        } else alert("Folder name can not be empty!");    
    });

}
    //create new folder
    export function createFolders(folder, folderElements){
        console.log(folderElements.length);
        
        //active folder
        let activeFolderName = document.querySelector(".active-folder").textContent;

        deleteAllFolders();
        for (let i = 0; i < folderElements.length; i++){
            
            const folderDiv = document.createElement("div");
            folderDiv.className = "folder-div";
            folderDiv.id = folder.childElementCount;
            folder.appendChild(folderDiv);

            const newF = document.createElement("button");
            newF.innerText = folderElements[i];
            newF.className = "folderBtn";
            if(folderElements[i] == activeFolderName){
                newF.className = "active-folderBtn";
            }
            //create button event for changing folder
            newF.addEventListener("click", function(){
                activeBtn(this);
                clearTask();
                
                //createTasks(tasks, this, this);
                displayTasks(this);
                //newTask();
                const interF = document.querySelector(".interF");
                let addTask = document.querySelector(".addTask");
                if (addTask) interF.removeChild(addTask);
        
                addTask = document.createElement("button");
                addTask.innerHTML = "Add new task";
                addTask.className = "addTask";
                interF.appendChild(addTask);
                addTask.addEventListener("click", function(){
                    newTask();
                });
            });

            folderDiv.appendChild(newF);
            //create delete button for each folder
            const delBtn = document.createElement("button");
            delBtn.className = "delBtn";
            delBtn.innerHTML = "&times;";
            folderDiv.appendChild(delBtn);
            delBtn.addEventListener("click", function(){  
                deleteFolder(this, folderElements);
                createFolders(folder, folderElements);
            });
        }
        
        //create new folder btn
        const addFolder = document.querySelector(".addfolder");
        const folderTEMP = document.querySelector("#folder");
        const newFolderBtn = document.createElement("button");
        newFolderBtn.className = "addfolder";
        newFolderBtn.innerText = "Add new folder"
        folderTEMP.appendChild(newFolderBtn);
        newFolderBtn.addEventListener("click", function(){
            newFolder(this);
        });
        
    }

    function deleteAllFolders(){
        folder.innerHTML = "";
        
    }
 

//export default newFolder;
//export {folderElements as folderElements};
 