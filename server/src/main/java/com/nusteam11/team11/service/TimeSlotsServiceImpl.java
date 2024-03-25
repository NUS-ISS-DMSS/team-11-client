package com.nusteam11.team11.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nusteam11.team11.model.TimeSlots;
import com.nusteam11.team11.repository.TimeSlotsRepository;

@Service
public class TimeSlotsServiceImpl implements TimeSlotsService {

    @Autowired
    private TimeSlotsRepository timeSlotsRepository;

    @SuppressWarnings("null")

    @Override
    public TimeSlots saveTimeSlots(TimeSlots timeSlot) {
        return timeSlotsRepository.save(timeSlot);
    }
}
