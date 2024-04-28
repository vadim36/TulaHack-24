import { Router } from "express"
import tasksController from "../controller/tasksController"

const tasksRouter = Router()

tasksRouter.post('/addNew', tasksController.addNew)
tasksRouter.post('/delete', tasksController.remove)
tasksRouter.get('/getAll', tasksController.getAll)

export default tasksRouter