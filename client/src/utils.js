let apiBaseUrl;

if (process.env.NODE_ENV === "production") {
	apiBaseUrl = `https://netflix-clone-omobolaji-api.vercel.app`;
} else {
	apiBaseUrl = "";
}

export default apiBaseUrl;
