import {FC, useState, ChangeEvent, FormEvent, useContext} from 'react'
import { AuthContext } from '@/lib/context'

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
        <form onSubmit={submitHandler}>
            <fieldset>
                <legend>Войти</legend>
                <input type="text" 
                  placeholder='Ваш email...'
                  value={logFormData.email} 
                  required
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
                  maxLength={32}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    return setLogFormData((prev: ILogFormData) => {
                        return {...prev, password: event.target.value}
                    })
                  }} 
                />
            </fieldset>
            <button>Войти</button>
        </form>
    )
}