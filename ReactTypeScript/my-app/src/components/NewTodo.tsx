import { useRef } from "react";

import classes from './NewTodo.module.css';
const NewTodo: React.FC<{onAddTodo: (text:string)=>void}> = (porps)=>{

    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0){
            // throw an error
            return;
        }

        porps.onAddTodo(enteredText);
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
