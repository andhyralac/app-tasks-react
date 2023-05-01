const FormButton = ({ children, type, className, name, handleClick }) => {
  return (
    <button type={type} className={className} onClick={handleClick} >
      {children ? children : name}
    </button>
  )
}

export default FormButton
