import React from 'react';
// import { avengers } from '../avengersData';
import { Route, Link } from 'react-router-dom';

import AvengerDetails from './AvengerDetails';
import AvengerMovies from './AvengerMovies';


const SingleAvenger = props => {
		// console.log(props)
	// console.log(props.match)
	// console.log(props.match.params.id)
	// const id = props.match.params.id;
	const avenger = props.avenger.find(avenger => props.match.params.id === `${avenger.id}`);
	// console.log(avenger.movies)
	return (
		<div className='avengers'>
			<h2>{avenger.name}</h2>
			<img src={avenger.img} alt='shut up alt'/>
			<p><strong>The {avenger.nickname}</strong></p>

			<nav>
				<Link to={`/SingleAvenger/${props.match.params.id}`}>Description</Link>
				<Link to={`/SingleAvenger/${props.match.params.id}/AvengerMovies`}>Movies</Link>
			</nav>

			<Route 
				path="/SingleAvenger/:id/" 
				exact
				render={() => <AvengerDetails 
				description={avenger.description} 
			/>} />
			<Route 
				path="/SingleAvenger/:id/AvengerMovies" 
				
				render={() => <AvengerMovies 
				movies={avenger.movies}
			/>} />
		</div>
	);
}

export default SingleAvenger;