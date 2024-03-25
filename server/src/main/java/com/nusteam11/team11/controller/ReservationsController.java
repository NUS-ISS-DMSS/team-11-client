package com.nusteam11.team11.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nusteam11.team11.model.Reservations;
import com.nusteam11.team11.repository.SpaceAmenitiesRepository;
import com.nusteam11.team11.repository.TimeSlotsRepository;
import com.nusteam11.team11.repository.UsersRepository;
import com.nusteam11.team11.service.ReservationsService;

@RestController
@RequestMapping("/reservation")
public class ReservationsController {

    @Autowired
    private ReservationsService reservationsService;

    @Autowired
    private SpaceAmenitiesRepository spaceAmenitiesRepository;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private TimeSlotsRepository timeSlotsRepository;

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody Reservations reservations) {
        int spaceAmenityID = reservations.getSpaceAmenity().getId();
        int userID = reservations.getUser().getId();
        int timeSlotID = reservations.getTimeSlot().getId();

        if (!reservations.getReservation_date().isEmpty()
                && spaceAmenitiesRepository.existsById(spaceAmenityID)
                && usersRepository.existsById(userID)
                && timeSlotsRepository.existsById(timeSlotID)) {
            reservationsService.saveReservations(reservations);
            return ResponseEntity.status(HttpStatus.CREATED).body("New reservation is added");
        } else if (reservations.getReservation_date().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Reservation Date is empty.");
        } else if (!spaceAmenitiesRepository.existsById(spaceAmenityID)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Space Amenities ID does not exist.");
        } else if (!usersRepository.existsById(userID)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User ID does not exist.");
        } else if (!timeSlotsRepository.existsById(timeSlotID)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Timeslot ID does not exist.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Reservation field is empty and all ID does not exist.");
        }
    }
}
