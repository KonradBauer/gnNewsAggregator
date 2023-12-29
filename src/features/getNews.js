import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const address = "https://newsapi.org/v2/top-headlines?";

export const getNews = (country) =>
  axios.get(`${address}country=${country}&apiKey=${apiKey}`).then((response) => response.data);
