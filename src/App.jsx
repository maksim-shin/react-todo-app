
import './App.css'
import TaskList from './components/TaskList'
import NewTaskForm from './components/NewTaskForm'
import Footer from './components/Footer'

function App() {

  const tasks = [
    {
      id: 1,
      description: "Text 1",
      completed: true,
      created: new Date()
    },
    {
      id: 2,
      description: "Text 2",
      completed: false,
      created: new Date()
    },
    {
      id: 3,
      description: "Text 3",
      completed: false,
      created: new Date()
    },
  ]
  

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
      <section className="main">
        <ul className="todo-list">
          <TaskList tasks={tasks}/>
          <li className="editing">
            <div className="view">
              <input className="toggle"
              type="checkbox" />
              <label>
                <span className="description">Editing task</span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
              <input type="text"
              className="edit"
              value="Editing task" />
            </li>
          </ul>
          <Footer />
          
        </section>
      </section>
  </>
  )
}

export default App
