import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Movie = ({ savedList, setSavedList, addToSavedList }) => {
	const [movie, setMovie] = useState()

	let deleteMovie = movieToRemove => {
		setSavedList(savedList.filter(movie => movie != movieToRemove))
	}

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

	const saveMovie = movie => {
		addToSavedList(movie)
	}

	if (!movie) {
		return <div>Loading movie information...</div>
	}

	return (
		<div className='save-wrapper'>
			<MovieCard movie={movie} />
			<div className='save-button' onClick={() => saveMovie(movie)}>
				Save
			</div>
			<div
				className='save-button'
				onClick={() => deleteMovie(movie)}
				style={{ position: 'absolute', top: '60px', backgroundColor: 'red', color: 'white' }}
			>
				Delete
			</div>
		</div>
	)
}

export default Movie
