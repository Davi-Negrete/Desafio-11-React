import estilos from './Estilos/Card.module.css'

const Card = (props) => {

  const {foto, nombre, profesion, telefono, descripcion} = props

  return (
    <div className={estilos['card']}> 
        <div className={estilos['img-container']}>
            <img className={estilos['img']} src={foto} alt="Ingeniero trabajando en Circuitos"></img>
        </div>
            
        <div className={estilos['card-body']}>
            <h3>{nombre}</h3>
            <h5><b>{profesion}</b></h5>
            <h6>{telefono}</h6>
            <p>{descripcion}</p>
        </div>
    </div>

  )
} 

export default Card

