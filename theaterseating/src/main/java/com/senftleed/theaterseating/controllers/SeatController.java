package com.senftleed.theaterseating.controllers;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senftleed.theaterseating.models.Seat;
import com.senftleed.theaterseating.services.SeatService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class SeatController {

	@Autowired
	SeatService seatServ;
	
	
	@GetMapping("/seats")
	public List<Seat> getAll() {;
		return seatServ.getAllSeats();
	}
	
	
    @PostMapping("/seats/update")
    public List<Seat> updateGroup(@RequestBody Seat seat) {
        System.out.printf("Request to update seat: {}", seat);
        seatServ.reserveSeat(seat);
        return seatServ.getAllSeats();
    }

	

}
