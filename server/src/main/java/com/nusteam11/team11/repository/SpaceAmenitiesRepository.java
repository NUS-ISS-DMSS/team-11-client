package com.nusteam11.team11.repository;

import com.nusteam11.team11.model.SpaceAmenities;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SpaceAmenitiesRepository extends JpaRepository<SpaceAmenities, Integer> {

    @Query("SELECT s, a.label FROM SpaceAmenities sa JOIN sa.space s JOIN sa.amenity a")
    List<Object[]> findAllSpaces(SpaceAmenities spaceAmenities);
}
