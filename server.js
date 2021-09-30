import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import axios from 'axios';
import request from './request.js';
import path from 'path';

const app = express();
const port = process.env.PORT;

app.get('/seed', async (req, res) => {
	try {
		const { data: fetchTrending } = await axios.get(request.fetchTrending);
		const { data: fetchNetfelixOriginals } = await axios.get(
			request.fetchNetfelixOriginals
		);
		const { data: fetchTopRated } = await axios.get(request.fetchTopRated);
		const { data: fetchActionMovies } = await axios.get(
			request.fetchActionMovies
		);
		const { data: fetchComedyMovies } = await axios.get(
			request.fetchComedyMovies
		);
		const { data: fetchRomanceMovies } = await axios.get(
			request.fetchRomanceMovies
		);
		const { data: fetchHorroMovies } = await axios.get(
			request.fetchHorroMovies
		);
		const { data: fetchDocumentaries } = await axios.get(
			request.fetchDocumentaries
		);
		res.send({
			fetchTrending,
			fetchNetfelixOriginals,
			fetchTopRated,
			fetchActionMovies,
			fetchComedyMovies,
			fetchRomanceMovies,
			fetchHorroMovies,
			fetchDocumentaries,
		});
	} catch (err) {
		res.send({ err });
	}
});

// Serve statis asset if in production
if (process.env.NODE_ENV === 'production') {
	// set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
