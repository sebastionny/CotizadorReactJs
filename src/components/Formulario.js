import React from 'react';

class Formulario extends React.Component {

// Refs son para leer los calores de un formulario.
    
marcaAuto = React.createRef();
modeloAuto = React.createRef();
planCompleto = React.createRef();
planBasico = React.createRef();

    handleForm = (e) => {
        e.preventDefault();

        const planSelected = this.planBasico.current.checked ? 'basico' : 'completo';

        //Crear un objeto
        const infoAuto = {
            marca: this.marcaAuto.current.value ,
            modelo: this.modeloAuto.current.value,
            plan: planSelected
        }

        // Enviar al componente principal.
        this.props.cotizarAuto(infoAuto);

        // Limpiar formulario
        //e.currentTarget.reset();
    }

    


    render(){
        return(
            <form className="form" onSubmit={this.handleForm}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marcaAuto} >
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.modeloAuto}>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" name="plan" value="basico" ref={this.planBasico}/> Básico
                    <input type="radio" name="plan" value="completo" ref={this.planCompleto}/> Completo
                </div>

                <button type="submit" className="btn ">Cotizar</button>
            </form>
        )
    }

}

export default Formulario;