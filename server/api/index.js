import { Router } from 'express'

import databases from './controller/interface'

// const Router = require("express");
// const databases = require("./controller/interface");

var router = Router();

// Add databases Routes
router.use(databases);

export default router;
// module.exports.router;
