import Alert from "./Components/Alert"
import Card from "./Components/Card"
import Counter from "./Components/Counter"
import ContactForm from "./Components/ContactForm"

const InicioApp = () => {
  
  const arrayCard = [
    {nombre:'Armando Guerrero'}, 
    {profesion: 'Ingeniero Eléctrico'}, 
    {telefono: '(+57) 3760923831'}, 
    {descripcion: 'Especialista en diseño, desarrollo y mantenimiento de circuitos eléctricos para industrias y sistemas de seguridad.'}
  ]

  return (
    <div className="container">

      <h3 style={{color:'red', textAlign:'center', margin:'1.5rem'}}>Primer Ejercicio : (Tarjeta de Presentación)</h3>
      <h4 style={{color:'red', textAlign:'center', margin:'1rem'}}>Manejo de Props:</h4>

      <Card 
      foto="../../img/Ingeniero.jpg" 
      nombre={arrayCard[0].nombre}
      profesion={arrayCard[1].profesion}
      telefono={arrayCard[2].telefono}
      descripcion={arrayCard[3].descripcion}
      />

      <hr />
      <h3 style={{color:'red', textAlign:'center', margin:'1.5rem'}}>Segundo Ejercicio : (Alerta Personalizada)</h3>
      <h4 style={{color:'red', textAlign:'center', margin:'1rem'}}>Manejo de Children:</h4> 

      <Alert TipoColor='#006400'>
        <h5>Esta es la Primera Alerta, es la Alerta <strong>VERDE.</strong></h5>
      </Alert>

      <Alert TipoColor='#a7a703'>
        <h5>Esta es la Segunda Alerta, es la Alerta <strong>AMARILLA.</strong></h5>
      </Alert>

      <Alert TipoColor='#8b0000'>
        <h5>Esta es la Tercera Alerta, es la Alerta <strong>ROJA.</strong></h5>
      </Alert>

      <hr />
      <h3 style={{color:'red', textAlign:'center', margin:'1.5rem'}}>Tercer Ejercicio : (Contador)</h3>
      <h4 style={{color:'red', textAlign:'center', margin:'2rem'}}>Manejo de Estado:</h4> 

      <Counter valorInicial={0}/>

      <hr />
      <h3 style={{color:'red', textAlign:'center', margin:'1.5rem'}}>Cuarto Ejercicio : (Formulario de Contacto)</h3>
      <h4 style={{color:'red', textAlign:'center', margin:'2rem'}}>Ejercicio Combinado</h4> 

      <ContactForm/>

      <hr />
      
    </div>
  )
}

export default InicioApp


