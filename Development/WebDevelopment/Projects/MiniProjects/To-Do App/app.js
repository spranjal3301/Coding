const inputBox=document.querySelector("#input-box");
const listContainer=document.querySelector("#lists");
const addBtn=document.querySelector("#add-btn");

addBtn.addEventListener("click",function(){
    let inputText=inputBox.value;
    if(inputText==""){
        alert("Please enter a task");
    }else{
        let listItem=document.createElement("li");
        listItem.innerHTML=inputText;
        listContainer.appendChild(listItem);
        inputBox.value="";

        let spanCross=document.createElement("span");
        spanCross.innerHTML="&times;";
        listItem.appendChild(spanCross);
       
    } 
    saveData();
});

inputBox.addEventListener("keyup",function(event){
    if(event.keyCode===13){
        event.preventDefault();
        addBtn.click();
    }
});

listContainer.addEventListener("click",function(event){
    if(event.target.tagName=="LI"){
        event.target.classList.toggle("checked");
        saveData();

    }else if(event.target.tagName=="SPAN"){
        let li=event.target.parentElement;
        listContainer.removeChild(li);
        saveData();
    }
}
);

function saveData(){
    let listHTML=listContainer.innerHTML;
    localStorage.setItem("listHTML",listHTML);
}
function showTask(){
    let listHTML=localStorage.getItem("listHTML");
    listContainer.innerHTML=listHTML;
}
showTask();     

