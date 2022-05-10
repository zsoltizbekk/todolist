import { tasks } from "./newTask";
import deleteTask from "./deleteTask";
import clearTask from "./clearTask";
import changePrio from "./changePrio";
import newTask from "./newTask";
import flag from "../assets/flag.png";
import bin from "../assets/bin.png";


function displayTasks(temp){
    console.log("temp? " + temp.innerText);
    console.log(tasks);
    const activeFolder = document.querySelector(".active-folder");
    
    //display all tasks if the active folder is All
    if (temp.innerText == "All"){
        firstLine3();
        for (let i = 0; i < tasks.length; i++){
            display(i, true);
        }
    } else if (temp.innerText == "Prio"){
        firstLine3();
        for (let i = 0; i < tasks.length; i++){
            //if prio but not done
            if (tasks[i].priority == 1 && tasks[i].done == 0){ 
                display(i, true);
            }
        }
    } else if (temp.innerText == "Done"){
        firstLine3();
        for (let i = 0; i < tasks.length; i++){ 
            //tasks that are done already
            if (tasks[i].done == 1){ 
                display(i, true);
            }
        }
    } else {
        //display all tasks in the active folder
        firstLine2();
        for (let i = 0; i < tasks.length; i++){
            if (tasks[i].folder == temp.innerText){
                display(i, false);
            }
        }
    }

}

function firstLine3(){
    const tasksClass = document.querySelector(".tasks");
    const firstLine = document.createElement("div");
    firstLine.className = "first-line-3";
    tasksClass.appendChild(firstLine);

    firstLine.innerHTML = ` <div>Task name</div>
                            <div>Folder</div> 
                            <div>Date</div>`;
}
function firstLine2(){
    const tasksClass = document.querySelector(".tasks");
    const firstLine = document.createElement("div");
    firstLine.className = "first-line-2";
    tasksClass.appendChild(firstLine);

    firstLine.innerHTML = ` <div>Task name</div>
                            <div>Date</div>`;

}

function display(i, boolean){
    if (boolean){
        
        let newTaskDiv = document.createElement("div");
        newTaskDiv.id = i;

        const tasksClass = document.querySelector(".tasks");
        tasksClass.appendChild(newTaskDiv);

        //checkbox
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.class = "checkbox-class";
        newTaskDiv.appendChild(checkBox);
        if (tasks[i].done == 1) {
            newTaskDiv.className = "done";
            checkBox.checked = true;
        } else if (tasks[i].done == 0 && tasks[i].priority == 0){
            newTaskDiv.className = "default-prio";
            checkBox.checked = false;
        } else if (tasks[i].done == 0 && tasks[i].priority == 1) {
            newTaskDiv.className = "urgent-prio";
            checkBox.checked = false;
        }
        checkBox.addEventListener("change", function(){
            if (this.checked){
                changePrio(this.parentElement.id, true, true, this);
                clearTask();
                const activeFolder = document.querySelector(".active-folder");
                displayTasks(activeFolder);
            } else {
                changePrio(this.parentElement.id, false, true, this);
                clearTask();
                const activeFolder = document.querySelector(".active-folder");
                displayTasks(activeFolder);
            }
        });
        const taskDetails = document.createElement("div");
        taskDetails.className = "task-details-3";
        taskDetails.innerHTML = `   <div>${tasks[i].taskName}</div>
                                    <div>${tasks[i].folder}</div> 
                                    <div>${tasks[i].date}</div>`;
        newTaskDiv.appendChild(taskDetails);
        //newTaskDiv.innerHTML = `${tasks[i].taskName} - Folder: ${tasks[i].folder} - Date: ${tasks[i].date}`;
        
        //change prio button
        const changePrioBtn = document.createElement("img");
        if (tasks[i].priority == 0)
            changePrioBtn.className = "change-prio";
        else changePrioBtn.className = "change-prio-1";
        changePrioBtn.src = flag;
        newTaskDiv.appendChild(changePrioBtn);
        changePrioBtn.addEventListener("click", function(){
            console.log(this.parentElement);
            changePrio(this.parentElement.id, false, false, this);
            clearTask();
            const activeFolder = document.querySelector(".active-folder");
            displayTasks(activeFolder);
        });

        //delete button
        const delBtn = document.createElement("img");
        delBtn.className = "taskDelBtn";
        delBtn.src = bin;
        newTaskDiv.appendChild(delBtn);
        delBtn.addEventListener("click", function(){  
            let tempFolder = tasks[i].folder;
            deleteTask(this.parentElement.id, tasks);
            clearTask();
            const activeFolder = document.querySelector(".active-folder");
            displayTasks(activeFolder);                    
        });
    } else {
        let newTaskDiv = document.createElement("div");
        newTaskDiv.id = i;

        
        const tasksClass = document.querySelector(".tasks");
        tasksClass.appendChild(newTaskDiv);

        //checkbox
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.class = "checkbox-class";
        newTaskDiv.appendChild(checkBox);
        if (tasks[i].done == 1) {
            newTaskDiv.className = "done";
            checkBox.checked = true;
        } else if (tasks[i].done == 0 && tasks[i].priority == 0){
            newTaskDiv.className = "default-prio";
            checkBox.checked = false;
        } else if (tasks[i].done == 0 && tasks[i].priority == 1) {
            newTaskDiv.className = "urgent-prio";
            checkBox.checked = false;
        }
        checkBox.addEventListener("change", function(){
            if (this.checked){
                changePrio(this.parentElement.id, true, true, this);
                clearTask();
                const activeFolder = document.querySelector(".active-folder");
                displayTasks(activeFolder);
            } else {
                changePrio(this.parentElement.id, false, true, this);
                clearTask();
                const activeFolder = document.querySelector(".active-folder");
                displayTasks(activeFolder);
            }
        });
        const taskDetails = document.createElement("div");
        taskDetails.className = "task-details-2";
        taskDetails.innerHTML = `   <div>${tasks[i].taskName}</div>
                                    <div>${tasks[i].date}</div>`;
        newTaskDiv.appendChild(taskDetails);
        //newTaskDiv.innerHTML = `${tasks[i].taskName} - Folder: ${tasks[i].folder} - Date: ${tasks[i].date}`;
        
        //change prio button
        const changePrioBtn = document.createElement("img");
        if (tasks[i].priority == 0)
            changePrioBtn.className = "change-prio";
        else changePrioBtn.className = "change-prio-1";
        changePrioBtn.src = flag;
        newTaskDiv.appendChild(changePrioBtn);
        changePrioBtn.addEventListener("click", function(){
            console.log(this.parentElement);
            changePrio(this.parentElement.id, false, false, this);
            clearTask();
            const activeFolder = document.querySelector(".active-folder");
            displayTasks(activeFolder);
        });

        //delete button
        const delBtn = document.createElement("img");
        delBtn.className = "taskDelBtn";
        delBtn.src = bin;
        newTaskDiv.appendChild(delBtn);
        delBtn.addEventListener("click", function(){  
            let tempFolder = tasks[i].folder;
            deleteTask(this, tasks);
            clearTask();
            const activeFolder = document.querySelector(".active-folder");
            displayTasks(activeFolder);                    
        });
    }
}
export default displayTasks;