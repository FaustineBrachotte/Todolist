import AddToDo from "./components/AddToDo"
import ToDoList from "./components/ToDoList"

function App() {

  return (
    <div className="d-flex flex-row justify-content align-item p-20">
      <div className="card container p-20">
        <h1 className="mb-20">To do list</h1>
        < AddToDo />
        < ToDoList />
      </div>
    </div>
  )
}

export default App
