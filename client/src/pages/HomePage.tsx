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

  async function removeTask(taskId: string) {
    try {
      await $api.post('/tasks/delete', {taskId})
      return setTasks(tasks.filter((task: ITask) => {
        return task.taskId !== taskId
      }))
    } catch (error: unknown) {
      alert(error as Error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className='bg-[#7465AD] h-dvh'>
      <AppBar/>
      <h1 className='font-bold text-[#403569] text-2xl p-2'>Задачи по уходу за животным:</h1>
      <form onSubmit={createTask} className='border border-black py-2'>
        <fieldset className='flex gap-2 items-start p-1'>
          <legend className='text-[#352b59] font-semibold text-lg'>Добавить задачу:</legend>
          <input type="text" className='border-2 border-[#403569] rounded-md
            bg-[#FEB1AF] placeholder:text-[#564a82] p-2 text-xl' 
            value={formData.taskBody} minLength={3} maxLength={64} 
            required placeholder='Название задачи...'
            onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData((prev) => {
              return {...prev, taskBody: event.target.value}
            })}
          />
          <button className='bg-[#504577] p-2 rounded-lg relative active:top-1
            text-white text-lg'
            >
            Создать задачу
            </button>
        </fieldset>
      </form>
      <div className='px-2'>
        <strong className='text-2xl text-[#322852]'>Задачи:</strong>
        {tasksLoading && <Loader/>}
        {tasksLoadingError && <h1>{tasksLoadingError}</h1>}
        <ul className='mt-2 flex flex-col items-start'>
          {tasks && tasks.map((task: ITask) => {
            return <li key={task.taskId!} className='bg-[#FEB1AF] p-2 rounded-md
              border-4 border-[#4d427a] h-16 flex items-center'
            >
              <select className='border border-black'>
                <option value="todo">Todo</option>
                <option value="inProgress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              {task.taskStatus} - {task.taskBody}
              <button onClick={() => removeTask(task.taskId!)}>Удалить задачу</button>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}