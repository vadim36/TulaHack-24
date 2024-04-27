import { Request, Response } from "express"
import prisma from "../database"
import ApiError from "../exceptions/apiError"
import { PetRegScheme } from "../lib/validation/authValidation"
import { parse, string } from "valibot"

class PetsController {
    async getUserPets(
        request: Request<{accessToken: string}>, 
        response: Response, next: Function
    ) {
        try {
            const pets = await prisma.pet.findMany({
                where: {
                    ownerId: request.params.accessToken
                }
            })
            console.log(request.query.accessToken)
            if (!pets) throw ApiError.UnauthtorizedError()
            response.setHeader('Content-Type', 'application/json')
            response.send(pets)
        } catch (error: unknown) {
            return  next(error as Error)
        }
    }

    async addNewPet(
        request: Request<{}, {}, {pet: Pet, userId: string}>, 
        response: Response, next: Function
    ) {
        try {
            const petData = parse(PetRegScheme, request.body.pet)
            const ownerId = parse(string(), request.body.userId)

            const pet = await prisma.pet.create({
                data: {
                    ownerId,
                    age: petData.petAge,
                    breed: petData.petBreed,
                    name: petData.petName,
                    weight: petData.petWeight,
                }
            })

            return response.status(201).send(pet)
        } catch (error: unknown) {
            return next(error as Error)
        }
    }
}

export default new PetsController()