package com.senftleed.theaterseating.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import com.senftleed.theaterseating.services.UserService;

public class UserController {

	@Autowired
	UserService userServ;
}
