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
    <fieldset className='flex flex-col gap-1'>
      <input type="text" 
        placeholder='Ваше имя...'
        value={name}
        required
        className='border-2 border-[#403569] rounded-md
        bg-[#FEB1AF] placeholder:text-[#564a82] p-2 text-xl outline-0'
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
        className='border-2 border-[#403569] rounded-md
        bg-[#FEB1AF] placeholder:text-[#564a82] p-2 text-xl outline-0'
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
        className='border-2 border-[#403569] rounded-md
        bg-[#FEB1AF] placeholder:text-[#564a82] p-2 text-xl outline-0'
        maxLength={32}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          return updateFields({ password: event.target.value })
        }} 
      />
      <label className='text-white/80 px-2'>
        Уже есть аккаунт?
        <Link to={Paths.login}>
          <button type="button" className='px-2 text-lg border-1 bg-slate-800 
          rounded-md'>
            Войти
          </button>
        </Link>
      </label>
    </fieldset>
  )
}