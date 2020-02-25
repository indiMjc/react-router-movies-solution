import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const MovieList = () => {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		const getMovies = () => {
			axios
				.get('http://localhost:5000/api/movies')
				.then(response => {
					setMovies(response.data)
				})
				.catch(error => {
					console.error('Server Error', error)
				})
		}

		getMovies()
	}, [])

	return (
		<div className='movie-list'>
			{movies.map(movie => (
				<NavLink key={movie.id} to={`/movies/${movie.id}`}>
					<MovieCard movie={movie} />
				</NavLink>
			))}
		</div>
	)
}

export default MovieList
