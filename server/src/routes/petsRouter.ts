import { Router } from "express"
import petsController from "../controller/petsController"

const petsRouter = Router()

petsRouter.get('/getAll', petsController.getUserPets)
petsRouter.post('/add', petsController.addNewPet)

export default petsRouter