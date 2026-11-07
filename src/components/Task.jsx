function Task({task, toggleTask}) {
    return (
        <li className={task.completed === true ? "completed" : ""}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => {toggleTask(task.id)}} 
                />
                <label>
                    <span className="description">{task.description}</span>
                    <span className="created">created 17 seconds ago</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
        </li>
    );
}

export default Task
