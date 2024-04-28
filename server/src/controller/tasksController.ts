import { Request, Response } from "express"
import { parse, string } from "valibot"
import { TaskScheme } from "../lib/validation/authValidation"
import prisma from "../database"
import { Statuses } from "@prisma/client"
import ApiError from "../exceptions/apiError"

class TasksController {
    async addNew(
        request: Request<{},{}, {task:ITask, ownerId: string}>, 
        response: Response, next: Function
    ) {
        try {
            const taskData = parse(TaskScheme, {
                taskBody: request.body.task.taskBody,
                taskStatus: request.body.task.taskStatus
            })

            const ownerId = parse(string(), request.body.ownerId)

            const data = await prisma.task.create({
                data: {
                    taskBody: taskData.taskBody,
                    taskStatus: Statuses.Todo,
                    ownerId
                }
            })

            if (!data) throw ApiError.UnauthtorizedError()
            response.status(201).send(data)
        } catch (error: unknown) {
            next(error as Error)
        }
    }

    async getAll(request: Request<{}, {}, {}, {ownerId: string}>, response: Response, next: Function) {
        try {
            const ownerId = parse(string(), request.query.ownerId)

            const tasks = await prisma.task.findMany({
                where: { ownerId }
            })

            if (!tasks) throw ApiError.UnauthtorizedError()
            response.setHeader('Content-Type', 'application/json')
            response.send(tasks)
        } catch (error: unknown) {
            next(error as Error)
        }
    }

    async remove(
        request: Request<{}, {}, {taskId: string}>, 
        response: Response, next: Function
    ) {

        try {
            const taskId = parse(string(), request.body.taskId)
            await prisma.task.delete({ where: {taskId}})
            response.status(201)
        } catch (error: unknown) {
            next(error as Error)
        }
    }
}

export default new TasksController()