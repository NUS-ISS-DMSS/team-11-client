package com.nusteam11.team11.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nusteam11.team11.model.Spaces;
import com.nusteam11.team11.repository.SpacesRepository;

@Service
public class SpacesServiceImpl implements SpacesService{
    @Autowired
    private SpacesRepository spacesRepository;

    @SuppressWarnings("null")
    @Override
    public Spaces saveSpaces(Spaces space) {
        return spacesRepository.save(space);
    }
}
