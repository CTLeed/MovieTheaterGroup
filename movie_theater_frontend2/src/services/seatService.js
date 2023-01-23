import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8080/api/v1"
});

export const getSeats = async () => {
    const res = await http.get("/seats")
    return res.data
}

export const updateSeats = async (data) => {
    const res = await http.post("/seats/update", data)
    return res.data
}


