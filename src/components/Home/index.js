//Dependencies
import React, { Component } from 'react';

//components

//import Opciones from '../global/Opciones';


//data
//import items from '../data/opcionesmenu';



//assets
import './styles.css';


class Home extends Component {
	render() {

		return (
				<div className="Home">
				
					<div className="container title .d-sm-flex ">
					<p> Análisis FODA</p>


					</div>

					<div className="container cuadro1 .d-sm-flex">
						<p>¿Qué es esta herramienta?</p>
						<br/>
						<p className="p1">Un cuadro de situación que resume las Fortalezas, Oportunidades, Debilidades y Amenazas que enfrenta una empresa, y que permite trazar cursos de acción sobre la base de un diagnostico tanto interno como externo. </p><br/>
						<p className="p1">Una de las ventajas de este modelo de análisis es que puede ser aplicado en cualquier situación de gestión, tipo de empresa (independiente de su tamaño y actividad) o área de negocio. El primer paso que debemos dar es describir la situación actual de la empresa o del departamento en cuestión, identificar las estrategias, los cambios que se producen en el mercado y nuestras capacidades y limitaciones. Esto nos servirá de base para hacer un análisis histórico, casual y proyectivo.</p><br/>
					
						<p className="p2">FODA es una herramienta analítica que permite trabajar con toda la información que se posea sobre una organización, sea ésta institución o empresa. </p><br/>

						<ul className="ulprimero">
						    <li>Fortalezas</li>
						    <li>Oportunidades</li>
						    <li>Debilidades</li>
						    <li>Amenazas</li>
						</ul><br/>

						<p className="p1">Tiene múltiples aplicaciones y puede ser usado por todos los niveles de la corporación y en diferentes unidades de análisis tales como producto-mercado, línea de productos, corporación, empresa, división, unidad estratégica de negocios, etc.</p><br/>
						<p className="p1">Debe enfocarse solamente hacia los factores claves para el éxito de su negocio.</p><br/>
						<p className="p1">Debe resaltar las fortalezas y las debilidades diferenciales internas al comprarlo de manera objetiva y realista con la competencia y con las oportunidades y amenazas claves del entorno.</p><br/>


						</div>


					<div className="container cuadro2 .d-sm-flex">
						<p>Análisis FODA consta de dos partes:</p>
						<br/>

						<ul>
					    <li>La parte interna</li>
					    <li>La parte externa</li>
					   
						</ul><br/>

						<p>Parte interna.</p>

					<ul>
					    <li>Tiene que ver con las fortalezas y las debilidades de su negocio, aspectos sobre los cuales usted tiene algún grado de control.</li>
					    
					   
					</ul><br/>

					<p>Ejemplos de la parte interna del análisis FODA</p><br/>

					<ul>
					    <li>Logística</li>
					    <li>Compras</li>
					    <li>Aprovechamiento del espacio</li>
					    <li>Conservación</li>
					    <li>Sistemas</li>
					    <li>Control del stock</li>
					    <li>Control Físico</li>
					    <li>Operaciones</li>
					    <li>Descripción técnica</li>
					    <li>Mantenimiento preventivo</li>
					    <li>Costos Fijos</li>
					  
					   
					</ul><br/>

					<p>Se consideró:</p><br/>

					<ul>
					    <li>Análisis de recursos:
 Capital, recursos humanos, sistemas de información, activos fijos, activos no tangibles</li>
					    <li>Análisis de actividades:
 Recursos gerenciales, recursos estratégicos, creatividad.</li>
					    <li>Análisis de riesgos: 
Con relación a los recursos y a las actividades de la empresa.</li>
					    <li>Hacer preguntas como:<br/><p>¿Cuáles son aquellos cinco a siete aspectos donde usted cree que supera a sus principales competidores?</p><br/><p>¿Cuáles son aquellos cinco a siete aspectos donde usted cree que sus competidores lo superan?</p></li>
					    
					   
					</ul><br/>

						</div>


					<div className="container cuadro3 .d-sm-flex">
						<p>Clasificación básica de las fortalezas</p>
						<br/>
						
						<ul>
					    <li>Fortalezas Organizacionales Comunes: 
Cuando una determinada fortaleza es poseída por un número de empresas competidoras. La paridad competitiva se da cuando un gran número de empresas competidoras están en capacidad de implementar la misma estrategia.</li>
					    <li>Fortalezas Distintivas: 
Cuando una determinada fortaleza es poseída solamente por un reducido número de empresas competidoras. Las empresas que saben explotar su fortaleza distintiva. Generalmente logran una ventaja competitiva y obtienen utilidades económicas por encima del promedio de su industria.</li>
					    <li>Fortalezas de Imitación de las Fortalezas Distintivas:
Es la capacidad de copiar la fortaleza distintiva de otra empresa y de convertirla en una estrategia que genere utilidad económica.
La ventaja será temporalmente sostenible, cuando subsiste después que cesan todos los intentos de imitación estratégica por parte de la competencia.</li>
					    
					   
					</ul><br/>

					<p>Parte externa.</p><br/>

					<p>Ejemplos de la parte externa del análisis FODA</p><br/>

					<ul>
					    <li>Política fiscal</li>
					    <li>Insumos importados</li>
					    <li>Competidores externos</li>
					    <li>Exportaciones</li>
					    <li>Políticas públicas</li>
					    <li>Política económica</li>
					    <li>Políticas de fomento</li>
					    <li>Ámbito sociocultural</li>
					    <li>Acceso a la información</li>
					    <li>Tecnología</li>
					    <li>Globalización</li>
					  
					   
					</ul><br/>

					<p>Se Considero:</p><br/>

					<ul>
					    <li>Análisis del entorno:
Estructura de su industria (Proveedores, canales de distribución, clientes, mercados, competidores).</li>
					    <li>Grupos de interés: 
Gobierno, instituciones públicas, sindicatos, gremios, accionistas, comodidad.</li>
					    <li>El entorno visto en forma más amplia:
Aspectos demográficos, políticos, legislativos, etc.</li>
					    <li>Preguntas como:<br/><p>¿Cuáles son realmente las mayores amenazas que enfrenta en el entorno?</p><br/><p>¿Cuáles son las mejores oportunidades que tiene?</p></li>
					    
					   
					</ul><br/>

						</div>	

					<div className="container cuadro4 .d-sm-flex">
						<p>Matriz FODA</p><br/>
						<p>Al tener ya determinadas cuáles son las FODA en un primer plano, nos permite determinar los principales elementos de fortalezas, oportunidades, amenazas y debilidades, lo que implica ahora hacer un ejercicio de mayor concentración en dónde se determine, teniendo como referencia a la Misión y la Visión, cómo afecta cada uno de los elementos de FODA. Después de obtener una relación lo más exhaustiva posible, se ponderan y ordenan por importancia cada uno de los FODA a efecto de quedarnos con los que revisten mayor importancia.</p><br/>
						</div>

					<div className="container cuadro5 .d-sm-flex">
						<p>Estrategia DA (Mini-Mini)</p><br/>
						<p>En general, el objetivo de la estrategia DA (Debilidades -vs- Amenazas), es el de minimizar tanto las debilidades como las amenazas. Una institución que estuviera enfrentada sólo con amenazas. Una institución que estuviera enfrentada sólo como amenazas externas y con debilidades internas, pudiera encontrarse en una situación totalmente precaria. De hecho, tal institución tendría que luchar por su supervivencia o llegar hasta su liquidación. Pero existen otras alternativas.</p><br/>
						<p>Por ejemplo, esta institución podría reducir sus operaciones buscando ya sea sobreponerse a sus debilidades o para esperar tiempos mayores, cuando desaparezcan esas amenazas (a menudo esas son falsas esperanzas). Sin embargo, cualquier que sea la estrategia seleccionada, la posición DA deberá siempre tratar de evitar.</p><br/>
						</div>

					<div className="container cuadro6 .d-sm-flex">
						<p>Estrategia DO (Mini-Maxi)</p><br/>
						<p>La segunda estrategia, DO (Debilidades -vs- Oportunidades). Intenta minimizar las debilidades y maximizar las oportunidades. Una institución podría identificar oportunidades en el medio ambiente externo pero tener debilidades organizacionales que le eviten.
La segunda estrategia, DO (Debilidades -vs- Oportunidades). Intenta minimizar las debilidades y maximizar las oportunidades. Una institución podría identificar oportunidades en el medio ambiente externo pero tener debilidades organizacionales que le eviten.</p><br/>
						<p>Aprovechar las ventajas del mercado. Por ejemplo, la UNFV se le podría presentar la oportunidad de una gran demanda por sus egresados, pero su capacidad instalada podría ser insuficiente. Una estrategia posible seria adquirir esa capacidad con instalaciones gubernamentales. Una táctica alternativa podría ser obtener mayor presupuesto para construir las instalaciones necesarias. Es claro que otra estrategia seria el no hacer absolutamente nada y dejar pasar la oportunidad y que la aproveché la competencia.</p><br/>
						</div>

					<div className="container cuadro7 .d-sm-flex">
						<p>Estrategia FA(Maxi-Mini)</p><br/>
						<p>Esta estrategia FA (Fortalezas -vs- Amenazas)</p><br/>
						<p>Se basa en las fortalezas de la empresa u organización que puede copiar con las amenazas del medio ambiente externo. Su objetivo es maximizar las primeras mientras se minimizan las segundas. Esto, sin embargo, no significa necesariamente que una empresa fuerte tenga que dedicarse a buscar amenazas en el medio ambiente externo para enfrentarlas. Por lo contrario, las fortalezas de una empresa deben ser usadas con mucho cuidado y discreción.</p><br/>
						</div>

					<div className="container cuadro8 .d-sm-flex">
						<p>Estrategia FO (Maxi-Maxi)</p><br/>
						<p>A cualquier empresa le agradaría estar siempre en la situación donde pudiera maximizar tanto sus fortalezas como sus oportunidades, es decir aplicar siempre la estrategia FO (Fortalezas -vs- Oportunidades), tales empresas podrían echar mano de sus fortalezas, utilizando recursos para aprovechar la oportunidad del mercado por sus productos y servicios. Por ejemplo, la UNFV con su prestigio ampliamente reconocido como una se sus grandes fortalezas, podría aprovechar la oportunidad de la gran demanda externa por profesionales altamente capacitados.</p><br/>
						</div>			

					

				</div>
			);
		
	}
}

export default Home;