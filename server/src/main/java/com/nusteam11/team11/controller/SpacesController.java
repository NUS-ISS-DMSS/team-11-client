package com.nusteam11.team11.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nusteam11.team11.model.Spaces;
import com.nusteam11.team11.service.SpacesService;

@RestController
@RequestMapping("/space")
@CrossOrigin
public class SpacesController {
    @Autowired
    private SpacesService spaceService;

    @PostMapping("/createSpaces")
    public ResponseEntity<String> add(@RequestBody Spaces space) {
        if (!space.getName().isEmpty()
                && !space.getDescription().isEmpty() && !space.getAddress().isEmpty()
                && !space.getOperate_hour_st().isEmpty() && !space.getOperate_hour_et().isEmpty()
                && !space.getDays_closed().isEmpty() && !space.getContact_num().isEmpty()
                && !space.getStation().isEmpty()
                && !space.getImage().isEmpty()) {
            spaceService.saveSpaces(space);
            return ResponseEntity.status(HttpStatus.CREATED).body("New space is added.");
        } else if (space.getName().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Name is empty.");
        } else if (space.getDescription().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Description is empty.");
        } else if (space.getAddress().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Address is empty.");
        } else if (space.getOperate_hour_st().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Operating Hours Start Time is empty.");
        } else if (space.getOperate_hour_et().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Operating Hours End Time is empty.");
        } else if (space.getDays_closed().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                    .body("Days Closed is empty. Put 'None' if there are no days closed.");
        } else if (space.getContact_num().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Contact Number is empty.");
        } else if (space.getStation().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Station is empty.");
        } else if (space.getImage().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Image is empty.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("All fields are empty.");
        }
    }
}
