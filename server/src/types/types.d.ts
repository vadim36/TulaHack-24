interface Tokens {
    accessToken: string,
    refreshToken: string
  }
  
type UserResponse = {
  user: UserDto,
  tokens: Tokens
}

type TBreed = 'Кошка' | 'Собака' | 'Крыса' | 'Лягушка' | 'Черепаха' | 'Пони'

interface Pet {
  petBreed: TBreed,
  petName: string,
  petAge: number,
  petWeight: number
}