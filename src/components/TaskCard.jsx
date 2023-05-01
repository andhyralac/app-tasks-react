import { Toaster, toast } from 'react-hot-toast'

import { FormButton } from '../components'
import * as taskService from '../services/task.service.js'

const TaskCard = ({ _id, description, user, updatedAt, setTasks, tasks }) => {
  const handleDelete = async () => {
    try {
      const response = await taskService.deleteTask(_id)
      const { data } = response.data

      setTimeout(() => {
        setTasks(tasks.filter((task) => task._id !== _id))
      }, 2000)

      toast.success(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="col-xs-8 col-sm-8 col-md-4 col-lg-3 card text-bg-dark m-1">
        <div className="card-header">
          <i className="bi bi-person-circle me-1"></i>
          {user.full_name.toLowerCase()}
        </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer row">
          <small className="text-dark-emphasis">{updatedAt}</small>
          <FormButton
            className="col-md-5 btn btn-sm btn-danger"
            handleClick={() => handleDelete()}
          >
            Delete
          </FormButton>
        </div>
      </div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </>
  )
}

export default TaskCard
