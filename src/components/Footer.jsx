import TasksFilter from "./TasksFilter"

function Footer({ filter, setFilter, deleteCompleted }) {
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <TasksFilter
                filter={filter}
                setFilter={setFilter}
            />
            <button onClick={deleteCompleted} className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer