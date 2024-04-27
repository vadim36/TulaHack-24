import UserDto from "../dto/userDto"
import {config} from 'dotenv'
import {JwtPayload, sign, verify} from 'jsonwebtoken'
import prisma from "../database"
import { RefreshToken } from "@prisma/client"

config()

class TokenService {
  generateTokens(payload: UserDto):Tokens {
    const accessToken = sign(JSON.stringify(payload), process.env.ACCESS_SECRET as string)
    const refreshToken = sign(JSON.stringify(payload), process.env.REFRESH_SECRET as string)
  
    return {
      accessToken, refreshToken
    }
  }

  async saveTokens(userId: string, refreshToken: string):Promise<RefreshToken> {
    const candidateToken = await prisma.refreshToken.findUnique({where: {userId}})
    if (candidateToken) {
      return await prisma.refreshToken.update({
        where: { userId },
        data: { tokenBody: refreshToken }
      })
    }
    return await prisma.refreshToken.create({
      data: {userId, tokenBody: refreshToken }
    })
  }

  async removeToken(refreshToken: string):Promise<RefreshToken> {
    return await prisma.refreshToken.delete({
      where: {tokenBody: refreshToken}
    })
  }

  validateAccessToken(accessToken: string):JwtPayload | string | null {
    try {
      return verify(accessToken, process.env.ACCESS_SECRET as string)
    } catch (error: unknown) {
      return null
    }
  }

  validateRefreshToken(refreshToken: string):JwtPayload | string | null {
    try {
      return verify(refreshToken, process.env.REFRESH_SECRET as string)
    } catch (error: unknown) {
      return null
    }
  }

  async findToken(refreshToken: string):Promise<RefreshToken | null> {
    return await prisma.refreshToken.findUnique({ where: {tokenBody: refreshToken}})
  }
}

export default new TokenService()