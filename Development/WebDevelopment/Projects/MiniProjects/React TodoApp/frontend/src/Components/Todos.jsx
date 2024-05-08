export function Todos(props){
    const todos=props.todos;
    return (
        <div>
            {todos.map((todo)=>{
                    return (
                        <div>
                            <h2>{todo.title}</h2>
                            <h3>{todo.description}</h3>
                
                            <button>{todo.complete==true?"Done":"UnDone"}</button>    
                        </div>
                
                    )
                })
            }
        </div>
    )
}