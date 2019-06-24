import React from 'react';
// import { avengers } from '../avengersData';


const Avenger = props => {
	// console.log(props.match)
	return (
		<div className='avengers'>
			<h1>Avenger</h1>
			<h2>{props.name}</h2>
			<img src={props.img} alt='shut up alt'/>
			<p><strong>The {props.nickname}</strong></p>
			<p>{props.description}</p>
		</div>
	)
}

export default Avenger;