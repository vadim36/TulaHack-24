import { FC, createElement, useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { authRoutes, guestRoutes } from "@/lib/routing/routes"
import { AuthContext } from "@/lib/context"
import {parse} from 'valibot'
import { LoginUserScheme, RegUserScheme } from "@/lib/validation"
import $api from "@/lib/http"

export const AppRouter:FC = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [userDto, setUserDto] = useState<TUserDto>({})

    async function login(loginData: ILogFormData) {
        try {
            const data = parse(LoginUserScheme, loginData)
            const userData = await $api.post('/auth/login', data)
            setIsAuth(true)
            setUserDto(userData.data)
            localStorage.setItem('user', JSON.stringify(userData.data))
            return localStorage.setItem('token', JSON.stringify(userData.data.tokens.refreshToken))
        } catch (error: unknown) {
            alert(error)
        }
    }

    async function registration(regData: IRegFormData) {
        try {
            const data = parse(RegUserScheme, regData)
            const userData = await $api.post('/auth/registration', data)
            setIsAuth(true)
            setUserDto(userData.data)
            localStorage.setItem('user', JSON.stringify(userData.data))
            return localStorage.setItem('token', JSON.stringify(userData.data.tokens.accessToken))
        } catch (error: unknown) {
            alert(error)
        }
    }

    async function logout() {
        try {
            await $api.post('/auth/logout', {
                //@ts-ignore
                refreshToken: userDto.tokens.refreshToken
            })
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            setIsAuth(false)
            return setUserDto({})
        } catch (error: unknown) {
            return alert(error)
        }
    }

    function checkAuth() {
        const candidate = localStorage.getItem('user')
        if (!candidate)  {
            setUserDto({})
            return setIsAuth(false)
        }
        setUserDto(JSON.parse(candidate))
        return setIsAuth(true)
    }

    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth, userDto, login, registration, logout
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