import {ChangeEvent, FC} from 'react'
import { breeds } from '@/lib/arrays'

interface GetBreedFormProps extends Pick<PetData, 'petBreed'> {
    updateFields: (fields: Partial<IRegFormData>) => void
}

export const GetBreedForm:FC<GetBreedFormProps> = ({petBreed, updateFields}) => {
    return (
      <>
          <strong className='text-[#282244]'>Выберете породу вашего питомца:</strong>
          {breeds.map((breed: TBreed) => {
            return (
                <label key={breed} className='text-white font-mono text-lg'>
                    <input type="radio" 
                        name="breed" value={breed}
                        checked={breed === petBreed}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            return updateFields({petBreed: event.target.value as TBreed}) 
                        }}
                        className='mr-2'
                    />
                    {breed}
                </label>
            )
          })}
      </>
    )
}