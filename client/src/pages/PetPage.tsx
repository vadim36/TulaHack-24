import {FC, useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Paths } from '@/lib/enums'
import $api from '@/lib/http'
import useFetching from '@/hooks/useFetching'
import { Loader } from '@/components/Loader'

export const PetPage:FC = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [petData, setPetData] = useState<TResponsePet >()
    const [getData, loading, loadingError] = useFetching(async () => {
        const response = await $api.get('/pets/get', {
            params: { petId: id }
        })
        return setPetData(response.data)
    })

    async function removePet() {
        try {
            navigate(Paths.user)
            return await $api.post('/pets/delete', {petId: petData?.petId})
        } catch (error: unknown) {
            alert(error as Error)
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
        {loading && <Loader/>}
        {loadingError  && <h1>{loadingError}</h1>}
        {petData && (<div>
            {petData?.name} {petData?.breed}
            <div>
                <strong>Вес: {petData?.weight}</strong>
                <strong>Возраст: {petData?.age}</strong>
            </div>
            <button className='bg-red-500 text-white text-xl rounded-lg text-center p-1 px-2
                relative active:top-1' onClick={removePet}>
                Удалить питомца
            </button>
        </div>
        )}
      </>
    )
}