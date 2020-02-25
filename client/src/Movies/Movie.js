import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Movie = ({ savedList, setSavedList }) => {
	const [movie, setMovie] = useState()

	const { id } = useParams()

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then(response => {
				setMovie(response.data)
			})
			.catch(error => {
				console.error(error)
			})
	}, [id])

	if (!movie) {
		return <div>Loading movie information...</div>
	}

	return (
		<div className='save-wrapper'>
			<MovieCard movie={movie} />
			<div className='save-button' onClick={() => setSavedList([...savedList, movie])}>
				Save
			</div>
		</div>
	)
}

export default Movie
