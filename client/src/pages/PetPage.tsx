import {FC, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Paths } from '@/lib/enums'
import $api from '@/lib/http'

export const PetPage:FC = () => {
    const {id} = useParams()
    const [petData, setPetData] = useState<TResponsePet>()

    async function getData() {
        try {
            const response = await $api.get('/pets/get', {
                params: { petId: id }
            })
            return setPetData(response.data)
        } catch (error: unknown) {
            alert (error as Error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
      <>
        <Link to={Paths.user}>
            <button className='bg-sky-500 text-xl rounded-lg text-center 
                p-1 px-2 text-white'>Назад</button>
        </Link>
        {petData?.breed} имя: {petData?.name} {petData?.age}года
      </>
    )
}