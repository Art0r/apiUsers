import express from 'express';
import UserController from './controllers/UserController';

const router = express.Router();

router.get("/user", UserController.getUsers);
router.get("/user/:id", UserController.getUserById);
router.post("/user", UserController.createUser);
router.put("/user/:id", UserController.modifyUser);
router.delete("/user/:id", UserController.deleteuser);
router.get("/user/email/:email", UserController.getUserByEmail);

export default router;