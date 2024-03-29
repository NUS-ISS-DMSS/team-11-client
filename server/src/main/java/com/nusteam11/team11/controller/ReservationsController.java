package com.nusteam11.team11.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nusteam11.team11.model.Reservations;
import com.nusteam11.team11.repository.SpaceAmenitiesRepository;
import com.nusteam11.team11.repository.TimeSlotsRepository;
import com.nusteam11.team11.repository.UsersRepository;
import com.nusteam11.team11.service.ReservationsService;

@RestController
@RequestMapping("/reservation")
@CrossOrigin
public class ReservationsController {

    @Autowired
    private ReservationsService reservationsService;

    @Autowired
    private SpaceAmenitiesRepository spaceAmenitiesRepository;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private TimeSlotsRepository timeSlotsRepository;

    @PostMapping("/createReservation")
    public ResponseEntity<String> add(@RequestBody Reservations reservations) {
        int spaceID = reservations.getSpace().getId();
        int userID = reservations.getUser().getId();
        int timeSlotID = reservations.getTimeSlot().getId();

        if (!reservations.getReservation_date().isEmpty()
                && !reservations.getStatus().isEmpty()
                && spaceAmenitiesRepository.existsById(spaceID)
                && usersRepository.existsById(userID)
                && timeSlotsRepository.existsById(timeSlotID)) {
            reservationsService.saveReservations(reservations);
            return ResponseEntity.status(HttpStatus.CREATED).body("New reservation is added");
        } else if (reservations.getReservation_date().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Reservation Date is empty.");
        } else if (reservations.getStatus().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Status is empty.");
        } else if (!spaceAmenitiesRepository.existsById(spaceID)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Space Amenities ID does not exist.");
        } else if (!usersRepository.existsById(userID)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User ID does not exist.");
        } else if (!timeSlotsRepository.existsById(timeSlotID)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Timeslot ID does not exist.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Reservation field is empty and all ID does not exist.");
        }
    }

    @GetMapping("/getAllReservations")
    public List<Reservations> getAllReservations(Reservations reservations, @RequestParam int userID){
        List<Reservations> filteredReservations = reservationsService.getAllReservations(reservations, userID).stream()
            .filter(foundReservation -> foundReservation.getUser().getId() == userID)
            .collect(Collectors.toList());
            return filteredReservations;
    }
}
