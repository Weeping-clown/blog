import { Router } from 'express'
const myrouter = require('./router.js')
var router = Router()
// index router
router.get('/', myrouter.indexShow)
router.get('/user', myrouter.indexShow)

export default router
