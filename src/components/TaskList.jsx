import Task from './Task'

function TaskList({ tasks, toggleTask, deleteTask, updateTask}) {
    return (
        <ul className="todo-list">
            {tasks.map((task) => {
                return (
                    <Task
                        task={task}
                        key={task.id}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
        
                    />
                )
            })}
        </ul>

    );
}

export default TaskList