import React from 'react';
import { avengers } from '../avengersData';


const SingleAvenger = props => {
	console.log(props.match)
	console.log(props.match.params.id)
	const id = props.match.params.id;
	const avenger = avengers.find(avenger => props.match.params.id === `${avenger.id}`);
	console.log(id, avenger.name)
	return (
		<div className='avengers'>
			<h2>{avenger.name}</h2>
			<img src={avenger.img} alt='shut up alt'/>
			<p><strong>The {avenger.nickname}</strong></p>
			<p>{avenger.description}</p>
		</div>
	)
}

export default SingleAvenger;