import React from "react";


import Todo from "../models/todo";
import ListItem from "./TodoItem";

const Todos: React.FC<{items:Todo[]}> = (props) => {
    return (
    <ul>
        {props.items.map((todo) => <ListItem item={todo} />)}
    </ul>
    );
}

export default Todos;