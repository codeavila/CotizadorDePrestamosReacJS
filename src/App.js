import React, { Component, Fragment } from 'react';

import './normalize.css';
import './skeleton.css';

import Formulario from './componentes/Formulario';
import {calcularTotal} from './helpers';
import Resultado from './componentes/Resultado';
import Mensaje from './componentes/Mensajes';
import Spinner from './componentes/Spinner';

class App extends Component {
  
state = {
  total : '',
  cantidad: '',
  plazo: '',
  cargando : false
}

  datosPrestamo = (cantidad,plazo) =>{
    /*console.log('desde app.js');
    console.log(cantidad);
    console.log(plazo);*/
    const total = calcularTotal(cantidad,plazo);

    // Colocar el resulta en el state
    this.setState({
      cargando: true
    }, () => {
      setTimeout(() =>{
        this.setState({
          total,
          cantidad,
          plazo,
          cargando : false
        })
      }, 3000)
    })
  }
  
  render() {
  const {total,cantidad,plazo,cargando} = this.state;
    //Cargar un componente condicionalmente
    let componente ;
    if(total === '' && !cargando){
      componente = <Mensaje/>
    }
    else if(cargando){
      componente = <Spinner/>
    }    
    else{
      componente = <Resultado
                      total = {total}
                      plazo = {plazo}
                      cantidad = {cantidad}
                    />
    }
    return (
            <Fragment>
                <h1>Cotizador de Prestamos</h1>
                <div className="container">
                    <Formulario
                        datosPrestamo = {this.datosPrestamo}
                    />
                    <div className="mensajes">
                      {componente}
                    </div>
                </div>
            </Fragment>
    );
  }
}

export default App;
