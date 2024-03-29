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

import com.nusteam11.team11.model.Amenities;
import com.nusteam11.team11.service.AmenitiesService;

@RestController
@RequestMapping("/amenity")
@CrossOrigin
public class AmenitiesController {
    @Autowired
    private AmenitiesService amenitiesService;

    @GetMapping("/getAllAmenity")
    public List<Amenities> getAllAmenities(Amenities amenities) {
        return amenitiesService.getAllAmenities(amenities);
    }

    @PostMapping("/createAmenity")
    public ResponseEntity<String> add(@RequestBody Amenities amenities) {
        if (!amenities.getLabel().isEmpty() && !amenities.getValue().isEmpty()) {
            amenitiesService.saveAmenities(amenities);
            return ResponseEntity.status(HttpStatus.CREATED).body("New amenty is added.");
        } else if (amenities.getLabel().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Label is empty.");
        } else if (amenities.getValue().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Value is empty.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("All fields are empty.");
        }
    }
}
