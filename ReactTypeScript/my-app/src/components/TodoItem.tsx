import Todo from "../models/todo";

import classes from './TodoItem.module.css';

const ListItem: React.FC<{item:Todo, onRemoveTodo:()=>void}> = (props) =>{
    return <li className={classes.item} onClick={props.onRemoveTodo} key={props.item.id}>{props.item.text}</li>
}

export default ListItem;