import { User } from "@prisma/client"

export default class UserDto {
  userId: string
  email: string
  
  constructor(model: User) {
    this.userId = model.username
    this.email = model.email
  }
}