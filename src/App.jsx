import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Accordion from './components/Accordion'
import { CountDownBox } from './components/CountDownBox'
import RegisterForm from './components/RegisterForm'
import ToDoList from './components/ToDoList'
import MainLayout from './layouts/MainLayout'
import Cooperate from './pages/Cooperate'
import Course from './pages/Course'
import CourseDetail from './pages/CourseDetail'
import Home from './pages/Home'
import Login from './pages/Login'
import Page404 from './pages/Page404'
import Payment from './pages/Payment'
import Profile from './pages/Profile'
import Coin from './pages/Profile/Coin'
import ProfileCourse from './pages/Profile/Course'
import Info from './pages/Profile/Info'
import ProfilePayment from './pages/Profile/Payment'
import Project from './pages/Profile/Project'
import Register from './pages/Register'
import Team from './pages/Team'

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
      {/* <ToDoList toDoList={toDoList} handleAdd={handleAdd} handleCompleted={handleCompleted} handleUndone={handleUndone} /> */}
      {/* <RegisterForm /> */}
      {/* <MainLayout> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Course /> */}
      {/* <Profile /> */}
      {/* </MainLayout> */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/khoa-hoc" element={<Course />} />
          <Route path="/lien-he" element={<Cooperate />} />
          <Route path="/khoa-hoc/:slug" element={<CourseDetail />} />
          <Route path="/ca-nhan" element={<Profile path="/ca-nhan" />} >
            <Route index element={<Info />} />
            <Route path="khoa-hoc" element={<ProfileCourse />} />
            <Route path="du-an" element={<Project />} />
            <Route path="thanh-toan" element={<ProfilePayment />} />
            <Route path="coin" element={<Coin />} />
          </Route>
          <Route path="/thanh-vien" element={<Team />} />
          <Route path="/huong-dan-thanh-toan" element={<Payment />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes >
    </div >
  )
}

export default App
