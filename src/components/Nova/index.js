//Dependencies
import React, { Component } from 'react';

//components

//import Opciones from '../global/Opciones';


//data
//import items from '../data/opcionesmenu';



//assets
import './styles.css';


class Nova extends Component {
	render() {

		return (
				<div className="Nova">
				

					<div className="container link1 .d-sm-flex ">
					<a type="button" value="dar cluck" href="./images/Formato para persentar Matriz FODA.xls" >click para la descarga: Formato para persentar Matriz FODA</a>


					</div>

					<div className="container link2 .d-sm-flex ">
					<a type="button" value="dar cluck" href="./images/FormatoFODAMEEP.docx" >click para la descarga: FormatoFODAMEEP</a>


					</div>

					<div className="container link3 .d-sm-flex ">
					<a type="button" value="dar cluck" href="./images/hoja_de_trabajo_para_la_realizacin_de_un_anlisis_foda.doc" >click para la descarga: hoja_de_trabajo_para_la_realización_de_un_anlisis_foda</a>


					</div>

					<div className="container link4 .d-sm-flex ">
					<a type="button" value="dar cluck" href="./images/plantilla-analisis-dafo.docx" >click para la descarga: plantilla-analisis-dafo</a>


					</div>

					

				</div>
			);
		
	}
}

export default Nova;