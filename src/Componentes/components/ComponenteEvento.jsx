//import React from 'react';
//import {useState} from 'react';
//aplicar diferentes operaciones sobre la propiedad state
import React, { Component } from 'react';

export default class ComponenteEventos extends Component{

  constructor(props) {
    super(props);    
    this.state = {estado : ''};
    
    }

   manejarPulsacionesTeclado = (event) => {

     this.setState((state) => {
      return {estado: state.estado + event.key}
    });

    }

    manejarDown = (event) => {

      if(event.charCode === 8 || event.key ==="Delete"  || event.key ==="Backspace" )
      {
        
         var text = this.state.estado;
         var st = text.substring(0,this.state.estado.length-1);
         this.setState({ estado: st });
      }
      
           
      
    }
    render()
      {
      return (
        <div className="App">
          <header className="App-header">
            <label> tema 5 ejercicio ej1 state</label>
            <input text = 'Tema5 ejercicio 1:'  onKeyPress={this.manejarPulsacionesTeclado} onKeyDown={this.manejarDown} />
            <label>Resultado:</label>
            <input text = {this.state.estado}  value={this.state.estado}  />       
            
          </header>      
        </div>
      );
    }
}

//export default ComponenteEvento;