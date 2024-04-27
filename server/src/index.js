const express = require('express')
require('dotenv').config()
const cors = require('cors')
const prisma = require('./db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    allowedHeaders: ['Origin', "X-Requested-With", "Content-Type", "Accept"],
    credentials: true
}))
app.use(cookieParser())

async function getTokens(payload) {
    const accessToken = jwt.sign(JSON.stringify(payload), process.env.ACCESS_SECRET)
    const refreshToken = jwt.sign(JSON.stringify(payload), process.env.REFRESH_SECRET)
  
    const candidateToken = await prisma.refreshToken.findUnique({
        where: {userId: payload.username}
    })
    
    if (candidateToken) {
        await prisma.refreshToken.update({
            where: { userId: payload.username },
            data: { tokenBody: refreshToken }
        })
        return { accessToken, refreshToken }
    }
    
    await prisma.refreshToken.create({
        data: {userId: payload.username, tokenBody: refreshToken }
    })
    return { accessToken, refreshToken }
}

app.post('/registration', async (request, response) => {
    try {
        const {
            name, email, password, petBreed, 
            petName, petAge, petWeight
        } = request.body

        const candidate = await prisma.User.findUnique({where: { email}})
        if (candidate) throw new Error('Such user already exist')

        const hashPassword = await bcrypt.hash(password, 4) 

        const user = await prisma.user.create({
            data: {
                name, email, password: hashPassword,
                pets: {
                    create: {
                        petName, petBreed, petAge, petWeight
                    }
                }
            }
        })

        const userDto = {username: user.username, email}
        const tokens = await getTokens(userDto)
        
        response.cookie('refreshToken', tokens.refreshToken, {httpOnly: true})
        response.status(201).send({ user: {...userDto}, tokens })
    } catch (error) {
        response.send(error)
    }
})

app.listen(process.env.PORT ?? 4000, () => {
    return console.log(`Work on ${process.env.PORT}`)
})