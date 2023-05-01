import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { FormField, FormButton, Spinner } from '../components'
import { createUser } from '../services/user.service.js'
import * as localStorage from '../services/localStorage.js'
import { useNavigate } from 'react-router-dom'


const CreateUserPage = ({ addToken }) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    full_name: '',
    email: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data } = await createUser(form)
      if (data.status === 201) {
        localStorage.add(data.data.token)
        addToken()
        navigate('/home')
      }
    } catch (error) {
      if (error.response.data.status === 400) {

        if (typeof error.response.data.error === 'object') {
          error.response.data.error.forEach(element => {
            toast.error(element.msg)
          })
        } else {
          toast.error(error.response.data.error)
        }

      }
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="col-md d-flex justify-content-center align-items-center">
      <form
        className="col-lg-4 col-sm-6 border border-secondary rounded shadow p-4"
        data-bs-theme="dark"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 text-center">
          <h3>Create User</h3>
        </div>
        <div className="mb-3">
          <FormField
            type="text"
            name="full_name"
            placeholder="Enter full name"
            value={form.full_name}
            handleChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <FormField
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            handleChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <FormField
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            handleChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <FormButton type="submit" className="btn btn-info w-100">
            {loading ? <Spinner /> : 'create'}
          </FormButton>
        </div>
      </form>
      <Toaster
        position="bottom-center"
        reverseOrder={true}
        toastOptions={{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </div>
  )
}

export default CreateUserPage
