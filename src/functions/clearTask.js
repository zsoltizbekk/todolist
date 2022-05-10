function clearTask(){
    console.log("clearing tasks");
    const tasksClass = document.querySelector(".tasks");
    tasksClass.innerHTML = "";

    // let taskDefault = document.getElementsByClassName("default-prio");
    // let taskPrio = document.getElementsByClassName("urgent-prio");
    // for (let i = 0; i < taskDefault.length; i++){
    //     taskDefault[i].innerHTML = "";
    // }
    // for (let i = 0; i < taskPrio.length; i++){
    //     taskPrio[i].innerHTML = "";
    // }
}

export default clearTask;