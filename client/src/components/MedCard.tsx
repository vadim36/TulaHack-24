import {FC} from 'react'

interface PetData extends Omit<TResponsePet, 'ownerId'> {}

export const MedCard:FC<PetData> = (petData) => {
    return (
        <div className='border border-black p-1 rounded-md'>
            <strong>МедКарта:</strong>
            <dl>
                <dt className='font-semibold text-lg'>Порода:</dt>
                <dd>{petData.breed}</dd>
                <dt className='font-semibold text-lg'>Кличка:</dt>
                <dd>{petData.name}</dd>
                <dt className='font-semibold text-lg'>Возраст:</dt>
                <dd>{petData.age}</dd>
                <dt className='font-semibold text-lg'>Вес:</dt>
                <dd>{petData.weight}</dd>
            </dl>
            <a href="https://vetbum.ru" className='text-blue-800 text-xl'>
                Записаться на прием
            </a>
        </div>
    )
}