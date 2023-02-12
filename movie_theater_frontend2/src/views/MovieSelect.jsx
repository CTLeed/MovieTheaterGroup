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
    const [movie, setMovie] = useState({})
    const [movies, setMovies] = useState([])
    const [apiMovie, setApiMovie] = useState({});
    const [apiMovieList, setAPIMovieList] = useState([])

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

    const handleChange = (e) => {
        setApiMovie(e.target.value);
        let title = apiMovie.name.replace(" ", "+");
        getMovieByTitle(title)
            .then((data) => {
                setMovie(data);
            }).catch((error) => {
                console.log(error);
            })
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="background">
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sx={{ marginTop: '20px' }}>
                            <img src={movie.Poster} height="100%" />
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
                {/* <h1 style={{ color: 'black' }}>{apiMovie.Title}</h1>
                <img src={apiMovie.Poster} /> */}
            </div>
        </ThemeProvider >
    )
}