package com.nusteam11.team11.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nusteam11.team11.model.TimeSlots;
import com.nusteam11.team11.service.TimeSlotsService;

@RestController
@RequestMapping("/timeSlot")
@CrossOrigin
public class TimeSlotsController {

    @Autowired
    private TimeSlotsService timeSlotsService;

    @PostMapping("/createTimeSlots")
    public ResponseEntity<String> add(@RequestBody TimeSlots timeSlot) {

        if (!timeSlot.getStart_time().isEmpty()
                && !timeSlot.getEnd_time().isEmpty()) {
            timeSlotsService.saveTimeSlots(timeSlot);
            return ResponseEntity.status(HttpStatus.CREATED).body("New timeslot is added");
        } else if (timeSlot.getStart_time().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Start Time is empty.");
        } else if (timeSlot.getEnd_time().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("End Time is empty.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                    .body("All fields are empty.");
        }
    }

    @GetMapping("/getAllTimeSlots")
    public List<TimeSlots> getAllTimeSlots(TimeSlots timeSlot) {
        return timeSlotsService.getAllTimeSlots(timeSlot);
    }
}
