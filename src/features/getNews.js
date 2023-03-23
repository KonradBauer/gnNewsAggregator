import axios from "axios";

const apiKey = "apiKey=80881ac4e46d42dbab5150de145d9be1";
const address = "https://newsapi.org/v2/top-headlines?";

export const getNews = (country) =>
  axios.get(`${address}country=${country}&${apiKey}`).then((response) => response.data);
