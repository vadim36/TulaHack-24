import {hash, compare} from 'bcrypt'
import UserDto from "../dto/userDto"
import prisma from "../database"
import tokenService from './tokenService'
import { config } from 'dotenv'
import ApiError from '../exceptions/apiError'
import type { RegistrationRequest } from '../controller/authController'
import { RefreshToken, User } from '@prisma/client'

config()

class UserService {
  async registration(registrationBody: RegistrationRequest):Promise<UserResponse> {
    const candidate = await prisma.user.findUnique({where: { 
      email: registrationBody.email
    }})
    if (candidate) throw ApiError.BadRequest('Such user already exist')
    
    const hashPassword = await hash(registrationBody.password, 4) 

    const user = await prisma.user.create({
      data: {
        name: registrationBody.name,
        email: registrationBody.email,
        password: hashPassword,
        pets: {
          create: {
            name: registrationBody.petName,
            age: registrationBody.petAge,
            weight: registrationBody.petWeight,
            breed: registrationBody.petBreed
          }
        }
      }
    })

    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens(userDto) 
    await tokenService.saveTokens(user.username, tokens.refreshToken)

    return {user: {...userDto}, tokens}
  }

  async login(email: string, password: string):Promise<UserResponse>  {
    const candidate = await prisma.user.findFirst({where: {email}})

    if (!candidate) throw ApiError.BadRequest('Such user does not exist')
    const isPasswordEquals:boolean = await compare(password, candidate.password)
    if (!isPasswordEquals) throw ApiError.BadRequest('The passwords do not equal')
    
    const userDto = new UserDto(candidate)
    const tokens: Tokens = tokenService.generateTokens(userDto)
    await tokenService.saveTokens(userDto.userId, tokens.refreshToken)

    return {user: userDto, tokens}
  }

  async logout(refreshToken: string):Promise<RefreshToken> {
    const candidateToken = await prisma.refreshToken.findFirst({
      where: {tokenBody: refreshToken}
    })
    if (!candidateToken) throw ApiError.BadRequest('Such user does not exist')
    return await tokenService.removeToken(candidateToken.tokenBody)
  }

  async refresh(refreshToken: string):Promise<UserResponse> {
    if (!refreshToken) throw ApiError.UnauthtorizedError()
    const userPayload = tokenService.validateRefreshToken(refreshToken)
    const tokenFromDb = await tokenService.findToken(refreshToken)
    if (!userPayload || !tokenFromDb) throw ApiError.UnauthtorizedError()
    
    const user = await prisma.user.findUnique({where: {username: tokenFromDb.userId}})
    const userDto = new UserDto(user!)
    
    const tokens: Tokens = tokenService.generateTokens(userDto)
    await tokenService.saveTokens(userDto.userId, tokens.refreshToken)
    return {user: userDto, tokens}
  }
}

export default new UserService()