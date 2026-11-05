import Task from './Task'
function TaskList({tasks}) {
    return (
        tasks.map((task) => {
           return <Task
            task = {task}
            key = {task.id}
           />
        })
    );
}

export default TaskList