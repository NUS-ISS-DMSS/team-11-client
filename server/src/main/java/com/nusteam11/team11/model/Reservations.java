package com.nusteam11.team11.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Reservations {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;
    private String reservation_date;
    private String status;

    @ManyToOne
    @JoinColumn(name = "space_id", referencedColumnName = "id")
    private Spaces space;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private Users user;

    @ManyToOne
    @JoinColumn(name = "time_id", referencedColumnName = "id")
    private TimeSlots timeSlot;

    public Reservations() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getReservation_date() {
        return reservation_date;
    }

    public void setReservation_date(String reservation_date) {
        this.reservation_date = reservation_date;
    }

    public Spaces getSpace() {
        return space;
    }

    public void setSpace(Spaces space) {
        this.space = space;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public TimeSlots getTimeSlot() {
        return timeSlot;
    }

    public void setTimeSlot(TimeSlots timeSlot) {
        this.timeSlot = timeSlot;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    
}
