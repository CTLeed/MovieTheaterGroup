package com.senftleed.theaterseating.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="movies")
public class Movie {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	@DateTimeFormat(pattern="hh:mm:ss")
	private Date timeOne;
	
	@DateTimeFormat(pattern="hh:mm:ss")
	private Date timeTwo;
	
	@DateTimeFormat(pattern="hh:mm:ss")
	private Date timeThree;

	public Movie() {
		super();
	}

	public Movie(String name, Date timeOne, Date timeTwo, Date timeThree) {
		super();
		this.name = name;
		this.timeOne = timeOne;
		this.timeTwo = timeTwo;
		this.timeThree = timeThree;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getTimeOne() {
		return timeOne;
	}

	public void setTimeOne(Date timeOne) {
		this.timeOne = timeOne;
	}

	public Date getTimeTwo() {
		return timeTwo;
	}

	public void setTimeTwo(Date timeTwo) {
		this.timeTwo = timeTwo;
	}

	public Date getTimeThree() {
		return timeThree;
	}

	public void setTimeThree(Date timeThree) {
		this.timeThree = timeThree;
	}

	


	
}
