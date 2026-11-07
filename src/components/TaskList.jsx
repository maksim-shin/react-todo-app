import Task from './Task'
function TaskList({ tasks, toggleTask, deleteTask }) {
    return (
        tasks.map((task) => {
            return <Task
                task={task}
                key={task.id}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
            />
        })
    );
}

export default TaskList