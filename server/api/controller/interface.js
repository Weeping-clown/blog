import { Router } from "express";
const myrouter = require("./router.js");
var router = Router();

router.get("/", myrouter.indexShow);
router.get("/user", myrouter.indexShow);
export default router;
