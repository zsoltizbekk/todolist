function activeBtn(temp){
    if (temp == undefined){
        const activeFolder = document.querySelector(".active-folder");

        activeFolder.innerHTML = "All";
    } else {

    let folderBtn = document.getElementsByClassName("active-folderBtn");
    for (let i = 0; i < folderBtn.length; i++){
        folderBtn[i].className = "folderBtn"
    }

    temp.className = "active-folderBtn";


    const activeFolder = document.querySelector(".active-folder");
    activeFolder.innerHTML = temp.textContent;
    
    console.log(temp);
    }

}

export default activeBtn;