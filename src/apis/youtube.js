import axios from 'axios';

const KEY="AIzaSyA7gPZ-xSQTsmc5bP5DNDbZs8GAxusZxNQ";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});