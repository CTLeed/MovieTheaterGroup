package com.senftleed.theaterseating.services;

import java.util.List;
import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senftleed.theaterseating.models.Seat;
import com.senftleed.theaterseating.repositories.SeatRepository;

@Service
public class SeatService {

	@Autowired
	SeatRepository seatRepo;
	
//	CREATE
	public Seat create(Seat newSeat) {
		return seatRepo.save(newSeat);
	}
	
	public List<Seat> addSeats(List<Seat> seats) {
		int ii = 0;
		while(ii < seats.size()) {
			seatRepo.save(seats.get(ii));
			ii++;
		}
		return seats;		
	}
	
//	READ ALL
	public List<Seat> getAllSeats() {
		return seatRepo.findAll();
	}
	
//	READ ONE
	public Seat getOneSeat(Long id) {
		return seatRepo.findById(id).orElse(null);
	}
	
//	public List<Seat> getSelectedSeats(List<String> selectedSeats) {
//		return seatRepo.findSelectedSeats(selectedSeats);
//	}
	
//	UPDATE
	public Seat addSeat(Seat reservedSeat) {
		return seatRepo.save(reservedSeat);
	}
	

	//	DELETE
	public void deleteSeat(Long id) {
		seatRepo.deleteById(id);
	}
	
}
