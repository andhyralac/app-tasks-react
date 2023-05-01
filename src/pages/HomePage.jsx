import { useEffect, useState } from 'react'
import { Spinner, RenderCards } from '../components'
import * as taskService from '../services/task.service.js'

const HomePage = ({ tokenUser }) => {
  const [loading, setLoading] = useState(false)
  const [alltasks, setAllTasks] = useState([])

  useEffect(() => {
    const getAllTasks = async () => {
      setLoading(true)
      try {
        taskService.setToken(tokenUser)
        const { data } = await taskService.getAllTaskByUser()

        if (data.status === 200) {
          const tasks = data.data.Tasks
          console.log(tasks)
          setAllTasks(tasks)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getAllTasks()
  }, [])

  return (
    <div className="container p-4">
      <div className="row d-flex justify-content-around">
        {loading ? (
          <div className="d-flex justify-content-center">
            <Spinner style={{ width: '5rem', height: '5rem' }} />
          </div>
        ) : (
          <RenderCards
            data={alltasks}
            title="Not tasks found"
            setTasks={setAllTasks}
          />
        )}
      </div>
    </div>
  )
}

export default HomePage
