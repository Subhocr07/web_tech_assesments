import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const addNewTodo = createAsyncThunk("todo/addNewTodo",async({form,navigate,toast},{rejectWithValue})=>{
    try{
        const response = await api.addNewTodo(form);
        if(response.data.message){
            return toast.error(response.data.message);
        }
        console.log("Sougata")
        toast.success("Todo Added Successfully");
        navigate("/activity");
        return response.data;
    }catch(error){
        return rejectWithValue(error.response.data);
    }
});

export const getAllTodos = createAsyncThunk("todo/getAllTodos",async(userId,toast,{rejectWithValue})=>{
    try{
        const response = await api.getAllTodos(userId);
        if(response.data.message){
            return toast.error(response.data.message);
        }
        console.log(response.data);
        return response.data;
    }catch(error){
        return rejectWithValue(error.response.data);
    }
});

export const updateTodo = createAsyncThunk("todo/updateTodo",async({updatedTodo,todoId,toast},{rejectWithValue})=>{
    try{
        const response = await api.updateTodo(updatedTodo,todoId);
        if(response.data.message){
            return toast.error(response.data.message);
        }
        console.log(response.data);
        return response.data;
    }catch(error){
        return rejectWithValue(error.response.data);
    }
});
const todoSlice = createSlice({
    name:"todo",
    initialState:{
        todos:[],
        todo:{},
        loading:true,
        error:""
    },
    reducers:{
        UpdateTheTodo:(state,action)=>{
            state.todos=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(addNewTodo.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(addNewTodo.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = "";
            state.todo=action.payload;
        })
        builder.addCase(addNewTodo.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload.message;
        })
        builder.addCase(getAllTodos.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(getAllTodos.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = "";
            state.todos = action.payload;
        })
        builder.addCase(getAllTodos.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload.message;
        })
        builder.addCase(updateTodo.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(updateTodo.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = "";
            state.todo = action.payload;
        })
        builder.addCase(updateTodo.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload.message;
        })
    }
})

export const {UpdateTheTodo} = todoSlice.actions;
export default todoSlice.reducer;