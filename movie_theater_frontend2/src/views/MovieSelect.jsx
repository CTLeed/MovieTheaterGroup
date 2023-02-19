import { Box, Card, Container, Grid, RadioGroup } from "@mui/material";
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
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);

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
                setAvatar(data);
            }).catch((error) => {
                console.log(error);
            });
        getMovieByTitle("the+dark+knight")
            .then((data) => {
                setDarkKnight(data);
            }).catch((error) => {
                console.log(error);
            });
        getMovieByTitle("the+matrix")
            .then((data) => {
                setMatrix(data);
                console.log(matrix);
            }).catch((error) => {
                console.log(error);
            });
    }, [movie])


    const handleChange = (e) => {
        setMovie(e.target.value);
    };

    const MoviePoster = () => {
        if (movie.name == "The Matrix") {
            return <img src={matrix.Poster} height="100%" />
        } if (movie.name == "The Dark Knight") {
            return <img src={darkKnight.Poster} height="100%" />
        } if (movie.name == "Avatar") {
            return <img src={avatar.Poster} height="100%" />
        }
    }

    const handleButton1 = () => {
        setIsChecked1(!isChecked1);
        setIsChecked2(false);
        setIsChecked3(false);
    }
    const handleButton2 = () => {
        setIsChecked1(false);
        setIsChecked2(!isChecked2);
        setIsChecked3(false);
    }
    const handleButton3 = () => {
        setIsChecked1(false);
        setIsChecked2(false);
        setIsChecked3(!isChecked3);
    }

    const MovieTimes = () => {
        const movieTimeOne = new Date(movie.timeOne);
        const movieTimeTwo = new Date(movie.timeTwo);
        const movieTimeThree = new Date(movie.timeThree);
        const formattedTimeOne = movieTimeOne.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        const formattedTimeTwo = movieTimeTwo.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        const formattedTimeThree = movieTimeThree.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        if (movie.name == "The Matrix" || movie.name == "The Dark Knight" || movie.name == "Avatar") {
            return (
                <RadioGroup default row sx={{ justifyContent: 'center', margin: '10px auto 0px', alignItems: 'center' }}>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item xs={4}>
                            <Button variant={isChecked1 ? 'contained' : 'outlined'} size="small" color="secondary" onClick={handleButton1}>{formattedTimeOne}</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant={isChecked2 ? 'contained' : 'outlined'} size="small" color="secondary" onClick={handleButton2}>{formattedTimeTwo}</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant={isChecked3 ? 'contained' : 'outlined'} size="small" color="secondary" onClick={handleButton3}>{formattedTimeThree}</Button>
                        </Grid>
                    </Grid>
                </RadioGroup>
            )
        }
    }

    const MovieDescription = () => {
        if (movie.name == "The Matrix") {
            return (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <p>Rating: {matrix.Rated} </p>
                        <p>Run-time: {matrix.Runtime}</p>
                    </div>
                    <p>{matrix.Plot}</p>
                </div>
            )
        }
        if (movie.name == "The Dark Knight") {
            return (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <p>Rating: {darkKnight.Rated}</p>
                        <p>Run-time: {darkKnight.Runtime}</p>
                    </div>
                    <p>{darkKnight.Plot}</p>
                </div>
            )
        }
        if (movie.name == "Avatar") {
            return (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <p>Rating: {avatar.Rated}</p>
                        <p>Run-time: {avatar.Runtime}</p>
                    </div>
                    <p>{avatar.Plot}</p>
                </div>
            )
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="background">
                <Container alignItems='center'>
                    <Grid container spacing={2} alignItems='center' height='100vh'>
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
                                        value={movie}
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
                                    <MovieTimes />
                                    <Button sx={{ m: 2, fontWeight: 'bold' }} variant="contained" color="secondary" type='submit'>Let's Go!</Button>
                                    <MovieDescription />
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </ThemeProvider >
    )
}