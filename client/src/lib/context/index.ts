import { createContext } from "react"

export const AuthContext = createContext<IAuthContext>({
    isAuth: false,
    userDto: {},
    login: async () => {},
    registration: async () => {},
    logout: () => {}
})