const button = document.getElementById("enter");

button.addEventListener("click",()=>{
    const input = document.getElementById("new-todo").value 
    const listItem = document.createElement("li")
    listItem.innerText = input;
    const deleteBtn = document.createElement("button")
    deleteBtn.className = "delete"
    deleteBtn.innerText ="Delete"
    listItem.appendChild(deleteBtn);
    const list = document.querySelector("#list");
    list.appendChild(listItem)
})


deleteBtn.addEventListener("click",()=>{
    deleteBtn.
    list.
    // 
})