import axios from "axios";

export const fetchDataAction = () => {
	return async (dispatch) => {
		dispatch({ type: "FETCH_DATA_REQUEST" });
		try {
			const { data } = await axios.get(
				"https://netflix-clone-omobolaji-api.vercel.app/seed"
			);
			dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
		} catch (err) {
			const message =
				err.response && err.response.data.err
					? err.response.data.err
					: err.message;
			dispatch({ type: "FETCH_DATA_ERROR", payload: message });
		}
	};
};
