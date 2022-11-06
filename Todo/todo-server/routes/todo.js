import express from "express";

const router = express.Router();

import { addNewTodo ,getAllTodos,updateTodo} from "../controllers/todo.js";

router.post("/addNewTodo",addNewTodo);
router.get("/getAllTodos/:userId",getAllTodos);
router.patch("/updateTodo/:todoId",updateTodo);

export default router;