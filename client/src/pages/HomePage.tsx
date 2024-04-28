import {ChangeEvent, FC, FormEvent, useContext, useState, useEffect} from 'react'
import { AppBar } from '@/components/AppBar'
import { Statuses } from '@/lib/enums'
import $api from '@/lib/http'
import { AuthContext } from '@/lib/context'
import useFetching from '@/hooks/useFetching'
import { Loader } from '@/components/Loader'

const INITIAL_FORM_STATE:ITask = {
  taskBody: '',
  taskStatus: Statuses.Todo
}

export const HomePage:FC = () => {
  const [formData, setFormData] = useState<ITask>(INITIAL_FORM_STATE)
  const [tasks, setTasks] = useState<ITask[]>([])
  const {userDto} = useContext(AuthContext)
  const [fetchTasks, tasksLoading, tasksLoadingError] = useFetching(async () => {
    const response = await $api.get('/tasks/getAll', {
      params: {ownerId: userDto.user.userId}
    })
    return setTasks([...response.data])
  })

  async function createTask(event: FormEvent) {
    event.preventDefault()
  
    try {
      const task = await $api.post('/tasks/addNew', {
        task: formData,
        ownerId: userDto.user.userId
      })
      
      setFormData(INITIAL_FORM_STATE)
      return setTasks((prev) => [...prev, {...task.data}])
    } catch (error: unknown) {
      alert(error as Error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <>
      <AppBar/>
      <h1 className='text-center font-bold text-4xl'>Задачи по уходу за животным:</h1>
      <form onSubmit={createTask} className='border border-black p-1'>
        <fieldset className='flex flex-col items-start'>
          <legend>Добавить задачу:</legend>
          <input type="text" className='border border-black rounded-md'
            value={formData.taskBody} minLength={3} maxLength={64} required
            onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData((prev) => {
              return {...prev, taskBody: event.target.value}
            })}
          />
          <select className='border border-black'>
            <option value="todo">Todo</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button className='bg-sky-500 p-2 rounded-lg relative active:top-1
            text-white text-lg'
            >
            Создать задачу
            </button>
        </fieldset>
      </form>
      <div>
        <strong className='text-2xl'>Задачи:</strong>
        {tasksLoading && <Loader/>}
        {tasksLoadingError && <h1>{tasksLoadingError}</h1>}
        <ul>
          {tasks && tasks.map((task: ITask) => {
            console.log(task)
            return <li>{task.taskStatus} - {task.taskBody}</li>
          })}
        </ul>
      </div>
    </>
  )
}