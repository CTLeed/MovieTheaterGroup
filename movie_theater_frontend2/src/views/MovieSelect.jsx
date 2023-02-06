import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { getMovieByTitle } from "../services/movieService";
import { theme } from '../static/themeOptions.ts'
import { ThemeProvider } from "@emotion/react";


export const MovieSelect = () => {
    const [movie, setMovie] = useState({})
    const [formData, setFormData] = useState({})

    const options = [
        {
            label: 'Avatar',
            value: 'avatar'
        },
        {
            label: 'Ant Man',
            value: 'ant+man'
        },
        {
            label: 'The Dark Knight',
            value: 'the+dark+knight'
        }
    ]

    useEffect(() => {
        getMovieByTitle("avatar")
            .then((data) => {
                setMovie(data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const handleFormChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.title]: e.target.value
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="background">
                <Paper>

                </Paper>
                <form onSubmit={(e) => {
                    handleSubmit(e);
                }}>
                    <div className="form-group">
                        <select onSelect={handleFormChanges}>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </form>
                <h1 style={{ color: 'black' }}>{movie.Title}</h1>
                <img src={movie.Poster} />
            </div>
        </ThemeProvider>
    )
}