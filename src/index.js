import './style.css';
import main from './pages/home';
import {newFolder} from './functions/newFolder';
import newTask from './functions/newTask';
import activeBtn from './functions/activeBtn';
import clearTask from './functions/clearTask';
import displayTasks from './functions/displayTasks';
import { folderElements } from './functions/newFolder';
import {createFolders} from './functions/newFolder';
import {tasks} from './functions/newTask';
import { Task } from './functions/newTask';
import {createTasks} from './functions/newTask';

import { formatDistance, subDays } from 'date-fns'


const container = document.querySelector(".container");

main();

//if localstorage is NOT empty
//fill up the folderelements with localstorage data
if (localStorage.getItem("folders") !== null){
    if (JSON.parse(localStorage.getItem("folders")).length > 0){
        for (let i = 0; i < JSON.parse(localStorage.getItem("folders")).length; i++){
            folderElements[i] = JSON.parse(localStorage.getItem("folders"))[i]; 
        }
        const folder = document.querySelector("#folder");
        //display folders that are located in localstorage
        createFolders(folder, folderElements);
    }
}

//display tasks
if (localStorage.getItem("taskName") !== null){
    if (JSON.parse(localStorage.getItem("taskName")).length > 0){
        for (let i = 0; i < JSON.parse(localStorage.getItem("taskName")).length; i++){
            tasks[i] = new Task(
                JSON.parse(localStorage.getItem("taskName"))[i],
                JSON.parse(localStorage.getItem("priority"))[i],
                JSON.parse(localStorage.getItem("taskFolder"))[i],
                JSON.parse(localStorage.getItem("date"))[i],
                JSON.parse(localStorage.getItem("done"))[i]
            );
        }
    }
    const tasksClass = document.querySelector(".tasks");
    const activeFolder = document.querySelector(".active-folder");

    const tempActiveFolder = document.querySelector(".active-folder");
        displayTasks(tempActiveFolder);
    //createTasks(tasks, tasksClass, activeFolder.textContent);
    //display tasks that are located in localstorage
}


//add folder
const addFolder = document.querySelector(".addfolder");
addFolder.addEventListener("click", function(){
    newFolder(this);
});

//active folder
const folderBtn = document.querySelectorAll(".folderBtn, .active-folderBtn");
for (let i = 0; i < folderBtn.length; i++){
    folderBtn[i].addEventListener("click", function(){
        activeBtn(this);
        clearTask();
        displayTasks(this);
        //newTask();
        if (this.innerHTML === "Done" || this.innerHTML === "Prio"){
            console.log("???");
            let addTask = document.querySelector(".addTask");
            let interF = document.querySelector(".interF");
            interF.removeChild(addTask);
        } else {
            const interF = document.querySelector(".interF");
            let addTask = document.querySelector(".addTask");
            if (addTask) interF.removeChild(addTask);
            if (interF.lastChild.className == "task-input-div") {
                let taskinputdiv = document.querySelector(".task-input-div");
                interF.removeChild(taskinputdiv);
            }
            addTask = document.createElement("button");
            addTask.innerHTML = "Add new task";
            addTask.className = "addTask";
            interF.appendChild(addTask);
            addTask.addEventListener("click", function(){
                newTask();
            });
        }
    });
}

//add task
const addTask = document.querySelector(".addTask");
addTask.addEventListener("click", function(){
    newTask();
});

