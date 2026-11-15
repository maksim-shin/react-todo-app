
import { useState, useRef, useEffect } from 'react';
import './App.css'
import TaskList from './components/TaskList'
import NewTaskForm from './components/NewTaskForm'
import Footer from './components/Footer'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Text 1",
      completed: true,
      created: new Date()
    },
    {
      id: 2,
      description: "Text 2",
      completed: true,
      created: new Date()
    },
    {
      id: 3,
      description: "Text 3",
      completed: false,
      created: new Date()
    },
  ])

  


  const [filter, setFilter] = useState("all")

  function toggleTask(id) {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    })
    setTasks(updatedTask)
  }

  function deleteTask(id) {
    const updatedTaskList = tasks.filter((task) => {
      return (task.id !== id)
    })
    setTasks(updatedTaskList)
  }

  function updateTask(id, newDescription) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          description: newDescription
        }

      }
      return task;
    })
    setTasks(updatedTasks)
  }

  function filterTasks(tasks) {
    if (filter === "all") {
      return tasks
    } else if (filter === "active") {
      return tasks.filter((task) => {
        return task.completed === false
      })
    } else if (filter === "completed") {
      return tasks.filter((task) => {
        return task.completed === true
      })
    }
  }

  function deleteCompleted() {
    const updatedTasks = tasks.filter((task) => task.completed === false)
    setTasks(updatedTasks)
  }

  function countActive() {
    const countActiveTasks = (tasks.filter((task) => task.completed === false)).length
    return countActiveTasks;
  }

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">

          <TaskList
            tasks={filterTasks(tasks)}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />

          <Footer tasks={tasks}
            filter={filter}
            setFilter={setFilter}
            deleteCompleted={deleteCompleted}
            countActive={countActive}
          />

        </section>
      </section>
    </>
  )
}

export default App
