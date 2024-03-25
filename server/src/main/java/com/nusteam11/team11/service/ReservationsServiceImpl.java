package com.nusteam11.team11.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nusteam11.team11.model.Reservations;
import com.nusteam11.team11.repository.ReservationsRepository;

@Service
public class ReservationsServiceImpl implements ReservationsService{

    @Autowired
    private ReservationsRepository reservationsRepository;

    @SuppressWarnings("null")

    @Override
    public Reservations saveReservations(Reservations reservations) {
        return reservationsRepository.save(reservations);
    }
}
