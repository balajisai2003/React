import { useRef,  useContext } from "react";

import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = (porps)=>{
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0){
            // throw an error
            return;
        }

        todosCtx.addTodo(enteredText);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text</label>
            <input ref={todoTextInputRef} type="text" id="text" />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;
