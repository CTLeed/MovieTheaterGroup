package com.senftleed.theaterseating.repositories;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.senftleed.theaterseating.models.Seat;

@Repository
public interface SeatRepository extends CrudRepository<Seat, Long> {

	List<Seat> findAll();

//	@Query(value="SELECT * FROM seats WHERE name IN ("+selectedSeatsNames+")", nativeQuery = true)
//	List<Seat> findSelectedSeats(List<Seat> selectedSeats);
	
}
