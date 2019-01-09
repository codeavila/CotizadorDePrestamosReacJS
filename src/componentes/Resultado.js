//Stateless functional
import React from 'react';

const Resultado = (props) => {
    return ( 
        <div className="u-full-width resultado">
            <h2>
                Resultados
            </h2>
            <p> La cantidad solicitada fue : $ {props.cantidad}</p>
            <p> a pagar en:  {props.plazo} meses</p>
            <p> y el total a pagar seria de : $ {props.total} </p>
            <p>Su pago mensual es de: $ { (props.total / props.plazo).toFixed(2) }</p>
        </div>
     );
}
 
export default Resultado;