//!Sending JavaScript Http Requests
//- Fetch API
//- axios
//- XMLHttpRequest 

//!XMLHttpRequest

function fetchData(){
    const xhr=new XMLHttpRequest();
    xhr.open('GET',URL);
    xhr.send();
    xhr.onload=function(){
        if(xhr.status===200){
            console.log(xhr.responseText);
        }
    }
}

//!Fetch
async function fetchData(){
    const response=await fetch(URL); //-Default GET request
    await fetch(URL,{
        method:"POST",
        body:{
            username:"",
            password:""
        },
        headers:{
            "Authorization":"Bearer 123"
        }
    });


    const data=await response.json();
    console.log(data);
}
fetchData()


//!Axios
const  axios  = require("axios");

async function fetchData(){
    const response=await axios.get(URL);  //- axios.post/put/delete

    const body={
        username:"",
        password:""
    }
    const headers={
        "Authorization":"Bearer 123"
    }
    await axios.get(URL,{headers});  //-get request can not send body
    await axios.post(URL,body,{headers});  

    console.log(response.data);
}

fetchData()


//!AJAX
//- AJAX is a group of interrelated technologies used together to create applications that are faster,more interactive,
//- and more user-friendly. It allows web pages to be updated asynchronously without reloading the entire page.
//- This is done by using a technique called XMLHttpRequest,
//- which allows JavaScript to send and receive data from a server without reloading the page.