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
    <form onSubmit={submitHandler}>
      {currentIndex + 1} / {steps.length}
      {stepForm}
      {!isFirstStep && <button type='button' onClick={back}>Назад</button>}
      <button>
        {!isLastStep ? 'Дальше' : 'Завершить'}
      </button>
    </form>
  )
}