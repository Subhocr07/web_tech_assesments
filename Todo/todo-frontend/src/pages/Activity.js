import React, { useEffect } from 'react';
import "./Activity.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos, UpdateTheTodo, updateTodo } from '../redux/features/todoSlice';
import moment from "moment";

const Activity = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));
    const { todos } = useSelector(state => ({ ...state.todo }))
    useEffect(() => {
        dispatch(getAllTodos(user.result._id))
    }, [])

    const handlePending = (e, todoId) => {
        const findTodo = todos.find((todo) => todo._id === todoId);
        const updatedTodo = { ...findTodo, startDate: moment().format("hh:mm:ss"), status: "ongoing" };
        const container = todos.map((todo) => {
            if (todo._id === todoId) {
                return updatedTodo;
            }
            return todo;
        })
        dispatch(updateTodo({ updatedTodo, todoId }))
        dispatch(UpdateTheTodo(container));
    }

    const handleOngoing = (e, todoId) => {
        if (e.target.value === "pause") {
            const findTodo = todos.find((todo) => todo._id === todoId);
            var startTime = moment(findTodo.startDate, 'HH:mm:ss');
            var endTime = moment(new Date(), 'HH:mm:ss');

            // calculate total duration
            var duration = moment.duration(endTime.diff(startTime));
            const totalDiff1 = parseInt(duration.asMinutes());
            const totalDiff2 = Number(findTodo.startDate)+totalDiff1;
            const updatedTodo = { ...findTodo, startDate: "0", endDate: "0", status: "onhold", totalTime: String(totalDiff2) };
            const container = todos.map((todo)=>{
                if(todo._id === todoId){
                    return updatedTodo;
                }
                return todo;
            })
            dispatch(updateTodo({updatedTodo,todoId}))
            dispatch(UpdateTheTodo(container));
        }
    }
    return (
        <div className='parent'>
            <div className='topbar'>
                <h3>Hi {user.result.name}</h3>
            </div>
            <div className='second-parent'>
                <div className='leftbar'></div>
                <div className='third-container'>
                    <div className='add-activity-btn-nav'><button onClick={() => navigate("/addTodo")}>Add New Activity</button></div>
                    <div className='main-content'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Activity</th>
                                    <th>Status</th>
                                    <th>Time Taken</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos.length && todos.map((todo, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{todo.todo}</td>
                                            <td>{todo.status}</td>
                                            <td>{todo.totalTime}</td>
                                            <td>
                                                {todo.status === "pending" && <button onClick={(e) => handlePending(e, todo._id)} value="start">start</button>}
                                                {todo.status === "ongoing" && <button value="completed">end</button>}
                                                {todo.status === "ongoing" && <button onClick={(e) => handleOngoing(e, todo._id)} value="pause">pause</button>}
                                                {todo.status === "onhold" && <button value="resume">resume</button>}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity