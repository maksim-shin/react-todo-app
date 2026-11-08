
import { useState } from "react";

function Task({ task, toggleTask, deleteTask, updateTask }) {

    const [editing, setEditing] = useState(false);
    const [description, setDescription] = useState(task.description);

    function handleKeyDown(event) {
        if(event.type ==="keydown" && event.key === "Enter") {
            updateTask(task.id, description)
            setEditing(false)
        } else if (event.type ==="keydown" && event.key === "Escape") {
            setDescription(task.description)
            setEditing(false)
        } else if (event.type === "blur") {
            updateTask(task.id, description)
            setEditing(false)
        }
    }

    return (
        <li className={`${editing ? "editing" : ""} ${task.completed === true ? "completed" : ""}`}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => { toggleTask(task.id) }}
                />
                <label>
                    <span className="description">{task.description}</span>
                    <span className="created">created 17 seconds ago</span>
                </label>
                <button onClick={() => { setEditing(true) }} className="icon icon-edit"></button>
                <button className="icon icon-destroy" onClick={() => { deleteTask(task.id) }}></button>
            </div>
            <input type="text"
                className="edit"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleKeyDown} />
        </li>
    );
}

export default Task
