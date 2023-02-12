import axios from "axios";

const apihttp = axios.create({
    baseURL: "http://www.omdbapi.com/"
});

const http = axios.create({
    baseURL: "http://localhost:8080/api/v1"
});

export const getMovies = async () => {
    const res = await http.get("/movies")
    return res.data;
}

export const getMovieByTitle = async (title) => {
    const res = await apihttp.get(`?apikey=59a1f576&t=${title}`)
    // console.log(title)
    return res.data;
}