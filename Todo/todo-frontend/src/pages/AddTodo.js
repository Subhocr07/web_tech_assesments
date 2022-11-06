import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../redux/features/todoSlice';
import {toast} from "react-toastify";
// import moment from "moment";

const AddTodo = () => {
    const user = JSON.parse(localStorage.getItem("profile"));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [todo,setTodo] = useState("");
    const GoToActivityPage = (e) =>{
        e.preventDefault();
        const form = {
            todo:todo,
            startDate:"0",
            endDate:"0",
            totalTime:"0",
            status:"pending",
            userId:user.result._id
        }
        dispatch(addNewTodo({form,navigate,toast}));
    }
  return (
    <div>
        <h1>Add Your Todo</h1>
        <form onSubmit={GoToActivityPage}>
            <input
                type="text"
                placeholder='Add Todo'
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddTodo