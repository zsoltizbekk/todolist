import {folderElements} from "./newFolder";
import deleteTask from "./deleteTask";
import displayTasks from "./displayTasks";

const tasks = [];

export class Task {
    constructor(taskName, priority, folder, date, done) {
        this.taskName = taskName;
        this.priority = priority;
        this.folder = folder;
        this.date = date;
        this.done = done;
        return `${taskName}, ${priority}, ${folder}, ${date}, ${done}`;
    }
}


function newTask(){
    //LOCAL STORAGE check
    console.log(localStorage);
    if (localStorage.getItem("taskName") !== null){
        //console.log("json: " + JSON.parse(localStorage.getItem("taskName")).length)
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
    }
    //---

    let prio = 0;
    for (const key in tasks) {
        console.log("- " + tasks[key].taskName + " - " + tasks[key].folder + " - " + tasks[key].date);
    }
    //remove new task button
    const interF = document.querySelector(".interF");
    let addTask = document.querySelector(".addTask");
    if (addTask) interF.removeChild(addTask);
    
    //new task
    //task input field
    const tasksClass = document.querySelector(".tasks");

    const taskInputDiv = document.createElement("div");
    taskInputDiv.className = "task-input-div";
    interF.appendChild(taskInputDiv);

    const inputField = document.createElement("input");
    inputField.className = "input-field";
    taskInputDiv.appendChild(inputField);

    //task date input field
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.className = "date-input";
    taskInputDiv.appendChild(dateInput);

    //task priority button
    const priorityBtn = document.createElement("button");
    priorityBtn.innerText = "prio";
    priorityBtn.className = "default-prio-btn";
    taskInputDiv.appendChild(priorityBtn);
    priorityBtn.addEventListener("click", function(){
        if (this.className == "default-prio-btn"){
            this.className = "urgent-prio-btn";
            prio = 1;
        } else {
            this.className = "default-prio-btn";
            prio = 0;
        }
    });

    //task submit button
    const confirmBtn = document.createElement("button");
    confirmBtn.innerText = "ok";
    taskInputDiv.appendChild(confirmBtn);
    confirmBtn.addEventListener("click", function(){
        if (inputField.value !== "" && dateInput.value !== ""){

        //get active folder name
        const activeFolder = document.querySelector(".active-folder");
        console.log("date---: " + dateInput.value);
        //save input value into object
        tasks[tasks.length] = new Task(inputField.value, prio, activeFolder.textContent, dateInput.value, 0);
        //delete LOCAL STORAGE --- taskName, priority, taskFolder
        localStorage.removeItem("taskName");
        localStorage.removeItem("priority");
        localStorage.removeItem("taskFolder");
        localStorage.removeItem("date");
        localStorage.removeItem("done");
        
        //save object into LOCAL STORAGE
        let tempTaskName = [];
        let tempTaskPriority = [];
        let tempTasksFolder = [];
        let tempDate = [];
        let tempDone = [];
        for (let i = 0; i < tasks.length; i++){
            tempTaskName.push(tasks[i].taskName);
            tempTaskPriority.push(tasks[i].priority);
            tempTasksFolder.push(tasks[i].folder);
            tempDate.push(tasks[i].date);
            tempDone.push(tasks[i].done);
        }
        localStorage.setItem("taskName", JSON.stringify(tempTaskName));
        localStorage.setItem("priority", JSON.stringify(tempTaskPriority));
        localStorage.setItem("taskFolder", JSON.stringify(tempTasksFolder));
        localStorage.setItem("date", JSON.stringify(tempDate));
        localStorage.setItem("done", JSON.stringify(tempDone));
                
        //remove task input div
        interF.removeChild(taskInputDiv);

        //create new task
        const tempActiveFolder = document.querySelector(".active-folder");
        tasksClass.innerHTML = "";
        displayTasks(tempActiveFolder);
        //createTasks(tasks, tasksClass, activeFolder.textContent);
        //create new add task btn
        let addTask = document.createElement("button");
        addTask.innerHTML = "Add new task";
        addTask.className = "addTask";
        interF.appendChild(addTask);
        
        //add eventlistener to btn
        addTask.addEventListener("click", function(){
            newTask();
        });
        } else alert("Task name and date can not be empty!");
});
  
}

//create new task
export function createTasks(tasks, tasksClass, activeFolder){
    console.log("createTasks!!!");
    
    //clear interface
    tasksClass.innerHTML = "";

    //display all task
    for (const key in tasks) {
        if (tasks[key].folder == activeFolder){
            const temp = document.createElement("div");
            temp.className = "task-task";
            temp.id = key;
            temp.innerHTML = tasks[key].taskName;
            if (tasks[key].priority == 0){
                temp.className = "task-default";
            } else {
                temp.className = "task-prio";
            }
            tasksClass.appendChild(temp);
            const delBtn = document.createElement("button");
            delBtn.className = "taskDelBtn";
            delBtn.innerHTML = "X";
            temp.appendChild(delBtn);
            delBtn.addEventListener("click", function(){  
                console.log("Task len1: " + tasks.length);
                let tempFolder = tasks[key].folder;
                deleteTask(this.parentElement.id, tasks);
                console.log("Task len2: " + tasks.length);
                createTasks(tasks, tasksClass, tempFolder);                    
            });
        }
    }
}


export default newTask;
export {tasks as tasks};