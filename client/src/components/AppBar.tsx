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
      <header className='flex border border-black p-2 justify-around'>
          <h1 className='font-semibold text-5xl'>AnyTail</h1>
          <nav>
              <ul className='flex items-center h-full gap-2'>
                  {links.map((link: ILink) => {
                      return <li key={link.path}>
                          <NavLink to={link.path} className={({ isActive }) => {
                              return isActive 
                                ? 'bg-red-500 p-2 rounded-lg relative active:top-1' 
                                : 'bg-sky-500 p-2 rounded-lg relative active:top-1'
                          }}>
                            <button className="text-white text-2xl p-2">
                                {link.title}
                            </button>
                          </NavLink>
                      </li>
                  })}
              </ul>
          </nav>
          <button onClick={logout}>Выйти</button>
      </header>
    )
}