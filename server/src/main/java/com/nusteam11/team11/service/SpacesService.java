package com.nusteam11.team11.service;

import java.util.List;

import com.nusteam11.team11.model.Spaces;

public interface SpacesService {
    public Spaces saveSpaces(Spaces space);
    public List<Spaces> getAllSpaces(Spaces space);
}
