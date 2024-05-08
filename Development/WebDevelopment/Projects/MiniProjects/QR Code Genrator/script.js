const apiUrl="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="
const inputText=document.querySelector("#textorURL");
const qrcodeimg=document.querySelector("#qrcodeimg");
const generatebtn=document.querySelector(".generatebtn");

generatebtn.addEventListener("click",()=>{

    if(inputText.value===""){
        alert("Plese Enter Somthing");
        return;
    }
    qrcodeimg.setAttribute("src",apiUrl+inputText.value);
})

