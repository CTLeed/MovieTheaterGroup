package com.senftleed.theaterseating.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senftleed.theaterseating.models.Movie;
import com.senftleed.theaterseating.repositories.MovieRepository;

@Service
public class MovieService {

	@Autowired
	MovieRepository movieRepo;
	
//	CREATE
	public Movie create(Movie newMovie) {
		return movieRepo.save(newMovie);
	}
	
//	READ ALL
	public List<Movie> getAllMovies() {
		 return movieRepo.findAll();
	}
	
//	READ ONE
	public Movie getOneMovie(Long id) {
		return movieRepo.findById(id).orElse(null);
	}
	
//	UPDATE
	public Movie updateMovie(Movie updatedMovie) {
		return movieRepo.save(updatedMovie);
	}
	
//	DELETE
	public void deleteMovie(Long id) {
		movieRepo.deleteById(id);
	}
}
