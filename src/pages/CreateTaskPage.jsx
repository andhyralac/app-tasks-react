import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { FormField, FormButton, Spinner } from '../components'
import * as taskService from '../services/task.service'

const CreateTaskPage = ({ tokenUser }) => {
  const [loading, setLoading] = useState(false)
  const [task, setTask] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      taskService.setToken(tokenUser)
      const { data } = await taskService.createTask(task)

      if (data.status === 201) {
        setTask('')
        toast.success('Successfully created!')
      }
    } catch (error) {
      if (error.response.data.status === 400) {
        error.response.data.error.forEach((element) => {
          toast.error(element.msg)
        })
      }
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  return (
    <>
      <div className="col-md d-flex justify-content-center align-items-center">
        <form
          className="col-md-5 col-sm-6 border border-secondary rounded shadow p-4"
          data-bs-theme="dark"
          onSubmit={handleSubmit}
        >
          <div className="mb-3 text-center">
            <h3>Create Task</h3>
          </div>
          <div className="mb-3">
            <FormField
              type="text"
              name="description"
              placeholder="Enter task description"
              value={task}
              handleChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <FormButton
              type="submit"
              className="btn btn-primary w-100"
              name="create"
            >
              {loading ? <Spinner /> : 'create'}
            </FormButton>
          </div>
        </form>
      </div>
      <Toaster
        position="top-center"
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

export default CreateTaskPage
