package com.nusteam11.team11.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nusteam11.team11.model.SpaceAmenities;
import com.nusteam11.team11.model.Spaces;
import com.nusteam11.team11.repository.AmenitiesRepository;
import com.nusteam11.team11.repository.SpaceAmenitiesRepository;
import com.nusteam11.team11.repository.SpacesRepository;
import com.nusteam11.team11.service.SpaceAmenitiesService;

@RestController
@RequestMapping("/spaceAmenities")
@CrossOrigin
public class SpaceAmenityController {

    @Autowired
    private SpaceAmenitiesService spaceAmenitiesService;

    @Autowired
    private SpacesRepository spacesRepository;

    @Autowired
    private AmenitiesRepository amenitiesRepository;

    @Autowired
    private SpaceAmenitiesRepository spaceAmenitiesRepository;

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
    public List<Map<String, Object>>findAllSpaces(SpaceAmenities spaceAmenities) {
        List<Object[]> resultList = spaceAmenitiesRepository.findAllSpaces(spaceAmenities);
        Map<Integer, Map<String, Object>> spaceMap = new HashMap<>();

        for (Object[] row : resultList) {
            Spaces space = (Spaces) row[0];
            String amenityLabel = (String) row[1];

            if (!spaceMap.containsKey(space.getId())) {
                Map<String, Object> spaceData = mapSpace(space);
                spaceData.put("amenities", new ArrayList<String>());
                spaceMap.put(space.getId(), spaceData);
            }

            @SuppressWarnings("unchecked")
            List<String> amenities = (List<String>) spaceMap.get(space.getId()).get("amenities");
            amenities.add(amenityLabel);
        }

        return new ArrayList<>(spaceMap.values());
    }

    private Map<String, Object> mapSpace(Spaces space) {
        Map<String, Object> spaceData = new HashMap<>();
        spaceData.put("id", space.getId());
        spaceData.put("name", space.getName());
        spaceData.put("description", space.getDescription());
        spaceData.put("address", space.getAddress());
        spaceData.put("operate_hour_st", space.getOperate_hour_st());
        spaceData.put("operate_hour_et", space.getOperate_hour_et());
        spaceData.put("days_closed", space.getDays_closed());
        spaceData.put("contact_num", space.getContact_num());
        spaceData.put("station", space.getStation());
        return spaceData;
    }
}
