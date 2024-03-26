package com.nusteam11.team11.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nusteam11.team11.model.SpaceAmenities;
import com.nusteam11.team11.repository.AmenitiesRepository;
import com.nusteam11.team11.repository.SpacesRepository;
import com.nusteam11.team11.service.SpaceAmenitiesService;

@RestController
@RequestMapping("/spaceAmenities")
public class SpaceAmenityController {

    @Autowired
    private SpaceAmenitiesService spaceAmenitiesService;

    @Autowired
    private SpacesRepository spacesRepository;

    @Autowired
    private AmenitiesRepository amenitiesRepository;

    @PostMapping("/createSpaceAmenities")
    public ResponseEntity<String> add(@RequestBody SpaceAmenities spaceAmenities) {
        int amenityID = spaceAmenities.getAmenity().getId();
        int spaceID = spaceAmenities.getSpace().getId();

        if (spacesRepository.existsById(spaceID) && amenitiesRepository.existsById(amenityID)) {
            spaceAmenitiesService.savSpaceAmenities(spaceAmenities);
            return ResponseEntity.status(HttpStatus.CREATED).body("New SpaceAmenity is added");
        } else if (!amenitiesRepository.existsById(amenityID)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Amenity ID does not exist");
        } else if (!spacesRepository.existsById(spaceID)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Space ID does not exist");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("All ID does not exist.");
        }
    }

    @GetMapping("/getAllSpaces")
    public List<SpaceAmenities> getAllSpaces(SpaceAmenities spaceAmenities) {
        return spaceAmenitiesService.getAllSpaces(spaceAmenities);
    }
}
