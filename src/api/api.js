import axios from "axios";

const api = axios.create({
    baseURL: 'https://newsapi.org/v2/everything?language=pt&q=netflix&from=2021-09-25&sortBy=publishedAt&apiKey=2ff958e5d567477a9047094b98be9f20'
});

export default api;