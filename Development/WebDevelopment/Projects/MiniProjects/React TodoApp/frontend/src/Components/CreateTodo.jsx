export function CreateTodo(){
    
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            gap:7
            }}>

            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Description" />
            
            <button>Add Todo</button>
        </div>
    )
 }
// onClick={() => {
//     fetch("http://localhost:3000/todos", {
//     method: "POST",
//     body: JSON.stringify({
//                  title: title,
//                  description: description
//     }),
//     headers: {
//     "contentType": "application/json"
//     }
//     })
//   }
