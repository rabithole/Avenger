import React from 'react';
// import { avengers } from '../avengersData';
// import SingleAvenger from './components/SingleAvenger';


import Avenger from './Avenger';
import { Link } from 'react-router-dom';


const AvengersList = props => {
	// console.log(props)
		return (
			<div className='list'>
				<header>
					<h1>The Avengers</h1>
				</header>
				{props.avenger.map(item => (
					<Link to={`/SingleAvenger/${item.id}`}>
						<Avenger
							name={item.name}
							img={item.img}
							nickname={item.nickname}
							description={item.description}
							key={Math.floor(Math.random() * 10000) + 10}
						/>
					</Link>
				))}
			</div>
		)
}

export default AvengersList;