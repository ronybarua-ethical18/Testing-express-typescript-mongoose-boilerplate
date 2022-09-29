import express, { Router } from "express";
import { userController } from "../modules/user";

const router: Router = express.Router();

router.post("createUser", userController.createUser);

export default router;
