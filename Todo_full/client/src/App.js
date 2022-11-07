import {useEffect} from "react";
import './App.css';

import { useDispatch} from "react-redux";
import { setUser } from "./redux/features/userSlice";

import Login from './pages/Login';
import Register from './pages/Register';
import Activity from "./pages/Activity";
import AddTodo from "./pages/AddTodo";


import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(()=>{
    if(user){
      dispatch(setUser(user));
    } 
    //eslint-disable-next-line
  },[])
  return (
    <Router>
      <ToastContainer/>
      <div>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/activity" exact element={<Activity/>} />
          <Route path="/addTodo" exact element={<AddTodo/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
