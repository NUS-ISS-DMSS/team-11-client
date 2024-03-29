package com.nusteam11.team11.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nusteam11.team11.model.Amenities;
import com.nusteam11.team11.repository.AmenitiesRepository;

@Service
public class AmenitiesServiceImpl implements AmenitiesService{

    @Autowired
    private AmenitiesRepository amenitiesRepository;

    @SuppressWarnings("null")
    @Override
    public Amenities saveAmenities(Amenities amenity) {
        return amenitiesRepository.save(amenity);
    }

    @Override
    public List<Amenities> getAllAmenities(Amenities amenities) {
        return amenitiesRepository.findAll();
    }
}
