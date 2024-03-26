package com.nusteam11.team11.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class SpaceAmenities {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "space_id", referencedColumnName = "id")
    private Spaces space;

    @ManyToOne
    @JoinColumn(name = "amenity_id", referencedColumnName = "id")
    private Amenities amenity;

    public SpaceAmenities() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Spaces getSpace() {
        return space;
    }

    public void setSpace(Spaces space) {
        this.space = space;
    }

    public Amenities getAmenity() {
        return amenity;
    }

    public void setAmenity(Amenities amenity) {
        this.amenity = amenity;
    }
}
