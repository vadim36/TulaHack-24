import {FC, useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Paths } from '@/lib/enums'
import $api from '@/lib/http'
import useFetching from '@/hooks/useFetching'
import { Loader } from '@/components/Loader'
import { MedCard } from '@/components/MedCard'

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
      <div className='h-dvh bg-[#7465AD] p-2 flex'>
        <Link to={Paths.user}>
            <button className='bg-[#4a4071] text-white text-2xl rounded-md text-center p-2'> 
            Назад </button>
        </Link>
        {loading && <Loader/>}
        {loadingError  && <h1>{loadingError}</h1>}
        {petData && (<div className='flex-1 ml-2'>
            {petData?.name} {petData?.breed}
            <div>
                <strong>Вес: {petData?.weight}</strong>
                <strong>Возраст: {petData?.age}</strong>
            </div>
            <MedCard {...petData}/>
            <button className='bg-[#4a4071] text-white text-2xl rounded-md text-center p-2' onClick={removePet}>
                Удалить питомца
            </button>
        </div>
        )}
      </div>
    )
}