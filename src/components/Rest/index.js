//Dependencies
import React, { Component } from 'react';

//components

//import Opciones from '../global/Opciones';


//data
//import items from '../data/opcionesmenu';



//assets
import './styles.css';
import './css/fontello.css';



class Rest extends Component {
	render() {

		return (
				<div className="Rest">
				

					<div className="container-fluid img1 ">
					<img src="/images/foda2.jpg"/>


					</div>

					<div className="container img2 .d-sm-flex ">
					<img src="/images/foda1.jpg"/>


					</div>

					<div className="container img3 .d-sm-flex ">
					<img src="/images/foda3.png"/>


					</div>

					<div className="container img4 .d-sm-flex ">
					<img src="/images/foda4.jpg"/>


					</div>

					<div className="container img5 .d-sm-flex ">
					<img src="/images/foda5.png"/>


					</div>

					<div className="container video .d-sm-flex ">
					<video controls preload>
					<source src="/images/Qué es el análisis DAFO o FODA y cómo hacerlo - Curso de Marketing Digital.mp4" />
					</video>


					</div>

				</div>
			);
		
	}
}

export default Rest;