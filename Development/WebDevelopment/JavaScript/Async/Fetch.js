{/* <body>
 /   <button>Fetch Data</button>
    <h3>NULL</h3>

</body> */}
const btn=document.querySelector("button");
const h3=document.querySelector("h3");

btn.addEventListener("click",fetchData);

      async function fetchData(){
            const response=await fetch("https://fakerapi.it/api/v1/persons"); //*By default GET request
            const data=await response.json();
    
            h3.innerText=JSON.stringify(data);
            console.log(data);
}








