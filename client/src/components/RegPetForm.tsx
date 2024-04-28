import {FC, ChangeEvent} from 'react'
import { GetBreedForm } from './getBreedForm'

interface RegPetFormProps extends PetData {
    updateFields: (fields: Partial<IRegFormData>) => void
}

export const RegPetForm:FC<RegPetFormProps> = ({
    petName, petAge, updateFields, petWeight, petBreed
}) => {
  return (
    <fieldset className='flex flex-col bg-slate-700/50 px-2 py-2'>
        <GetBreedForm petBreed={petBreed} updateFields={updateFields}/>
        <input type="text" 
            placeholder="Имя..."
            value={petName}
            className='border-2 border-[#403569] rounded-md
            bg-[#FEB1AF] placeholder:text-[#564a82] p-2 text-xl outline-0'
            required
            minLength={2}
            maxLength={32}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                return updateFields({petName: event.target.value})
            }}
        />
        <label className='flex flex-col'>
            <input type="number" 
                placeholder="Возраст"
                value={petAge}
                required
                className='border-2 border-[#403569] rounded-md
             bg-[#FEB1AF] placeholder:text-[#564a82] p-2 text-xl outline-0'
                min={-1}
                max={150}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    return updateFields({petAge: Number(event.target.value)})
                }}
            />
            Если возраст меньше года напишите "-1"
        </label>
        <label className='flex flex-col'>
            <input type="number" 
                placeholder="Вес..."
                value={petWeight}
                className='border-2 border-[#403569] rounded-md
            bg-[#FEB1AF] placeholder:text-[#564a82] p-2 text-xl outline-0'
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