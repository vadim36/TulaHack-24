import { Router } from "express"
import petsController from "../controller/petsController"

const petsRouter = Router()

petsRouter.get('/getAll', petsController.getUserPets)
petsRouter.post('/add', petsController.addNewPet)
petsRouter.get('/get', petsController.getPet)

export default petsRouter