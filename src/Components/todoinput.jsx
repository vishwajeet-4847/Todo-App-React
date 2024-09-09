import React, { useState } from "react";

const TodoInput = (props) => {
    const [inputText , setInputText] = useState("");
    const handleChange = (e) => {
      const  text=e.target.value;
        setInputText(text);
    };
    return (
        <div className="todo-input-box">
            <input type="text" className="todo-input" placeholder="Add a new todo..." value={inputText} onChange={handleChange}/>
            <button  
            onClick={()=>{
                if(inputText.trim() === "") return;  // to prevent empty input
                props.onAdd(inputText);
                setInputText("");
            }}
            >Add Todo</button>
        </div>
    );
};

export default TodoInput;   