import express from "express";
import {create,getpost,like,doComment} from "../controlers/post.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getpost",  getpost);
router.post("/like",like);
router.post("/docomment",doComment);
export default router;