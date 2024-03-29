import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const data = res.data;
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    }

    getTodos();
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    <div className="App">
      <h1>Todos</h1>
      <div className="todos">
        {todos.map((todo, index) => {
          return (
            <div key={index} style={{
              padding:"20px"
            }}>
              <span>Todo: {todo.title}</span>
              <input type="checkbox" checked={todo.completed}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
