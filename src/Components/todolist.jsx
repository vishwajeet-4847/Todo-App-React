import React from "react";
import TodoItem from "./todoitem";

const TodoList = (props) =>{
   
    if(props.todoList.length === 0){
        return <p className="todo-list-para">No tasks to show</p>
    }
    return (
        <ul className="todolist">
           {props.todoList.map((todo,index) => <TodoItem todoItem={todo} key={index} deleteTodo={props.deleteTodo} id={index}/>)}
        </ul>
    );
};

export default TodoList;