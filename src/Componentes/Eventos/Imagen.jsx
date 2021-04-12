import React, { useState} from 'react';
import logo from 'C:/Users/conxi/Desktop/CursoReactJS/Tema2/mi-proyecto-react/src/logo.svg'



function Imagen(){


    // onLoad
    const cargaImagen = (event) => {
    console.log("La imagen se ha cargado correctamente");
    };

    // onError
    const errorImagen = (event) => {
    console.log("Error al cargar la imagen");
    }
    const [reactLogo, setReactLogo] = useState(logo);

    return (
        <div className="App">
            <header className="App-header">
            <h1>Eventos en React</h1>

            <img width="256" alt="altura"  src={reactLogo} onLoad={cargaImagen} onError={errorImagen} />

            <button onClick={() => {setReactLogo(logo)}}>Cargar correctamente el logo</button>
            <button onClick={() => {setReactLogo('')}}>Cargar con error el logo</button>
            </header>
        </div>
     );

}

export default Imagen;