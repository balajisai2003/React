import Todo from "../models/todo";

import classes from './TodoItem.module.css';

const ListItem: React.FC<{item:Todo}> = (props) =>{
    return <li className={classes.item} key={props.item.id}>{props.item.text}</li>
}

export default ListItem;