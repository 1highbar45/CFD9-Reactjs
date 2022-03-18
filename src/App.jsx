import { useState, useEffect } from 'react'
import Accordion from './components/Accordion'
import { CountDownBox } from './components/CountDownBox'
import RegisterForm from './components/RegisterForm'
import ToDoList from './components/ToDoList'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const TODO_APP_KEY_STORAGE = 'TODO_APP'

function App() {
  // const [toDoList, setToDoList] = useState([])

  // useEffect(() => {
  //   const toDoList = localStorage.getItem(TODO_APP_KEY_STORAGE)

  //   if (toDoList) {
  //     setToDoList(JSON.parse(toDoList))
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(TODO_APP_KEY_STORAGE, JSON.stringify(toDoList))
  // }, [toDoList])


  // const handleAdd = (value) => {
  //   setToDoList([
  //     {
  //       id: Date.now() + '-' + Math.random(),
  //       name: value,
  //       isCompleted: false
  //     },
  //     ...toDoList
  //   ]);
  // }

  // const handleCompleted = (task) => {
  //   task.isCompleted = true
  //   setToDoList([...toDoList])
  // }

  // const handleUndone = (task) => {
  //   task.isCompleted = false
  //   setToDoList([...toDoList])
  // }

  return (
    <div className="App">
      {/* <CountDownBox color="red" /> */}
      {/* <CountDownBox color="brown" />
      <CountDownBox color="green" /> */}
      {/* <Accordion
        title='Section 1'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe incidunt dolor iure voluptatibus repellat, magnam natus commodi assumenda, aut laborum atque repudiandae similique, temporibus aperiam? Aperiam libero reprehenderit consequuntur?
      </Accordion> */}
      <ToDoList toDoList={toDoList} handleAdd={handleAdd} handleCompleted={handleCompleted} handleUndone={handleUndone} />
      {/* <RegisterForm /> */}
      {/* <MainLayout> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* </MainLayout> */}
    </div>
  )
}

export default App
