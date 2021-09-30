// jshint ignore:start
import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { fetchDataAction } from "../fetchDataAction"
import Row from "../Row"
import Banner from "../Banner"

const Movie = () => {
  const dispatch = useDispatch()
  const fetchData = useSelector(state => state.fetchData)
  const {loading} = fetchData

    useEffect(() => {
      dispatch(fetchDataAction())
    }, [dispatch])

    return !loading && (
    <div className="app">
      {/* banner component */}
        <Banner />
      {/* row components */}
      <Row title="Netfelix Originals" fetchPath="fetchNetfelixOriginals" isLarge />
      <Row title="Trending Now" fetchPath="fetchTrending" />
      <Row title="Top Rated" fetchPath="fetchTopRated" />
      <Row title="Action Movies" fetchPath="fetchActionMovies" />
      <Row title="Comedy Movies" fetchPath="fetchComedyMovies" />
      <Row title="Romance Movies" fetchPath="fetchRomanceMovies" />
      <Row title="Horror Movies" fetchPath="fetchHorroMovies" />
      <Row title="documentaries" fetchPath="fetchDocumentaries" />
    </div>
  );
}

export default Movie