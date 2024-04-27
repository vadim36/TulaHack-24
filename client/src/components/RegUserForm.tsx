import {FC, ChangeEvent} from 'react'
import { Link } from 'react-router-dom'
import { Paths } from '@/lib/enums'

interface RegUserFormProps extends UserData {
    updateFields: (fields: Partial<IRegFormData>) => void
}

export const RegUserForm:FC<RegUserFormProps> = ({
    name, email, password , updateFields
}) => {
  return (
    <fieldset>
      <legend>Регистрация пользователя</legend>
      <input type="text" 
        placeholder='Ваше имя...'
        value={name}
        required
        minLength={3}
        maxLength={24}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          return updateFields({ name: event.target.value })
        }}        
      />
      <input type="text" 
        placeholder='Ваш email...'
        value={email} 
        required
        minLength={8}
        maxLength={64}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          return updateFields({ email: event.target.value })
        }} 
      />
      <input type="password" 
        placeholder='Пароль...'
        value={password}
        minLength={3}
        required
        maxLength={32}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          return updateFields({ password: event.target.value })
        }} 
      />
      <label>
        Уже есть аккаунт?
        <Link to={Paths.login}>
          <button type="button">Войти</button>
        </Link>
      </label>
    </fieldset>
  )
}