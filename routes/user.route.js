import { Router } from "express";
import { userController } from "../controllers/index.js";

const router = Router();

router.route("/").get(userController.getUsers).post(userController.createUser);

export default router;
