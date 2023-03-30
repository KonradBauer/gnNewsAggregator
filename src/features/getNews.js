import axios from "axios";

const apiKey = "apiKey=d4f58b6eeae34792956fb954c1bf4e38";
const address = "https://newsapi.org/v2/top-headlines?";

export const getNews = (country) =>
  axios.get(`${address}country=${country}&${apiKey}`).then((response) => response.data);
