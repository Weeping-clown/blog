import { Router } from "express";
const myrouter = require("./router.js");
var router = Router();

router.get("/", myrouter.indexShow);
router.get("/user", myrouter.indexShow);
router.post("/index", myrouter.indexShow);

// router.get('/test', myrouter.test)
export default router;
