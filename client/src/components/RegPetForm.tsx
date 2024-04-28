import {FC, ChangeEvent} from 'react'
import { GetBreedForm } from './getBreedForm'

interface RegPetFormProps extends PetData {
    updateFields: (fields: Partial<IRegFormData>) => void
}

export const RegPetForm:FC<RegPetFormProps> = ({
    petName, petAge, updateFields, petWeight, petBreed
}) => {
  return (
    <fieldset className='flex flex-col'>
        <legend>Регистрация питомца</legend>
        <GetBreedForm petBreed={petBreed} updateFields={updateFields}/>
        <input type="text" 
            placeholder="Имя..."
            value={petName}
            className='border border-black'
            required
            minLength={2}
            maxLength={32}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                return updateFields({petName: event.target.value})
            }}
        />
        <label>
            <input type="number" 
                placeholder="Возраст"
                value={petAge}
                className='border border-black'
                required
                min={-1}
                max={150}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    return updateFields({petAge: Number(event.target.value)})
                }}
            />
            Если возраст меньше года напишите "-1"
        </label>
        <label>
            <input type="number" 
                placeholder="Вес..."
                value={petWeight}
                className='border border-black'
                required
                min={-1}
                max={150}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    return updateFields({petWeight: Number(event.target.value)})
                }}
            />
            Если возраст меньше года напишите "-1"
        </label>
    </fieldset>
  )
}