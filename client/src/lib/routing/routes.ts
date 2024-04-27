import { LoginPage } from "@/pages/LoginPage"
import { Paths } from "../enums"
import { RegistrationPage } from "@/pages/RegistrationPage"
import { UserPage } from "@/pages/UserPage"
import { HomePage } from "@/pages/HomePage"
import { PetPage } from "@/pages/PetPage"

export const guestRoutes: IRoute[] = [
    {path: Paths.registration, element: RegistrationPage},
    {path: Paths.login, element: LoginPage},
    {path: Paths.all, element: RegistrationPage}
]

export const authRoutes: IRoute[] = [
    {path: Paths.user, element: UserPage},
    {path: Paths.home, element: HomePage},
    {path: Paths.pet, element: PetPage},
    {path: Paths.all, element: HomePage}
]