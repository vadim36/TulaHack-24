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
            alert('User was created')
            setIsAuth(true)
            setUserDto({ name: 'Vadim', username: '', email: 'test@gmail.co'})
            return localStorage.setItem('user', JSON.stringify(data))
        } catch (error: unknown) {
            alert(error)
        }
    }

    async function registration(regData: IRegFormData) {
        try {
            const data = parse(RegUserScheme, regData)
            alert(`User was created`)
            const userData = await $api.post('/auth/registration', data)
            setIsAuth(true)
            setUserDto(userData)
            return localStorage.setItem('user', JSON.stringify(data))
        } catch (error: unknown) {
            alert(error)
        }
    }

    async function logout() {
        try {
            alert('You was exit')
            localStorage.removeItem('user')
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