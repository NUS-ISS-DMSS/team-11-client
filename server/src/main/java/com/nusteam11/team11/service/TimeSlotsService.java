package com.nusteam11.team11.service;

import java.util.List;

import com.nusteam11.team11.model.TimeSlots;

public interface TimeSlotsService {
    public TimeSlots saveTimeSlots(TimeSlots timeSlot);
    public List<TimeSlots> getAllTimeSlots(TimeSlots timeSlot);
}
