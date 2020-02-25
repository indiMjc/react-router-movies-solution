import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

import SavedList from './Movies/SavedList'

const App = () => {
	const [savedList, setSavedList] = useState([])

	const addToSavedList = movie => {
		if (!!savedList.indexOf(movie)) setSavedList([...savedList, movie])
	}

	return (
		<div>
			<SavedList savedList={savedList} clearAll={setSavedList} />
			<Route exact path='/'>
				<MovieList />
			</Route>
			<Route path='/movies/:id'>
				<Movie savedList={savedList} setSavedList={setSavedList} addToSavedList={addToSavedList} />
			</Route>
		</div>
	)
}

export default App
