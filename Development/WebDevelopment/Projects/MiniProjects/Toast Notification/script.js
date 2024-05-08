const successbtn=document.querySelector("#success");
const errorbtn=document.querySelector("#error");
const infobtn=document.querySelector("#info");
const toastdiv=document.querySelector(".toastbox")

successbtn.addEventListener("click",showToast);
errorbtn.addEventListener("click",showToast);
infobtn.addEventListener("click",showToast);

function showToast(event){
    let toast=document.createElement('div');
    toast.className='toast';
    let content=event.target.innerHTML;
    if(content==="Success"){
        toast.innerHTML='<i class="fa-solid fa-thumbs-up"></i>'+event.target.innerHTML;
        toast.classList.add('s')
    }
    else if(content==="Error"){
        toast.innerHTML='<i class="fa-solid fa-bug"></i>'+event.target.innerHTML;
        toast.classList.add('e')
    }
    else if(content==="Info"){
        toast.innerHTML='<i class="fa-solid fa-circle-info"></i>'+event.target.innerHTML;
        toast.classList.add('if')
    }
    toastdiv.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    },3000);
    
}