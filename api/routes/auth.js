import express from "express";
import { loginUser, getAllAuthData } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", loginUser);
router.get("/data", getAllAuthData);

export default router;
