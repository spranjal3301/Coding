//!Sending JavaScript Http Requests
//- Fetch API
//- axios
//- XMLHttpRequest 

//!XMLHttpRequest

function fetchData(){
    const xhr=new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
    xhr.send();
    xhr.onload=function(){
        if(xhr.status===200){
            console.log(xhr.responseText);
        }
    }
}


//!Axios

const { default: axios } = require("axios");

async function fetchData(){
    const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
}

fetchData()


//!Fetch

async function fetchData(){
    const response=await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=await response.json();
    console.log(data);
}
fetchData()

//!AJAX
//- AJAX is a group of interrelated technologies used together to create applications that are faster,more interactive,
//- and more user-friendly. It allows web pages to be updated asynchronously without reloading the entire page.
//- This is done by using a technique called XMLHttpRequest,
//- which allows JavaScript to send and receive data from a server without reloading the page.