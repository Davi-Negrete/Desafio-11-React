import React, { useState } from 'react'
import AlertForm from './AlertForm'

const ContactForm = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const [showAlert, setShowAlert] = useState(false);
  const [sentData, setSentData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleReset = () => {
    setFormData({ nombre: '', email: '', mensaje: '' })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setSentData(formData);
    setShowAlert(true);
    handleReset()
  }


  return (
    <div className="container">
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Mensaje:</label>
          <textarea
            className="form-control"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success my-3 me-3 ">
          Enviar
        </button>
        <button type="button" className="btn btn-danger my-3" onClick={handleReset}>
          Resetear
        </button>
      </form>
      {showAlert && (
        <AlertForm message={  
        <ul>
          <li>Nombre: {sentData.nombre}</li>
          <li>Email: {sentData.email}</li>
          <li>Mensaje: {sentData.mensaje}</li>
        </ul>}><h5>Su Información ha sido enviada satisfactoriamente.</h5></AlertForm>
      )}
    </div>
  )

}

export default ContactForm

