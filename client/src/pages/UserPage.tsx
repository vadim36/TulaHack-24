import {FC, useContext, useState, useEffect, useRef, FormEvent} from 'react'
import { AppBar } from '@/components/AppBar'
import { AuthContext } from '@/lib/context'
import $api from '@/lib/http'
import { RegPetForm } from '@/components/RegPetForm'
import { Link } from 'react-router-dom'

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

  async function fetchPets() {
    try {
      const response = await $api.get('/pets/getAll', {
        params: { accessToken: userDto.tokens.accessToken}
      })

      return setPets(response.data)
    } catch (error: unknown) {
      return alert(error as Error)
    }
  }

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
      console.log(petDto)
  
      setPets((prev) => [...prev, {...petDto.data}])
      setPetFormData(INITIAL_FORM_STATE)
      return $petModal.current?.close()
    } catch (error: unknown) {
      alert(error as Error)
    }
  }

  return (
    <>
      <AppBar/>
      <section>
        <div className='flex flex-col'>
          <img 
            src="https://www.svgrepo.com/show/44183/male-user.svg" 
            alt="user img"
            className='size-24'
          />
          <strong>Ваше имя: {name}</strong>
          <strong>Ваш email: {email}</strong>
        </div>
        <div>
          <strong>Мои хвостики:</strong>
          <ul className='flex gap-2'>
            {pets.map((pet: TResponsePet) => {
              return <li key={pet.petId} className='border border-black p-1'>
                <strong className='text-2xl'>{pet.breed} {pet.name}</strong>
                <Link to={`/pet/${pet.petId}`}>
                  <button className='bg-sky-500 text-xl rounded-lg text-center 
                    p-1 px-2 text-white'
                  > Открыть </button>
                </Link>
              </li>
            })}
          </ul>
          <button onClick={() => $petModal.current?.showModal()}
            className='bg-red-500 text-white text-2xl rounded-lg text-center p-1 px-2'>
              Добавить питомца
          </button>
          <dialog ref={$petModal}>
            <form onSubmit={submitHandler}>
              <RegPetForm {...petFormData} updateFields={updateFields}/>
              <button>Создать питомца</button>
            </form>
            <button onClick={() => $petModal.current?.close()}>Закрыть</button>
          </dialog>
        </div>
      </section>
    </>
  )
}