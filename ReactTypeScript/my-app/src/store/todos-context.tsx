import React, { ReactNode, createContext } from "react";
import { useState } from "react";

import Todo from "../models/todo";

const TodosContext = createContext<{
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}>({
    items: [],
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {}
});




const TodosContextProvider: React.FC<{children: ReactNode}> = (props) => {

    const [todos, setTodos] = useState<Todo[]>([new Todo ("Learn React"), new Todo ("Learn TypeScript")]);

    const addTodoHandler=(text:string)=>{
      const newTodo = new Todo (text);
      setTodos((prevTodos: Todo[])=>{
        return [...prevTodos, newTodo];
      })
    }
  
    const removeTodoHandler = (todoId: string) => {
      setTodos((prevTodos: Todo[]) => {
        return prevTodos.filter(todo => todo.id !== todoId);
      });
    }

    const contextValue = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
};

export default TodosContextProvider;