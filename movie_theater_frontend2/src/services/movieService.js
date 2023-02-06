import axios from "axios";

const http = axios.create({
    baseURL: "http://www.omdbapi.com/"
});

export const getMovieByTitle = async (title) => {
    const res = await http.get(`?apikey=59a1f576&t=${title}`)
    console.log(title)
    return res.data;
}