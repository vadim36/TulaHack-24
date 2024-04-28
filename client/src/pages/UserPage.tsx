import {FC, useContext, useState, useEffect, useRef, FormEvent} from 'react'
import { AppBar } from '@/components/AppBar'
import { AuthContext } from '@/lib/context'
import $api from '@/lib/http'
import { RegPetForm } from '@/components/RegPetForm'
import { Link } from 'react-router-dom'
import useFetching from '@/hooks/useFetching'
import { Loader } from '@/components/Loader'

const INITIAL_FORM_STATE: PetData = {
  petBreed: 'Кошка',
  petName: '',
  petAge: '',
  petWeight: ''
}

export const UserPage:FC = () => {
  const {userDto} = useContext(AuthContext)
  const {name, email} = userDto.user
  const [pets, setPets] = useState<TResponsePet[]>([])
  const $petModal = useRef<HTMLDialogElement | null>(null)
  const [petFormData, setPetFormData] = useState<PetData>(INITIAL_FORM_STATE)
  const [fetchPets, loadingPetsData, loadingPetsError] = useFetching(async () => {
    const response = await $api.get('/pets/getAll', {
      params: { accessToken: userDto.tokens.accessToken}
    })

    return setPets(response.data)
  })

  function updateFields(fields: Partial<PetData>) {
    return setPetFormData((prev: PetData) => {
      return {...prev, ...fields}
    })
  }

  useEffect(() => {
    fetchPets()
  }, [])

  async function submitHandler(event: FormEvent) {
    event.preventDefault()

    try {
      const petDto = await $api.post('/pets/add', {
        pet: petFormData,
        userId: userDto.user.userId
      })
  
      setPets((prev) => [...prev, {...petDto.data}])
      setPetFormData(INITIAL_FORM_STATE)
      return $petModal.current?.close()
    } catch (error: unknown) {
      alert(error as Error)
    }
  }

  return (
    <div className='bg-[#7465AD] h-dvh'>
      <AppBar/>
      <section className='p-2'>
        <div className='flex flex-col items-center'>
          <img 
            src="@/../public/user.png" 
            alt="user img"
            className='size-24'
          />
          <strong className='text-white font-mono font-bold text-4xl'>{name}</strong>
          <strong className='text-white font-mono font-semibold'>{email}</strong>
        </div>
        <div>
          <strong className='text-[#362e54] font-bold text-2xl'>Мои хвостики:</strong>
          <ul className='gap-2 flex py-1'>
            {loadingPetsData && <Loader/>}
            {loadingPetsError && <h1>{loadingPetsError}</h1>}
            {pets && pets.map((pet: TResponsePet) => {
              return <Link to={`/pet/${pet.petId}`} key={pet.petId} 
                className='border-[#594996] p-1 border-4 rounded-md cursor-pointer 
                group hover:border-[#768AEE] flex items-center px-2'
              >
                  <strong className='text-2xl text-[#39305d] group-hover:text-[#14182d]'>
                    {pet.breed} {pet.name}
                  </strong>
              </Link>
            })}
            <button onClick={() => $petModal.current?.showModal()}
              className='bg-[#FEB1AF] text-white text-2xl rounded-full text-center p-2'>
                <img src="@/../public/plus.svg" alt="plus icon" 
                  className='size-10'/>
              </button>
          </ul>
          <dialog ref={$petModal} className='rounded-md px-2
            py-1 bg-slate-200/50 outline-0 w-1/3'>
            <form onSubmit={submitHandler}>
              <RegPetForm {...petFormData} updateFields={updateFields}/>
              <button className='bg-[#4a4071] text-white text-xl rounded-md text-center p-2'>
                Создать питомца
              </button>
            </form>
            <button onClick={() => $petModal.current?.close()}
              className='bg-[#4a4071] text-white text-xl rounded-md text-center p-2'>
                Закрыть
            </button>
          </dialog>
        </div>
      </section>
    </div>
  )
}