import {FC} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Paths } from '@/lib/enums'

export const PetPage:FC = () => {
    const {id} = useParams()

    return (
      <>
        <Link to={Paths.user}>
            <button className='bg-sky-500 text-xl rounded-lg text-center 
                p-1 px-2 text-white'>Назад</button>
        </Link>
        PetPage {id}
      </>
    )
}