import React from 'react'
import Header from './components/Header'
import Mainlist from './components/Mainlist'
import Register from './components/Register'
import Login from './components/Login.jsx'
import Sidebar from './components/Sidebar'


const App = () => {
  return (
    <>
    <div>App</div>
    <Header/>
    <Register/>
    <Login/>
    <Sidebar/>
    <Mainlist/>
    </>
  )
}

export default App