const button = document.getElementById("enter");

button.addEventListener("click",()=>{
    const input = document.getElementById("new-todo").value 
    const listItem = document.createElement("li")
    listItem.innerText = input;

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText ="Delete"
    
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem)
    
        deleteBtn.addEventListener("click",()=>{
            list.removeChild(listItem);
        })
})

