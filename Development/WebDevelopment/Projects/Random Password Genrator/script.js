const genratebtn=document.querySelector(".button-box");
const copybtn=document.querySelector(".copy");
const passinput=document.querySelector("#password");

let password="";
genratebtn.addEventListener("click",generatePassword);
copybtn.addEventListener("click",copyPassword);

function generatePassword(){
    //33 to 126 ascii value random password
    passinput.value=password="";
   for(let i=0;i<16;i++){
        let r=Math.floor(Math.random()*93);
        password+=String.fromCharCode(r+33);
   }
   passinput.value=password;
}

function copyPassword(){
    passinput.select();
    document.execCommand("copy");


        // Using modern approach
        // if (navigator.clipboard) {
        //     navigator.clipboard.writeText(passInput.value)
        //         .then(() => {
        //             console.log('Text successfully copied to clipboard');
        //         })
        //         .catch(err => {
        //             console.error('Unable to copy text to clipboard', err);
        //         });
        // }
}