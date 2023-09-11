// jshint ignore:start
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './Row.css';

function Row({ title, fetchPath, isLarge, column }) {
	const [movies, setMovies] = useState([]);
	const [videoId, setVideoId] = useState('');
	const fetchData = useSelector((state) => state.fetchData);
	const { data } = fetchData;

	const opts = {
		height: '100%',
		width: '640',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
			controls: 0,
			autohide: 1,
			wmode: 'opaque',
			origin: 'http://localhost:3000',
		},
	};

	const handleMovieClick = async (movie) => {
		if (videoId) {
			return setVideoId('');
		}

		try {
			const response = await movieTrailer(
				movie.name || movie.title || ''
			);
			const url = new URL(response);
			const id = url.search.split('?')[1].substring(2);
			setVideoId(id);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (data[fetchPath]) {
			setMovies(data[fetchPath].results);
		}
	}, [data, fetchPath]);

	return (
		<div className={`row ${column}`}>
			<h2 className='row__title'>{title}</h2>
			{movies.length > 0 && (
				<div className='row__images'>
					{movies.map((movie) => (
						<img
							className={`${
								isLarge ? 'row__image large' : 'row__image'
							}`}
							key={movie.tile || movie.poster_path}
							src={`https://image.tmdb.org/t/p/original${
								isLarge
									? movie.poster_path
									: movie.backdrop_path
							}`}
							alt={movie.title}
							onClick={() => handleMovieClick(movie)}
						/>
					))}
				</div>
			)}
			{videoId && <Youtube videoId={videoId} ops={opts} />}
		</div>
	);
}

export default Row;
