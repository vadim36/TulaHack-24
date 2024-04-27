import {ChangeEvent, FC} from 'react'
import { breeds } from '@/lib/arrays'

interface GetBreedFormProps extends Pick<PetData, 'petBreed'> {
    updateFields: (fields: Partial<IRegFormData>) => void
}

export const GetBreedForm:FC<GetBreedFormProps> = ({petBreed, updateFields}) => {
    return (
      <>
          <strong>Выберете породу вашего питомца:</strong>
          {breeds.map((breed: TBreed) => {
            return (
                <label key={breed}>
                    <input type="radio" 
                        name="breed" value={breed}
                        checked={breed === petBreed}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            return updateFields({petBreed: event.target.value as TBreed}) 
                        }}
                    />
                    {breed}
                </label>
            )
          })}
      </>
    )
}