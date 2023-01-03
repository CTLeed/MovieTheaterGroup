package com.senftleed.theaterseating.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import com.senftleed.theaterseating.services.SeatService;

public class SeatController {

	@Autowired
	SeatService seatServ;
}
