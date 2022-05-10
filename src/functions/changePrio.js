import { tasks } from "./newTask";

function changePrio(id, done, checkbox, changePrioBtn){
    //if done is true then the checkbox is checked
    //if checkbox is true then the function is called by the checkbox
    if (checkbox){
        if (!done){
            tasks[id].done = false;
            storageModification();    
        } else if (done){
            tasks[id].done = true;
            storageModification();
        }
    } else {
        if (!tasks[id].done){
            if (tasks[id].priority === 0){
                tasks[id].priority = 1;
                changePrioBtn.className = "change-prio-1"
            } else {
                tasks[id].priority = 0;
                changePrioBtn.className = "change-prio"
            }
            tasks[id].done = false;
            storageModification();   
        } else if (tasks[id].done){
            alert("This task is already done!");
        }
    }
}

export function storageModification(){
    //reset LOCALSTORAGE
    localStorage.removeItem("taskName");
    localStorage.removeItem("priority");
    localStorage.removeItem("taskFolder");
    localStorage.removeItem("date");
    localStorage.removeItem("done");

    //fill up LOCALSOTRAGE
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
}

export default changePrio;