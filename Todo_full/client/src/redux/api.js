import axios from "axios";

const API = axios.create({baseURL:"http://localhost:5000"});



export const userRegister = (formValue) => API.post("/api/users/userRegister",formValue);
export const userLogin = (formValue) => API.post("/api/users/userLogin",formValue);

export const addNewTodo = (formValue) =>API.post("/api/todos/addNewTodo",formValue);
export const getAllTodos = (userId) =>API.get(`/api/todos/getAllTodos/${userId}`)
export const updateTodo = (updatedTodo,todoId) =>API.patch(`/api/todos/updateTodo/${todoId}`,updatedTodo)


