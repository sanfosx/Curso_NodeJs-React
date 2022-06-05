import React, {useState} from 'react';
import './index.css';
import styled from 'styled-components';
import DialogContent from './components/DialogContent';

const App=()=> {

	const [stateDialog1, changeStateDialog1] = useState(false);
	const [stateDialog2, changeStateDialog2] = useState(false);
	const [stateDialog3, changeStateDialog3] = useState(false);
	const [stateDialog4, changeStateDialog4] = useState(false);

	return (
		<div> 
		
			<BtnsContent> 
				<Boton onClick={() => {changeStateDialog1(!stateDialog1)}}>Modal 1</Boton> 
				<Boton onClick={() => {changeStateDialog2(!stateDialog2)}}>Modal 2</Boton> 
				<Boton onClick={() => {changeStateDialog3(!stateDialog3)}}>Modal 3</Boton> 
				<Boton onClick={() => {changeStateDialog4(!stateDialog4)}}>Modal 4</Boton> 
			</BtnsContent>

			{/*Dialog 1 */}
	 		<DialogContent
				state = {stateDialog1} 
				changeStateDialog = {changeStateDialog1}
				paddingDialog = {'20px'}
				positionDialog = {'center'}
				showHeaderDialog ={true}
				showOverlayDialog = {true}
				titleDialog = 'is a title'
			> 
				 <Contenido>
					<h1>hola mundo</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, sint.</p>
					<Boton onClick={() => {changeStateDialog1(!stateDialog1)}}>Aceptar</Boton>
				</Contenido>
			</DialogContent> 

			{/*Dialog 2 */}
			<DialogContent
				state = {stateDialog2} 
				changeStateDialog = {changeStateDialog2}
				paddingDialog = {'20px'}
				positionDialog = {'end'}
				showHeaderDialog ={false}
				showOverlayDialog = {false}
				titleDialog = 'is a title 2'
			> 
				 <Contenido>
					<h1>Dialog 2</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, sint.</p>
					<Boton onClick={() => {changeStateDialog2(!stateDialog2)}}>Aceptar</Boton>
				</Contenido>
			</DialogContent> 

			{/*Dialog 3 */}
			<DialogContent
				state = {stateDialog3} 
				changeStateDialog = {changeStateDialog3}
				paddingDialog = {'20px'}
				positionDialog = {'center'}
				showHeaderDialog ={true}
				showOverlayDialog = {false}
				titleDialog = 'is a title 3'
			> 
				 <Contenido>
					<img src="https://i.blogs.es/13fc0f/mejores-fotos-concurso-2018-00/1366_2000.jpg" alt="" />
				</Contenido>
			</DialogContent> 

			{/*Dialog 4 */}
			<DialogContent
				state = {stateDialog4} 
				changeStateDialog = {changeStateDialog4}
				paddingDialog = {'0px'}
				positionDialog = {'center'}
				showHeaderDialog ={false}
				showOverlayDialog = {false}
				titleDialog = 'is a title'
			> 
				 <Contenido>
				 	<img src="https://i.blogs.es/13fc0f/mejores-fotos-concurso-2018-00/1366_2000.jpg" alt="" />
				</Contenido>
			</DialogContent> 
	
		</div>
	);
}

export default App;

const BtnsContent=styled.div` padding: 40px;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
`;

const Boton=styled.button` display: block;
padding: 10px 30px;
border-radius: 100px;
color: #fff;
border: none;
background: #1766DC;
cursor: pointer;
font-family: 'Roboto',
sans-serif;
font-weight: 500;
transition: .3s ease all;

&:hover {
	background: #FF66FF;
}

`;

const Contenido=styled.div` display: flex;
flex-direction: column;
align-items: center;

h1 {
	font-size: 42px;
	font-weight: 700;
	margin-bottom: 10px;
}

p {
	font-size: 18px;
	margin-bottom: 20px;
}

img {
	width: 100%;
	vertical-align: top;
	border-radius: 3px;
}

`;