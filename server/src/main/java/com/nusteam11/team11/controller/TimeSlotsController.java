package com.nusteam11.team11.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nusteam11.team11.model.TimeSlots;
import com.nusteam11.team11.repository.SpacesRepository;
import com.nusteam11.team11.service.TimeSlotsService;

@RestController
@RequestMapping("/timeSlot")
public class TimeSlotsController {

    @Autowired
    private TimeSlotsService timeSlotsService;

    @Autowired
    private SpacesRepository spacesRepository;

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody TimeSlots timeSlot) {
        int timeSlotID = timeSlot.getSpace().getId();

        if (spacesRepository.existsById(timeSlotID) && !timeSlot.getStart_time().isEmpty()
                && !timeSlot.getEnd_time().isEmpty()) {
            timeSlotsService.saveTimeSlots(timeSlot);
            return ResponseEntity.status(HttpStatus.CREATED).body("New timeslot is added");
        } else if (!spacesRepository.existsById(timeSlotID)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Space ID does not exist");
        } else if (timeSlot.getStart_time().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Start Time is empty.");
        } else if (timeSlot.getEnd_time().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("End Time is empty.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                    .body("All fields are empty and Space ID does not exist.");
        }
    }
}
