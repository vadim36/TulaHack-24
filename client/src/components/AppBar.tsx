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
      <header className='flex'>
          <h1>LOGO</h1>
          <nav>
              <ul className='flex'>
                  {links.map((link: ILink) => {
                      return <li key={link.path}>
                          <NavLink to={link.path} className={({ isActive }) => {
                              return isActive ? 'text-red-500' : ''
                          }}>
                              {link.title}
                          </NavLink>
                      </li>
                  })}
              </ul>
          </nav>
          <button onClick={logout}>Выйти</button>
      </header>
    )
}