import {FC, useState, ChangeEvent, FormEvent, useContext} from 'react'
import { AuthContext } from '@/lib/context'
import { Link } from 'react-router-dom'
import { Paths } from '@/lib/enums'

const INITIAL_FORM_STATE: ILogFormData = {
    email: '',
    password: ''
}

export const LoginForm:FC = () => {
    const [logFormData, setLogFormData] = useState<ILogFormData>(INITIAL_FORM_STATE)
    const {login} = useContext(AuthContext)

    async function submitHandler(event: FormEvent) {
        event.preventDefault()
        return await login(logFormData)
    }

    return (
        <form onSubmit={submitHandler} className='bg-slate-700/65 p-2 rounded-md'>
            <fieldset className='flex flex-col'>
                <legend className='text-white text-mono text-3xl font-semibold'>
                  Войти
                </legend>
                <input type="text" 
                  placeholder='Ваш email...'
                  value={logFormData.email} 
                  required
                  className='border-2 border-[#403569] rounded-md
              bg-[#FEB1AF] placeholder:text-[#564a82] p-2 text-xl outline-0'
                  minLength={8}
                  maxLength={64}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    return setLogFormData((prev: ILogFormData) => {
                        return {...prev, email: event.target.value}
                    })
                  }} 
                />
                <input type="password" 
                  placeholder='Пароль...'
                  value={logFormData.password}
                  minLength={3}
                  required
                  className='border-2 border-[#403569] rounded-md
            bg-[#FEB1AF] placeholder:text-[#564a82] p-2 text-xl outline-0'
                  maxLength={32}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    return setLogFormData((prev: ILogFormData) => {
                        return {...prev, password: event.target.value}
                    })
                  }} 
                />
            </fieldset>
            <label>
              Нет аккаунта?
              <Link to={Paths.registration}>
                <button className='px-2 text-lg border-1 bg-slate-800 
                  rounded-md text-white'>Зарегистрироваться</button>
              </Link>
            </label>
            <br />
            <button className='bg-[#393059] p-2 rounded-lg relative active:top-1
            text-white text-lg ml-2 text-center'>Войти</button>
        </form>
    )
}