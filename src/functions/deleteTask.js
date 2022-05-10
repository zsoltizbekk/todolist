import { storageModification } from "./changePrio";
import {tasks} from "./newTask";

function deleteTask(temp, folderElements){ //temp == div.id
    //let deleteID = temp.parentElement.id;
    console.log("start: " + folderElements);
    folderElements.splice(temp, 1);
    console.log("end: " + folderElements);

    storageModification();

    // //LOCALSTORAGE
    // //empty localstorage folder
    // localStorage.removeItem("taskName");
    // localStorage.removeItem("priority");
    // localStorage.removeItem("taskFolder");
    // localStorage.removeItem("done");
    // //fill up local storage with object
    // //save object into LOCAL STORAGE
    // let tempTaskName = [];
    // let tempTaskPriority = [];
    // let tempTasksFolder = [];
    // for (let i = 0; i < tasks.length; i++){
    //     tempTaskName.push(tasks[i].taskName);
    //     tempTaskPriority.push(tasks[i].priority);
    //     tempTasksFolder.push(tasks[i].folder);

    // }
    // localStorage.setItem("taskName", JSON.stringify(tempTaskName));
    // localStorage.setItem("priority", JSON.stringify(tempTaskPriority));
    // localStorage.setItem("taskFolder", JSON.stringify(tempTasksFolder));

}
export default deleteTask;