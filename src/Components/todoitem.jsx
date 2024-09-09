import React from "react";


const TodoItem = (props)=>{
    return (
        <li className="todo-list-item">{props.todoItem} 
            <span 
            onClick={()=>{props.deleteTodo(props.id)}}
        >
                <img src="./images/delete.png" alt="delete icon" />
            </span>
        </li>

    );

    

};

export default TodoItem;