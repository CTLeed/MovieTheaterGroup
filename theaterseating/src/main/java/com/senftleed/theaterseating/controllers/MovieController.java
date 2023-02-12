package com.senftleed.theaterseating.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senftleed.theaterseating.models.Movie;
import com.senftleed.theaterseating.services.MovieService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class MovieController {

	@Autowired
	MovieService movieServ;
	
	@GetMapping("/movies")
	public List<Movie> getAll() {
		return movieServ.getAllMovies();
	}
	
}
