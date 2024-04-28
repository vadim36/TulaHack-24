import { Paths } from '@/lib/enums'
import {FC, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '@/lib/context'

const links: ILink[] = [
    {path: Paths.home, title: 'Домой'},
    {path: Paths.user, title: 'Ваш аккаунт'}
]

export const AppBar:FC = () => {
    const {logout} = useContext(AuthContext)

    return (
      <header className='flex p-2 justify-around items-center bg-[#FEB1AF]'>
          <img src="@/../public/logo.png" alt="logo" className='w-24 h-16'/>
          <nav>
              <ul className='flex items-center h-full gap-2'>
                  {links.map((link: ILink) => {
                      return <li key={link.path}>
                          <NavLink to={link.path} className={({ isActive }) => {
                              return isActive 
                                ? 'text-white rounded-lg relative active:top-1' 
                                : 'text-[#7465AD] rounded-lg relative active:top-1'
                          }}>
                            <button className="font-semibold text-2xl p-2 font-mono">
                                {link.title}
                            </button>
                          </NavLink>
                      </li>
                  })}
              </ul>
          </nav>
          <button className='border px-2 text-xl rounded-lg relative active:top-1
            text-[#7465AD] font-semibold border-black h-12' onClick={logout}>Выйти</button>
      </header>
    )
}