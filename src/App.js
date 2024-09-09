
import './App.css';
import Header from './Components/header';
import TodoBox from './Components/todobox';
import React , { useState } from 'react';


function App() {
  const [tasksList, setTasks] = useState(["first item"]);
  
  // add tasks
  const addTask = (task) => {
    setTasks([...tasksList, task]);
  };

  // delete tasks
  const deleteTask = (id) => {
    setTasks(tasksList.filter((task, index) => index!==id));
  };

  
  return (
    <div className="App ">
     <Header/>
     <TodoBox onAdd={addTask} onDelete={deleteTask} todoList={tasksList}/>
    </div>
  );
}

export default App;
