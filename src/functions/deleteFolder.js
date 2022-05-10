import deleteTasksInTheFolder from './deleteTasksInTheFolder';
import displayTasks from './displayTasks';
import clearTask from './clearTask';

function deleteFolder(temp, folderElements){
        
    if (confirm("If you delete a folder, it will delete all tasks in the folder! Do you want to continue?")){
        console.log(temp.parentElement);
        let deleteID = temp.parentElement.id;
        //if deleted folder is the active, then make the "all" folder active
        if (temp.parentElement.firstChild.className == "active-folderBtn"){
            const activeFolder = document.querySelector(".active-folder");     
            activeFolder.innerHTML = "All";
            const allBtn = document.getElementsByClassName("folderBtn");
            allBtn[0].className = "active-folderBtn";
            //
            clearTask();
            displayTasks(activeFolder);
        }
        console.log("start: " + folderElements);
        folderElements.splice(deleteID, 1);

        //LOCALSTORAGE
        //empty localstorage folder
        localStorage.removeItem("folders");
        let tempObj = [];
        //fill up local storage with folderElements
        for (let i = 0; i < folderElements.length; i++){
            tempObj.push(folderElements[i]);
        }
        localStorage.setItem("folders", JSON.stringify(tempObj));
        console.log(localStorage);
        let value = JSON.parse(localStorage.getItem("folders"));


        deleteTasksInTheFolder(temp.parentElement.firstChild.innerHTML);
        clearTask();
        let activeFolder = document.querySelector(".active-folder");
        displayTasks(activeFolder);

    } else ;
}

export default deleteFolder;