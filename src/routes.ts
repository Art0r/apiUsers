import express from 'express';
import UserController from './controllers/UserController';

const router = express.Router();

router.get("/user", UserController.getUsers);
router.get("/user/:id", UserController.getUserById);
router.post("/user", UserController.createUser);
router.put("/user/:id", UserController.modifyUser);

export default router;