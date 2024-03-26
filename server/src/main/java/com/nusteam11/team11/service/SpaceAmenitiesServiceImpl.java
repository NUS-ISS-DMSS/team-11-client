package com.nusteam11.team11.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nusteam11.team11.model.SpaceAmenities;
import com.nusteam11.team11.repository.SpaceAmenitiesRepository;

@Service
public class SpaceAmenitiesServiceImpl implements SpaceAmenitiesService {

    @Autowired
    private SpaceAmenitiesRepository spaceAmenitiesRepository;

    @SuppressWarnings("null")

    @Override
    public SpaceAmenities savSpaceAmenities(SpaceAmenities spaceAmenities) {
        return spaceAmenitiesRepository.save(spaceAmenities);
    }

    @Override
    public List<SpaceAmenities> getAllSpaces(SpaceAmenities spaceAmenities) {
        return spaceAmenitiesRepository.findAll();
    }
}
