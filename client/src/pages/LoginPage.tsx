import {FC} from 'react'
import { LoginForm } from '@/components/LoginForm'

export const LoginPage:FC = () => {
  return (
    <div className='h-dvh bg-auto flex justify-center items-center' 
      style={{backgroundImage: 'url("@/../public/form.png")'}}>
      <LoginForm/>
    </div>
  )
}