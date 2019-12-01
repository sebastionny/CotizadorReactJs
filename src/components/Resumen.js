import React, {Component} from 'react';
import Resultado from './Resultado';


class Resumen extends Component{
    
    mostrarResumen = () =>{

        const {marca,modelo,plan} = this.props.datos;

        if(!marca || !modelo || !plan) return null

        return(
        <div className="resumen">
            <h2>Resumen de la cotización</h2>
            <p>Marca: {marca}</p>
            <p>Modelo: {modelo}</p>
            <p>Plan: {plan}</p>
        </div>
        )
    }
    
    render(){
        return(
            <div>
             {this.mostrarResumen()}
             <Resultado resultado = {this.props.resultado}/>
            </div>
        )
    }
}

export default Resumen;