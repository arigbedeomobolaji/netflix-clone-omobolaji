// jshint ignore:start
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAction } from '../actions/fetchDataAction';
import Row from '../Row';
import Banner from '../Banner';

const Movie = () => {
	const dispatch = useDispatch();
	const fetchData = useSelector((state) => state.fetchData);
	const { loading } = fetchData;

	useEffect(() => {
		dispatch(fetchDataAction());
	}, [dispatch]);

	return (
		!loading && (
			<div className='app'>
				{/* banner component */}
				<Banner />
				{/* row components */}
				<Row
					column={'column'}
					title='Netfelix Originals'
					fetchPath='fetchNetfelixOriginals'
					isLarge
				/>
				<Row
					column={'column'}
					title='Trending Now'
					fetchPath='fetchTrending'
				/>
				<Row
					column={'column'}
					title='Top Rated'
					fetchPath='fetchTopRated'
				/>
				<Row
					column={'column'}
					title='Action Movies'
					fetchPath='fetchActionMovies'
				/>
				<Row
					column={'column'}
					title='Comedy Movies'
					fetchPath='fetchComedyMovies'
				/>
				<Row
					column={'column'}
					title='Romance Movies'
					fetchPath='fetchRomanceMovies'
				/>
				<Row
					column={'column'}
					title='Horror Movies'
					fetchPath='fetchHorroMovies'
				/>
				<Row
					column={'column'}
					title='documentaries'
					fetchPath='fetchDocumentaries'
				/>
			</div>
		)
	);
};

export default Movie;
