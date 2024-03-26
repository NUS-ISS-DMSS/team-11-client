package com.nusteam11.team11.service;

import java.util.List;

import com.nusteam11.team11.model.SpaceAmenities;

public interface SpaceAmenitiesService {
    public SpaceAmenities savSpaceAmenities(SpaceAmenities spaceAmenities);
    public List<Object[]> findAllSpaces(SpaceAmenities spaceAmenities);
}
