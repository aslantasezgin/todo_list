import React from "react";
import './Todo.Styles.css';



const Todo = ({todo}) => {
    return(
            <ul className="todo-list">
                <li className="todo"> <p> {todo} </p> <span className="btn-edit">Edit</span> <span className="btn-delete">Delete</span> </li>
            </ul>
        )
}

export default Todo