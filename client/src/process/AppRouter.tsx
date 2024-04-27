import { FC, createElement, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { authRoutes, guestRoutes } from "@/lib/routing/routes"
import { AuthContext } from "@/lib/context"
import {parse} from 'valibot'
import { LoginUserScheme, RegUserScheme } from "@/lib/validation"

export const AppRouter:FC = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [userDto, setUserDto] = useState<TUserDto>({})

    async function login(loginData: ILogFormData) {
        try {
            const data = parse(LoginUserScheme, loginData)
            alert(`User was created ${JSON.stringify(data)}`)
            setIsAuth(true)
            setUserDto({ name: 'Vadim', username: '', email: 'test@gmail.co'})
        } catch (error: unknown) {
            alert(error)
        }
    }

    async function registration(regData: IRegFormData) {
        try {
            const data = parse(RegUserScheme, regData)
            alert(`User was created ${JSON.stringify(data)}`)
            setIsAuth(true)
            setUserDto({ name: 'Vadim', username: '', email: 'test@gmail.co'})
        } catch (error: unknown) {
            alert(error)
        }
    }

    return (
        <AuthContext.Provider value={{
            isAuth, userDto, login, registration
        }}>
            <Routes>
                {isAuth 
                    ? authRoutes.map(({path, element}: IRoute) => {
                        return <Route key={path} path={path} element={createElement(element)}/>
                    })
                    : guestRoutes.map(({path, element}: IRoute) => {
                        return <Route key={path} path={path} element={createElement(element)}/>
                    })
                }
            </Routes>
        </AuthContext.Provider>
    )
}