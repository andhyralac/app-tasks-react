const Spinner = ({ style }) => {
  return (
    <>
      <span
        className="spinner-border spinner-border-sm"
        style={style}
        role="status"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Loading...</span>
    </>
  )
}

export default Spinner
