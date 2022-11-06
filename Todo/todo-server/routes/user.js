import express from "express";
// import auth from "../middlewares/auth.js";
const router = express.Router();

import { userRegister,userLogin } from "../controllers/user.js";

router.post("/userRegister",userRegister);
router.post("/userLogin",userLogin);
export default router;