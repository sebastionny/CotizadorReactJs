import React, {Component} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from './helpers';


class App extends Component {


  state ={
    resultado : '',
    datos: {}
  }


  cotizarAuto = (datos) =>{
    const {marca,modelo,plan} = datos

    // Agragar una base de 2000
    let basePrecio = 2000;

    // Obtener la diferencia de anos
    const diferenciaYears =  obtenerDiferenciaAnio(modelo)

    // Por cada ano restar el 3% al valor del seguro
    basePrecio -= ((diferenciaYears *3) * basePrecio)/100;

    // Americano 15%, Europeo 30%, Asiatico 5%
    basePrecio = calcularMarca(marca) * basePrecio;

    // Aumentar el precio segun el plan.
    basePrecio = parseFloat( obtenerPlan(plan) * basePrecio).toFixed(2);
 
    this.setState({
      resultado : basePrecio,
      datos : {marca : marca, modelo : modelo, plan : plan}
    })
  } 


  render(){
    return (
      <div className="App">
        <Header titulo='Consecionario de autos'/>
      
        <div className="form">
          <Formulario
          cotizarAuto = {this.cotizarAuto} />
        </div>

        <div>
          <Resumen
              datos = {this.state.datos}
              resultado = {this.state.resultado}/>
        </div>


      </div>
    );
  }

}

export default App;
