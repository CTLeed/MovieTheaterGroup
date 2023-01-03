package com.senftleed.theaterseating.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senftleed.theaterseating.repositories.SeatRepository;

@Service
public class SeatService {

	@Autowired
	SeatRepository seatRepo;
}
