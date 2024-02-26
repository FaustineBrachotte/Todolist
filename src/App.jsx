import AddToDo from "./components/AddToDo"
import ToDoList from "./components/ToDoList"
import { useState } from "react"

function App() {
  const [toDoList, setToDoList] = useState([]);

  function addToDo(content) {
    const toDo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false
    }
    setToDoList([...toDoList, toDo])
  }

  return (
    <div className="d-flex flex-row justify-content align-item p-20">
      <div className="card container p-20">
        <h1 className="mb-20">To do list</h1>
        <AddToDo addToDo={addToDo}/>
        <ToDoList />
      </div>
    </div>
  )
}

export default App
