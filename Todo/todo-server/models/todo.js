import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    todo:{type:String,required:true},
    startDate:{type:String,required:true},
    endDate:{type:String,required:true},
    totalTime:{type:String,required:true},
    status:{type:String,required:true},
    userId:{type:String,required:true}
})

const todosModel = mongoose.model("Todo",todoSchema);
export default todosModel;