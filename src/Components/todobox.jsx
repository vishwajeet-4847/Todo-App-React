import React from "react";
import TodoInput from "./todoinput";
import TodoList from "./todolist";


const TodoBox = (props)=>{
   
    

    return (
        <div className="todobox">
            <TodoInput onAdd={props.onAdd} />
            <TodoList todoList={props.todoList} deleteTodo={props.onDelete}/>
           
        </div>
    );

};
export default TodoBox;