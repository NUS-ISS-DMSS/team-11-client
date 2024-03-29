package com.nusteam11.team11.service;

import java.util.List;

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

    @Override
    public List<Reservations> getAllReservations(Reservations reservations, int userID) {
        return reservationsRepository.findByUserId(userID);
    }
}
