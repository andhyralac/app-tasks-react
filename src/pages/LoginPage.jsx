import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { FormField, FormButton, Spinner } from '../components'

import { auth } from '../services/auth.service.js'
import * as localStorage from '../services/localStorage.js'

const LoginPage = ({ addToken }) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data } = await auth(form)

      if (data.status === 200) {
        localStorage.add(data.data.Token)
        addToken()
        navigate('/home')
      }
    } catch (error) {
      if (error.response.data.status === 400) {
        if (typeof error.response.data.error === 'object') {
          error.response.data.error.forEach((element) => {
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
    <div className="col-md d-flex justify-content-center align-items-center mt-5">
      <form
        className="col-lg-4 col-sm-6 border border-secondary rounded shadow p-4"
        data-bs-theme="dark"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 text-center">
          <h3>Login App</h3>
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
          <FormButton type="submit" className="btn btn-primary w-100">
            {loading ? <Spinner /> : 'enter'}
          </FormButton>
        </div>
        <div className="mb-3 text-center">
          <span>No tiene cuenta: </span>
          <Link
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            to="/register"
          >
            Crear cuenta
          </Link>
        </div>
      </form>
      <Toaster
        position="bottom-center"
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

export default LoginPage
