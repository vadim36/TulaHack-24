import { User } from "@prisma/client"

export default class UserDto {
  userId: string
  name: string
  email: string
  
  constructor(model: User) {
    this.userId = model.username
    this.name = model.name
    this.email = model.email
  }
}