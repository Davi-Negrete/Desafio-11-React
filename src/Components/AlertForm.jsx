const AlertForm = ({ message, children }) => {
  return (
    <div className="alert alert-success" role="alert">
      <h3>Datos enviados:</h3>
      {message}
      {children}
    </div>
  )
}

export default AlertForm