package com.nusteam11.team11.repository;

import com.nusteam11.team11.model.SpaceAmenities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpaceAmenitiesRepository extends JpaRepository<SpaceAmenities,Integer> {

}
