package com.senftleed.theaterseating.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.senftleed.theaterseating.models.Seat;

@Repository
public interface SeatRepository extends CrudRepository<Seat, Long> {

	List<Seat> findAll();
	
	@Query(value="UPDATE * FROM movie_theater.seats SET is_selected = 0 WHERE is_selected = 1", nativeQuery = true)
	List<Seat> resetSeats();
}
