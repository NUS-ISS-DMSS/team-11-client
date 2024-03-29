package com.nusteam11.team11.service;

import java.util.List;

import com.nusteam11.team11.model.Reservations;

public interface ReservationsService {
    public Reservations saveReservations(Reservations reservations);
    public List<Reservations> getAllReservations(Reservations reservations, int userID);
}
