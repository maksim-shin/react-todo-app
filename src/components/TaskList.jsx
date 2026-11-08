import Task from './Task'
function TaskList({ tasks, toggleTask, deleteTask, updateTask }) {
    return (
        tasks.map((task) => {
            return <Task
                task={task}
                key={task.id}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
            />
        })
    );
}

export default TaskList