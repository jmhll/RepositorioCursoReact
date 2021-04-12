//import Articulo from "./Componentes/Articulo";
import './App.css';
//T5
//import FormularioEvento from './Componentes/FormularioEvento';
//import Teclado from './Componentes/Eventos/Teclado';
//import Raton from './Componentes/Eventos/Raton';
//import Touch from './Componentes/Eventos/Touch';
//import Imagen from './Componentes/Eventos/Imagen';
//import Focus from './Componentes/Eventos/Focus';
//import Clip from './Componentes/Eventos/ClipBoard';
import ComponenteEventos from './Componentes/components/ComponenteEvento';


function App() {
  return <ComponenteEventos/> //tema Ejercicio
  //return <Clip/> //tema5 ClipBoard
    //return <Focus/> //tema5 Focus
    //return <Imagen/> //tema5 EventoImagenes
      //return <Touch/> //tema5 EventoTouch
      //return <Touch></Touch> //tema5 EventoTouch
      //return <Raton />//tema5 EventoRaton
       //return <Teclado />//tema5 EventoTeclado
      //  opcion2 TEMA5 ej2
       //return <FormularioEvento/>
      //T5 Eventos: 
      //OPCION 1 CrearObjeto en el index
       //const [nombre, setNombre] = useState('');
       //const [appelidos, setApellidos] = useState('');
      //const [resultado, setResultado] = useState('');
       //TEMA5 EJ1
      /*const manejarPulsacion = (event) => {
              
              //console.log("Objeto evento: ", event)
              event.preventDefault();
              console.log("Objeto evento: ", event);
       }
       
       return (
              <div className="App">
              <header className="App-header">
                <button onClick={manejarPulsacion}>
     
                </button>
                <a href="https://www.google.es" onClick={manejarPulsacion}>Ir a Google</a>
              </header>
            </div>
                   
       );
       */       
       // return <Articulo/>

}
  
export default App;
