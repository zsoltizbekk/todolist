import { tasks } from "./newTask";
import { Task } from "./newTask";
import { folderElements } from "./newFolder";
import deleteTask from "./deleteTask";
import { storageModification } from "./changePrio";

function deleteTasksInTheFolder(temp){
    //temp is the folder that are deleted
    console.log(folderElements);
    let counter = 0;
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i].folder == temp){
            console.log("before:");
            console.log(tasks);
            tasks.splice(i, 1);
            console.log("after:");
            console.log(tasks);
            storageModification();
        }
    }
}

export default deleteTasksInTheFolder;