import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getMovieByTitle, getMovies } from "../services/movieService";
import { theme } from '../static/themeOptions.ts'
import { ThemeProvider } from "@emotion/react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

export const MovieSelect = () => {
    const [movie, setMovie] = useState({});
    const [movies, setMovies] = useState([]);
    const [avatar, setAvatar] = useState({});
    const [darkKnight, setDarkKnight] = useState({});
    const [matrix, setMatrix] = useState({});

    useEffect(() => {
        getMovies()
            .then((data) => {
                setMovies(data);
                console.log(data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const handleSubmit = (e) => {

    }

    useEffect(() => {
        getMovieByTitle("avatar")
            .then((data) => {
                setAvatar(data.Poster);
            }).catch((error) => {
                console.log(error);
            });
        getMovieByTitle("the+dark+knight")
            .then((data) => {
                setDarkKnight(data.Poster);
            }).catch((error) => {
                console.log(error);
            });
        getMovieByTitle("the+matrix")
            .then((data) => {
                setMatrix(data.Poster);
                console.log(matrix);
            }).catch((error) => {
                console.log(error);
            });
    }, [])


    const handleChange = (e) => {
        setMovie(e.target.value);
    };

    const MoviePoster = () => {
        if (movie.name == "The Matrix") {
            return (
                <img src={matrix} height="100%" />
            )
        } if (movie.name == "The Dark Knight") {
            return (
                <img src={darkKnight} height="100%" />
            )
        } if (movie.name == "Avatar") {
            return <img src={avatar} height="100%" />
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="background">
                <Container sx={{ alignItems: 'center' }} >
                    <Grid container spacing={2}>
                        <Grid item xs={6} sx={{ marginTop: '20px' }}>
                            <MoviePoster />
                        </Grid>
                        <Grid item xs={6} alignItems='center'>
                            <Box sx={{ width: '50%', paddingTop: '20px' }}>
                                <FormControl onSubmit={handleSubmit} fullWidth>
                                    <InputLabel id="label" sx={{ color: 'secondary.light' }}>Movie</InputLabel>
                                    <Select
                                        className="Select"
                                        labelId="label"
                                        id="select"
                                        value={movie.name}
                                        label="Movie"
                                        onChange={handleChange}
                                        sx={{ color: 'secondary.light' }}
                                    >
                                        {
                                            movies.map((movie, index) => {
                                                return (
                                                    <MenuItem className="MenuItem" sx={{ color: 'secondary.light', backgroundColor: 'transparent' }} key={index} value={movie}>{movie.name}</MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                    <Button sx={{ m: 2, fontWeight: 'bold' }} variant="contained" color="secondary" type='submit'>Let's Go!</Button>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </ThemeProvider >
    )
}