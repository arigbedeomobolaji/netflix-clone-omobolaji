import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState(null)
  const fetchData = useSelector(state => state.fetchData)
  const {data} = fetchData
  const fetchTrending = "fetchTrending"

  useEffect(() => {
    const randMovie = (movies) => {
      return movies[Math.floor(Math.random() * movies.length)]
    }
    if(data[fetchTrending]){
      setMovie(randMovie(data[fetchTrending].results))
  }
  }, [data, fetchTrending])


  return (
      movie  &&  (
      <div 
        className="banner" 
        style={{
      background: `url(https://image.tmdb.org/t/p/original${movie.poster_path}) no-repeat center center/cover`
    }}>
      <div className="banner__overlay">
        <div className="banner__content">
          <h2 className="banner__title">{movie.title ? movie.title : movie.name ? movie.name : "loading name"}</h2>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button"> My List</button>
          </div>
          <p className="banner__overview">{movie.overview.substring(0, 200)}...</p>
        </div>      
      </div>
    </div>
    )
  )
}

export default Banner
