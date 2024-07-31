import { useState } from "react"

const Counter = ({valorInicial}) => {

    const [numero, setNumero] = useState(valorInicial)

    const handleIncremtar = () => {
        setNumero(numero + 1)
    }

    const handleDecremtar = () => {
        setNumero(numero - 1)
    }

    const handleResetear = () => {
        setNumero(valorInicial)
    }

  return (
    <>
        <h2>Contador...</h2>
        <p className="display-6">Numero: {numero}</p>
        <button type="button" className="btn btn-primary me-3 mb-2" onClick={handleIncremtar}>Incremetar</button>
        <button type="button" className="btn btn-secondary me-3 mb-2" onClick={handleDecremtar}>Decrementar</button>
        <button type="button" className="btn btn-danger me-3 mb-2" onClick={handleResetear}>Resetear</button>
    </>
  )
}

export default Counter