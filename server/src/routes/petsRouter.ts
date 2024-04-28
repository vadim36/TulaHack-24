import { Router } from "express"
import petsController from "../controller/petsController"

const petsRouter = Router()

petsRouter.get('/getAll', petsController.getUserPets)
petsRouter.post('/add', petsController.addNewPet)
petsRouter.get('/get', petsController.getPet)
petsRouter.post('/delete', petsController.deletePet)

export default petsRouter