interface IRoute {
    path: Paths,
    element: ReactElement
}

interface IAuthContext {
    isAuth: boolean,
    userDto: IUserDto,
    registration: (regData: IRegFormData) => void,
    login: (loginData: ILogFormData) => void,
    logout: () => void
}

type TUserDto = {
    user: {
        name: string,
        userId: string,
        email: string
    },
    tokens: {
        accessToken: string,
        refreshToken: string
    }
} | {}

interface UserData {
    name: string,
    email: string,
    password: string
}

type TBreed = 'Кошка' | 'Собака' | 'Крыса' | 'Лягушка' | 'Черепаха' | 'Пони'

interface PetData {
    petBreed: TBreed,
    petName: string,
    petAge: number | '',
    petWeight: number | ''
}

type IRegFormData = UserData & PetData
type ILogFormData = Omit<UserData, 'name'>

interface ILink {
    title: string,
    path: Paths
}

interface TResponsePet {
    breed: TBreed,
    name: string,
    age: number,
    weight: number,
    petId: string,
    ownerId: string
}

interface ITask {
    taskBody: string,
    taskStatus: Statuses
}