import todosModel from "../models/todo.js";

export const addNewTodo = async(req,res)=>{
    try{
        const todo = new todosModel({
            ...req.body
        })
        todo.save();
        res.status(200).json(todo);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"});
    }
    
}

export const getAllTodos = async(req,res)=>{
    try{
        const {userId} = req.params;
        const allTodos = await todosModel.find({userId: userId});
        res.status(200).json(allTodos);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"});
    }
}

export const updateTodo = async(req,res)=>{
    try{
        const {todoId} = req.params;
        const updatedTodo = await todosModel.findByIdAndUpdate(todoId,req.body,{new:true});
        console.log(updatedTodo);
        res.status(201).json(updatedTodo);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"});
    }
}