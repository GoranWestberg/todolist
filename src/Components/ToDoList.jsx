import { useState } from "react";
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.svg';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    
    function handleAddTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function handleDeleteTask(index) {
        setTasks(t => t.filter((_, i) => i !== index))
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updTasks = [...tasks];    
            [updTasks[index], updTasks[index - 1]] = [updTasks[index - 1], updTasks[index]];
            setTasks(updTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updTasks = [...tasks];    
            [updTasks[index], updTasks[index + 1]] = [updTasks[index + 1], updTasks[index]];
            setTasks(updTasks);
        }
    }

    function clearTasks() {
        setTasks([]);
    }

    return (<>
        <div className="toDoList">
        <h1 id="toDoList-title">To Do List</h1>
            <div>
                <input type="text" placeholder="Add a new task" value={newTask} onChange={handleInputChange} /> <br />
                <button id="toDoList-taskAddButton" onClick={handleAddTask}>Add task</button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li className="toDoList-task" key={index}>
                       <span className="toDoList-taskText"> {task} </span>
                    <button className="toDoList-taskDeleteButton" onClick={() => handleDeleteTask(index)}> Delete </button>
                    <button className="toDoList-moveTaskButton" onClick={() => moveTaskUp(index)}>⬆️</button>
                    <button className="toDoList-moveTaskButton" onClick={() => moveTaskDown(index)}>⬇️</button>
                    </li>
                )}
            </ol>
            {
                tasks.length > 0 ? <button id="toDoList-clearTasks" onClick={clearTasks}>Clear tasks</button> : <span>You have no pending tasks!</span>
            }
        </div>

        <footer>
            &copy; {new Date().getFullYear()} Goran Dirk Westberg <br />
            <a href="https://www.linkedin.com/in/gorandwestberg/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn"/>
            </a>
            <a href="https://github.com/GoranWestberg" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub"/>
            </a>
        </footer>
    </>);
}

export default ToDoList;