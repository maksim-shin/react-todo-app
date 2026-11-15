
function NewTaskForm({ addTask }) {

    return (
        <input className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onKeyDown={(event) => {
                if (event.key === "Enter" && event.target.value.trim() !== "") {
                    addTask(event.target.value)
                    event.target.value = ""
                } else if (event.key === "Escape") {
                    event.target.value = ""
                }

            }}
            onBlur={(event) => { event.target.value = "" }}
        />
    )
}

export default NewTaskForm