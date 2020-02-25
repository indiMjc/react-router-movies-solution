import React from 'react'
import { NavLink } from 'react-router-dom'

const SavedList = props => {
	return (
		<div className='saved-list'>
			<h3>Saved Movies:</h3>
			{props.savedList.map(movie => (
				<span key={movie.title} className='saved-movie'>
					{movie.title}
				</span>
			))}
			<div>
				<NavLink to='/' className='home-button' style={{ textDecoration: 'none', color: 'black' }}>
					Home
				</NavLink>
				<button className='clear-all-button' onClick={() => props.clearAll([])}>
					Clear All
				</button>
			</div>
		</div>
	)
}

export default SavedList
