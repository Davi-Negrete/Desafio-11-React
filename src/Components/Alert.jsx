

const Alert = ({TipoColor, children}) => {

  const estiloEnLinea = {
    color: 'white',
    padding: '1.25rem',
    borderRadius: '10px',
    marginBottom:'2rem',
    backgroundColor: TipoColor
  }

  return (
    <div style={estiloEnLinea} >
        {children}
    </div>
  )
}

export default Alert