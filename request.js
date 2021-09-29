import dotenv from "dotenv"
dotenv.config()

export default {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}&language=en-US`,
    fetchNetfelixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&with_genres=28`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.API_KEY}&with_genres=35`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.API_KEY}&with_genres=27`,
    fetchHorroMovies: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.API_KEY}&with_genres=10749`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.API_KEY}&with_genres=37&language-en-US`,
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.API_KEY}&with_genres=99`,
}