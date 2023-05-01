
const FormField = ({ type, name, placeholder, value, handleChange }) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      className='form-control'
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      autoComplete='off'
    />
  )
}

export default FormField