package com.nusteam11.team11.service;

import java.util.List;

import com.nusteam11.team11.model.Amenities;

public interface AmenitiesService {
    public Amenities saveAmenities(Amenities amenity);
    public List<Amenities> getAllAmenities(Amenities amenities);
}
