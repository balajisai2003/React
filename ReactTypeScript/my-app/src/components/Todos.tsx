import React, {useContext} from "react";

import classes from "./Todos.module.css";
import ListItem from "./TodoItem";
import {TodosContext} from "../store/todos-context";

const Todos: React.FC = (props) => {

    const todosCtx = useContext(TodosContext);

    return (
    <ul className={classes.todos}>
        {todosCtx.items.map((todo) => <ListItem item={todo} onRemoveTodo={todosCtx.removeTodo.bind(null, todo.id)} />)}
    </ul>
    );
}

export default Todos;