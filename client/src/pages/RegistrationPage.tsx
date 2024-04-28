import {FC, FormEvent, useContext, useState} from 'react'
import useMultistepForm from '@/hooks/useMultistepForm'
import { RegUserForm } from '@/components/RegUserForm'
import { RegPetForm } from '@/components/RegPetForm'
import { AuthContext } from '@/lib/context' 

const INITIAL_FORM_STATE: IRegFormData = {
  name: '',
  email: '',
  password: '',
  petBreed: 'Кошка',
  petName: '',
  petAge: '',
  petWeight: ''
}

export const RegistrationPage:FC = () => {
  const [regFormData, setRegFormData] = useState<IRegFormData>(INITIAL_FORM_STATE)
  const {registration} = useContext(AuthContext)

  function updateFields(fields: Partial<IRegFormData>) {
    return setRegFormData((prev: IRegFormData) => {
      return {...prev, ...fields}
    })
  }

  const {currentIndex, steps, isFirstStep, back, next, isLastStep, stepForm} = useMultistepForm([
    <RegUserForm {...regFormData} updateFields={updateFields}/>,
    <RegPetForm {...regFormData} updateFields={updateFields}/>
  ])

  async function submitHandler(event: FormEvent) {
    event.preventDefault()
    if (!isLastStep) return next()
    return await registration(regFormData)
  }

  return (
    <div className='h-dvh bg-auto flex justify-center flex-col items-center' 
      style={{backgroundImage: 'url("@/../public/form.png")'}}
    >
      <h1 className='text-white text-mono text-4xl font-bold bg-slate-600/75
        p-2 rounded-lg'
      >
        Давайте познакомимся!
      </h1>
      <form onSubmit={submitHandler} className='bg-slate-700/70 p-2 rounded-md mt-2 w-1/3'>
        <strong className='text-white'>{currentIndex + 1} / {steps.length}</strong>
        {stepForm}
        {!isFirstStep && <button type='button' onClick={back}
         className='px-2 py-1 text-lg border-1 bg-slate-800 rounded-md text-white'>
          Назад
        </button>}
        <button className='bg-[#393059] p-2 rounded-lg relative active:top-1
            text-white text-lg ml-2'>
          {!isLastStep ? 'Дальше' : 'Завершить'}
        </button>
      </form>
    </div>
  )
}