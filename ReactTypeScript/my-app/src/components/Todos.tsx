import React from "react";

import classes from "./Todos.module.css";
import Todo from "../models/todo";
import ListItem from "./TodoItem";

const Todos: React.FC<{items:Todo[], onRemoveTodo:(id:string)=>void}> = (props) => {
    return (
    <ul className={classes.todos}>
        {props.items.map((todo) => <ListItem item={todo} onRemoveTodo={props.onRemoveTodo.bind(null, todo.id)} />)}
    </ul>
    );
}

export default Todos;