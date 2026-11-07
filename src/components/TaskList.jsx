import Task from './Task'
function TaskList({tasks, toggleTask}) {
    return (
        tasks.map((task) => {
           return <Task
            task = {task}
            key = {task.id}
            toggleTask = {toggleTask}
           />
        })
    );
}

export default TaskList