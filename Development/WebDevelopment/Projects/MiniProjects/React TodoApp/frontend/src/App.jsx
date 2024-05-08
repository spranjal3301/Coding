import { useState } from 'react'
import './App.css'
import { CreateTodo } from './Components/CreateTodo';
import { Todos } from './Components/Todos';

 function App() {
  const [todos,UpdateTodosfn]=useState([]);


  (async function() {
    const res=await fetch("http://localhost:3000/todos");
    const data=await res.json()
    UpdateTodosfn(data.Alltodos);
  })();


  return (
      <div>
          <CreateTodo/>
          <Todos todos={todos}/>
      </div>
  );
}

export default App
