import {FC, useContext, useEffect} from 'react'
import { AppBar } from '@/components/AppBar'
import { AuthContext } from '@/lib/context'

export const UserPage:FC = () => {
  const {userDto} = useContext(AuthContext)

  useEffect(() => {
    console.log(userDto)
  }, [])

  return (
    <>
      <AppBar/>
      <div>
        <strong>Ваше имя: {userDto.name}</strong>
        <strong>Ваш email: {userDto.email}</strong>
      </div>
    </>
  )
}