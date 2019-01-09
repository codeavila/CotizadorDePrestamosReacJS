import React, { Component } from 'react';

class Formulario extends Component {
    state = { 
        cantidad: '',
        plazo: ''
     }

     actualizarState = (e) =>{
         //console.log('Estoy escribiendo...')
            //Leera los datos del formulario
                //console.log(e.target.value);

            const {name,value} = e.target;

            //actiañozar el state
            this.setState({
                [name] : Number(value)
            })
     }

     calcularPrestamo = (e) =>{
         e.preventDefault();

         const {cantidad,plazo} = this.state;

         this.props.datosPrestamo(cantidad,plazo);

     }

     habilitarSubmit = () =>{
         const {cantidad,plazo} = this.state;

         const noValido = !cantidad || !plazo;
         
         //console.log(noValido);

         return noValido;
     }

    render() { 
        return (
            <form onSubmit={this.calcularPrestamo}>
                <div>
                    <label>Cantidad Prestamo: </label>
                    <input 
                        onChange = {this.actualizarState}
                        type="number" 
                        name="cantidad" 
                        className="u-full-width" 
                        placeholder="Ejemplo. 300" />
                </div>
                <div>
                    <label>
                        Plazo para pagar
                    </label>
                    <select 
                        onChange = {this.actualizarState}
                        name="plazo" className="u-full-width">
                        <option value="">Seleccionar</option>
                        <option value="3">3 Meses</option>
                        <option value="6">6 Meses</option>
                        <option value="12">12 Meses</option>
                        <option value="24">24 Meses</option>
                    </select>
                </div>
                <div>
                    <input 
                        disabled = {this.habilitarSubmit()}
                        type="submit" 
                        value="Calcular" 
                        className="u-full-width button-primary" />
                </div>
            </form>
          );
    }
}
 
export default Formulario;
