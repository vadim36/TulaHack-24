import express from 'express'
import {config} from 'dotenv'
import authRouter from './routes/authRouter'
import cookieParser from 'cookie-parser'
import errorMiddleware from './middlewares/errorMiddleware'
import cors from 'cors'

config()
const app = express()
const PORT = process.env.PORT ?? 7000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    allowedHeaders: ['Origin', "X-Requested-With", "Content-Type", "Accept"],
    credentials: true
}))
app.use('/auth', authRouter)
app.use(errorMiddleware)

app.listen(PORT, () => console.log(`Work on ${PORT}`))