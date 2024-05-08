const addbtn=document.querySelector("#add");
const textarea=document.querySelector(".ta");
const colorbtn=document.querySelector("#color");
const sizebtn=document.querySelector("#size");
const notesContainer=document.querySelector(".notes");

addbtn.addEventListener("click",addNotes);

function addNotes(event){
    if(textarea.value==""){
        alert("Please Enter Note");
            return;
    }
    else{
        const box=document.createElement('div');
        const text=document.createElement('p');
        const closebtn=document.createElement('button');
        // box.classList.add("box"); 
        box.className='box';

        box.appendChild(text);
        box.appendChild(closebtn);
        notesContainer.appendChild(box);

        closebtn.innerHTML='X';
        text.innerHTML=textarea.value;
        textarea.value="";

        closebtn.addEventListener("click",()=>{
            box.remove();
            // saveData();
        })


    }
}

sizebtn.addEventListener("change",()=>{
    textarea.style.fontSize=sizebtn.value+ 'px';
})

colorbtn.addEventListener("change",()=>{
    textarea.style.color=colorbtn.value;
})

function saveData(){
    let data=notesContainer.innerHTML;
    localStorage.setItem("listHTML",data);
}
function showNotes(){
    let data=localStorage.getItem("listHTML");
    notesContainer.innerHTML=data;
}
// showNotes();