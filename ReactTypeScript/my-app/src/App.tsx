import { useState } from 'react';

import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([new Todo ("Learn React"), new Todo ("Learn TypeScript")]);

  const addTodoHandler=(text:string)=>{
    const newTodo = new Todo (text);
    setTodos((prevTodos: Todo[])=>{
      return [...prevTodos, newTodo];
    })
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
